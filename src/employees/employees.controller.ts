import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import Employee from './entities/employee.entity';
import { EmployeesService } from './employees.service';

@Controller('api/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  getAll(): Employee[] {
    return this.employeesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') employeeId: number): Employee {
    return this.employeesService.getOne(employeeId);
  }

  @Post()
  create(@Body() employeeData: CreateEmployeeDto) {
    return this.employeesService.create(employeeData);
  }

  @Post('reset')
  reset() {
    this.employeesService.reset();
    return { message: 'Данные сброшены к изначальному состоянию' };
  }

  @Delete(':id')
  remove(@Param('id') employeeId: number) {
    return this.employeesService.remove(employeeId);
  }

  @Patch(':id')
  patch(
    @Param('id') employeeId: number,
    @Body() updateData: UpdateEmployeeDto,
  ) {
    return this.employeesService.patch(employeeId, updateData);
  }
}
