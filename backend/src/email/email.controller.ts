import { Body, Controller, Post } from "@nestjs/common";
import { EmailService } from "src/email/email.service";

@Controller()
  export class EmailController {
    constructor(private readonly EmailService: EmailService) {}
    


  }