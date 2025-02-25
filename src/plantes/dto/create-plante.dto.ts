import { IsString, IsInt, IsBoolean, IsOptional, IsDateString } from 'class-validator';

export class CreatePlanteDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  quantity: number;

  @IsDateString()
  addedDate: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean = true;

  @IsString()
  @IsOptional()
  imageUrl ?: string;
}
