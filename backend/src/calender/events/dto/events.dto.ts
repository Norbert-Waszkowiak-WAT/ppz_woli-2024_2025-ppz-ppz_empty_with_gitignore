import { IsNotEmpty, IsOptional, IsDate, IsString, ValidateNested, IsIn, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { RecurringDto } from '../../recurring/recurring.dto';



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

  @IsOptional()
  @ValidateNested()
  @Type(() => RecurringDto)
  recurring?: RecurringDto;
}
