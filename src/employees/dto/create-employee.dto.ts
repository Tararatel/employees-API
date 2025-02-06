import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  readonly employee_name: string;

  @IsNumber()
  readonly employee_salary: number;

  @IsNumber()
  readonly employee_age: number;

  @IsOptional()
  @IsNumber()
  readonly id: number;

  @IsOptional()
  @IsString()
  readonly profile_image: string;
}
