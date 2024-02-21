import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import mongoose,{ Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor (
    @InjectConnection() private readonly connection: mongoose.Connection,
    @InjectModel(User.name) private readonly userModel: Model<User>){} 

  async createUser(createUserDto: CreateUserDto):Promise<User> {
  const userCreated = new this.userModel(createUserDto)  
    return await userCreated.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOneById(id: string) {
    return await this.userModel.findById(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
