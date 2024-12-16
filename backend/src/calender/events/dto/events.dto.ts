import { IsNotEmpty, IsOptional, IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateEventDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @Type(() => Date)
  startDate: Date;

  @IsNotEmpty()
  @Type(() => Date)
  endDate: Date;

  // Replace recurring with rrule
  @IsOptional()
  @IsString() // Validate as a string (RRule format)
  recurring?: string;
}
