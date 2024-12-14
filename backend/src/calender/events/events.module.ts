import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { userModel } from 'src/users/users.schema';
import { EventSchema } from "./events.schema";
import { EventsService } from "./events.service"
import { Recurring , RecurringSchema } from '../recurring/recurring.schema';
import { EventsController } from "./events.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: "user", schema: userModel }]),
  MongooseModule.forFeature([{ name: "event", schema: EventSchema }]),
  MongooseModule.forFeature([{ name: "recurring", schema: RecurringSchema }]),
],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService]
})
export class EventsModule {}