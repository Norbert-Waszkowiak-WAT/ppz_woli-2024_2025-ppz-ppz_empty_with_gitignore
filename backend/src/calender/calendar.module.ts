import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { userModel } from 'src/users/users.schema';
import { CalendarService } from "./calendar.service"
import { CalendarController } from "./calendar.controller"
import { EventsModule } from "./events/events.module";
@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: userModel }]),
  EventsModule,
  
],
  controllers: [CalendarController],
  providers: [CalendarService],
  exports: [],
})
export class CalendarModule {}