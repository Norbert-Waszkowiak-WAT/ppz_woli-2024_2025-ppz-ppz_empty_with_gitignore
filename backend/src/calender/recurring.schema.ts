import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type RecurringDocument = Recurring & Document;
@Schema()
export class Recurring {
  @Prop({ required: true })
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';

  @Prop({ required: true })
  interval: number;

  @Prop()
  byDay?: string[];

  @Prop()
  byMonth?: number[];

  @Prop()
  endDate?: Date;
}

export const RecurringSchema = SchemaFactory.createForClass(Recurring);