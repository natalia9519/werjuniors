import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    lastName: string;
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    password: string;
    @Prop({ required: true })
    city: string;
    @Prop()
    coder:boolean;
    @Prop({ required: false })
    photo: string;
    @Prop({ type: Object, default: false })
    stack: { Html?: boolean, Css?: boolean, JavaScript?: boolean, React?: boolean, Nest?: boolean, MySQL: boolean, Mongodb: boolean };
}
export const UserSchema = SchemaFactory.createForClass(User);