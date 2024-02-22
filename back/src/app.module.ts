import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientModule } from './client/client.module';
MongooseModule

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://correofrg:felix@book-api.nbz0kit.mongodb.net/werjunior'),
    UsersModule,
    ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
