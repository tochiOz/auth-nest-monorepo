import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"

import { getVariableEnvironment, GlobalNestModule } from "@lib/global-nest"

import { UserService } from "./providers/user.service"
import { UserCredentialService } from "./providers/user-credential.service"
import { UserSchema } from "./schemas/user.schema"
import { USERS_COLLECTION } from "./types/collection.types"
import { UserDatabaseCreation, UserDatabaseFind, UserDatabaseUpdate } from "./providers/database-layers"

@Module({
    imports: [
        GlobalNestModule,
        MongooseModule.forRoot(getVariableEnvironment("MONGO_DB_STRING_CONNECTION")),
        MongooseModule.forFeature([{ name: USERS_COLLECTION, schema: UserSchema }]),
    ],
    providers: [
        UserService,
        UserCredentialService,
        UserDatabaseCreation,
        UserDatabaseFind,
        UserDatabaseUpdate,
    ],
    exports: [
        UserService,
        UserCredentialService,
    ],
})
export class UserModule {}
