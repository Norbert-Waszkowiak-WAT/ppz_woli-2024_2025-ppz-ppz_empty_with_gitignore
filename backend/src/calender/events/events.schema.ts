import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Recurring , RecurringSchema } from '../recurring.schema';


@Schema()
export class Event {
  @Prop({ required: true })
  title: string;
  @Prop({required: true})
  type: string;
  @Prop()
  description?: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  userId: string; // Reference to the user

  @Prop({ type: RecurringSchema })
recurring?: Recurring;
}

export const EventSchema = SchemaFactory.createForClass(Event);

EventSchema.index({ userId: 1, startDate: 1 });