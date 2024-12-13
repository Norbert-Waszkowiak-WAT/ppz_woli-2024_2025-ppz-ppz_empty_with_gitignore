import { Injectable } from '@nestjs/common';
import { Event } from './events/events.schema';
import { CreateEventDto } from './events/dto/events.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CalendarService {
  constructor(
    @InjectModel('event') private readonly eventModel: Model<Event>,
  ) {}
  async createEvent(addEventDto: CreateEventDto, userId: any) {
    const newEvent = new this.eventModel({
      ...addEventDto,
      userId,
    });
    const result = newEvent.toObject();
    delete result.userId;
   return result;
  }

}
