import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userModel, userSchema } from './users.schema';
@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly userModel: Model<userSchema>) {}
  async insertUser(userName: string, password: string,email: string) {
    const username = userName.toLowerCase(); 
    const newUser = new this.userModel({
      username,
      password,
      email
    });
    await newUser.save();
    return newUser;
  }
  async getUser(email: string) {
    const user = await this.userModel.findOne({ email });
    return user;
  }
}