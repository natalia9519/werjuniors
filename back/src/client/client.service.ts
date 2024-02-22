import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './schema/client.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ClientService {
  constructor (
    @InjectConnection() private readonly connection: mongoose.Connection,
    @InjectModel(Client.name) private readonly clientModel: Model<Client>){} 

    async createClient(createClientDto: CreateClientDto):Promise<Client> {
      const clientCreated = new this.clientModel(createClientDto)  
        return await clientCreated.save();
      }
    
      async findAll() {
        return await this.clientModel.find().exec();
      }
    
      async findOneById(id: string) {
        return await this.clientModel.findById(id);
      }
      async   findOneByEmail(email: string) {
        return await this.clientModel.find({email});
      }
    

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
