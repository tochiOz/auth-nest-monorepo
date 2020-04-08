import { Model } from "mongoose"

import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"

import { UserCreationDto, UserDocument } from "../schemas/user.schema"
import { USERS_COLLECTION } from "../types/collection.types"

@Injectable()
export class UserService {
    constructor(
        @InjectModel(USERS_COLLECTION) private userModel: Model<UserDocument>,
    ) {}

    async createUser(user: UserCreationDto): Promise<UserDocument> {
        const createdUser = new this.userModel(user)
        return await createdUser.save()
    }

    async isExistUser(email: string): Promise<boolean> {
        const user = await this.findUserByEmail(email)
        return !!user
    }

    public async findUserByEmail(email: string): Promise<UserDocument> {
        return await this.userModel.findOne({ email }).exec()
    }
}
