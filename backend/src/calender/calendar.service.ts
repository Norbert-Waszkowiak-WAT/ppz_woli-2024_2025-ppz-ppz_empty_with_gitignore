import { Injectable } from '@nestjs/common';
import { EventSchema } from './events/events.schema';
import { CreateEventDto } from './events/events.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class CalendarService {
  constructor(
    @InjectModel('event') private readonly eventModel: Model<EventSchema>,
  ) {}
  async createEvent(addEventDto: CreateEventDto, userId: any//createEventDto: CreateEventDto, userId: string,
  )
  {}
}
