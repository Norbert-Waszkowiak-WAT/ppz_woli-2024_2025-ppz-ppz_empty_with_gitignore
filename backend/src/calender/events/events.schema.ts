import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Event {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string;

  @Prop()
  description?: string;

  @Prop({ required: true })
  startDate: Date;

  @Prop({ required: true })
  endDate: Date;

  @Prop({ required: true })
  userId: string; // Reference to the user

  @Prop()
  recurring?: string; // Store RRule as a string

  @Prop({ required: false })
  occurrenceDate: string;

  @Prop({ required: false })
  duration?: number; // Duration of the event in minutes
}

export const EventSchema = SchemaFactory.createForClass(Event);

EventSchema.index({ userId: 1, startDate: 1 });
