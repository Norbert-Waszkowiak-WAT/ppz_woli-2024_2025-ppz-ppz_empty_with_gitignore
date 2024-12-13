import { Injectable, NotFoundException } from '@nestjs/common';
import { Event } from './events/events.schema';
import { CreateEventDto } from './events/dto/events.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateEventDto } from './events/dto/update.event.dto';

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
    await newEvent.save(); 
    const result = newEvent.toObject();
    delete result.userId;
   return result;
  }
  async updateEvent(eventId: string, updateEventDto: UpdateEventDto) {
    const event = await this.eventModel.findById(eventId);
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    Object.assign(event, updateEventDto);
    await event.save();
    const result = event.toObject();
    delete result.userId;
    return result;
  }
}
