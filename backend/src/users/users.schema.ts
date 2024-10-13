import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type recruitDocument = HydratedDocument<userSchema>;
@Schema()
export class userSchema {
    @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
    _id: Types.ObjectId;

    @Prop({required:[true, 'name is required']})
    username: string;

    @Prop( { type: String, required: [ true, 'password is required' ] })
    password:string;

    @Prop({ type: String, required: [ true, 'email is required' ] })
    email: string;

    @Prop({ type: Date, default: () => new Date() })
    createdAt?: Date;
    
    @Prop({ type: Boolean, default: false })
    verified?: boolean;

    @Prop({ type: Boolean, default: false })
    twofaenabled?: boolean;
    
}

export const userModel = SchemaFactory.createForClass(userSchema);

userModel.index({ username: 1 }, { unique: true });