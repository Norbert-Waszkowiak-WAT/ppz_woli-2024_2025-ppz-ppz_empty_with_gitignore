import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { UsersController } from "./users.controller"
import { userModel } from "./users.schema"
import { UsersService } from "./users.service"
@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: userModel }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}