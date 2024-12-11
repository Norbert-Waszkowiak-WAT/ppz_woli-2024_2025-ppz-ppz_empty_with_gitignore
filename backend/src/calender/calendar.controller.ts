import { Body, Controller, Get, Post, Req, Request, UseGuards} from "@nestjs/common";
import { CalendarService } from "./calendar.service"
import{ Event} from "./events/events.schema"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AuthGuard } from "@nestjs/passport";
import { CreateEventDto } from './events/events.dto';
import { LocalAuthGuard } from "src/auth/local.auth.guard";

@Controller('calendar')
  export class CalendarController {
    constructor(@InjectModel('user') private readonly Events: Model <Event>,
      private readonly CalendarService: CalendarService,
    ) {}
    @Post('/addEvent')
    @UseGuards(LocalAuthGuard) // Ensure the user is authenticated
    async addEvent(@Body() addEventDto: CreateEventDto, @Req() req: Request) {
     //const userId = req.session.userId;
     
     return {
       message: 'Event added successfully'
     }
     // return this.CalendarService.createEvent(addEventDto, userId);
    }
    
}