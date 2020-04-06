import { Schema, Document } from "mongoose"
import { IsEmail, IsNotEmpty } from "class-validator"

export const RefreshTokenSchema = new Schema({
  email: String,
  userId: String,
  refresh_token: String,
  isAvailable: Boolean,
})

export interface RefreshTokenDocument extends Document {
    email: string
    userId: string
    refresh_token: string
    isAvailable: boolean
}

export class RefreshTokenCreationDto {
    @IsEmail()
    email: string

    @IsNotEmpty()
    userId: string

    @IsNotEmpty()
    refresh_token: string

    isAvailable: boolean
}