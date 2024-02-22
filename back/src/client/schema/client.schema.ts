import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Client {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    password: string;
    
}
export const ClientSchema = SchemaFactory.createForClass(Client);