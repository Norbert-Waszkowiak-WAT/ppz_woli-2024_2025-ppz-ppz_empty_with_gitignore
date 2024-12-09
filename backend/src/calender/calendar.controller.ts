import { Body, Controller, Get, Post, Request, UseGuards} from "@nestjs/common";
import { CalendarService } from "./calendar.service"
import{ EventSchema} from "./events/events.schema"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AuthGuard } from "@nestjs/passport";
import { CreateEventDto } from './events/events.dto';

@Controller('calendar')
  export class CalendarController {
    constructor(@InjectModel('user') private readonly Events: Model <EventSchema>,
      private readonly CalendarService: CalendarService,
    ) {}
    @Post()
    @UseGuards(AuthGuard) // Ensure the user is authenticated
    async addEvent(@Body() addEventDto: CreateEventDto, @Request() req: Request) {
     // const userId = req.user.id; // Assume user info is attached by the auth guard
     // return this.CalendarService.createEvent(addEventDto, userId);
    }
    
}