import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type recruitDocument = HydratedDocument<userModel>;
@Schema()
export class userModel {
    @Prop({ type: Types.ObjectId, default: () => new Types.ObjectId() })
    _id: Types.ObjectId;

    @Prop({required:[true, 'name is required']})
    username: string;

    @Prop( { type: String, required: [ true, 'password is required' ] })
    password:string;

    @Prop({ type: Date, default: () => new Date() })
    createdAt?: Date;

}

export const recruitSchema = SchemaFactory.createForClass(userModel);

recruitSchema.index({ username: 1 }, { unique: true });