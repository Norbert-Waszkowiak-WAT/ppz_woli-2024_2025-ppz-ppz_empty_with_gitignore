import { Type } from "class-transformer";
import { IsOptional, IsString, ValidateNested } from "class-validator";
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
    @IsString() // Validate as a string (RRule format)
    recurring?: string;
  }