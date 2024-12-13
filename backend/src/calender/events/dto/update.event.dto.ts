import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested } from "class-validator";
import { RecurringDto } from "src/calender/recurring/recurring.dto";

export class UpdateEventDto {
    @IsOptional()
    @IsString()
    title?: string;
  
    @IsOptional()
    @IsString()
    type?: string;
  
    @IsOptional()
    @IsString()
    description?: string;
  
    @IsOptional()
    @Type(() => Date)
    startDate?: Date;
  
    @IsOptional()
    @Type(() => Date)
    endDate?: Date;
  
    @IsOptional()
    @ValidateNested()
    @Type(() => RecurringDto)
    recurring?: RecurringDto;
  }