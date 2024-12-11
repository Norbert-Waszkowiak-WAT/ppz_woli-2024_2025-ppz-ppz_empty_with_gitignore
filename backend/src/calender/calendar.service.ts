import { Injectable } from '@nestjs/common';
import { Event } from './events/events.schema';
import { CreateEventDto } from './events/events.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class CalendarService {
  constructor(
    @InjectModel('event') private readonly eventModel: Model<Event>,
  ) {}
  async createEvent(
  )
  {}
}
