import { IsNotEmpty, IsOptional, IsDate, IsString, ValidateNested, IsIn, IsArray } from 'class-validator';
import { Type } from 'class-transformer';


export class RecurringDto {
    @IsNotEmpty()
    @IsIn(['daily', 'weekly', 'monthly', 'yearly'])
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  
    @IsNotEmpty()
    interval: number;
  
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    byDay?: string[];
  
    @IsOptional()
    @IsArray()
    @Type(() => Number)
    byMonth?: number[];
  
    @IsOptional()
    @Type(() => Date)
    endDate?: Date;
  }
