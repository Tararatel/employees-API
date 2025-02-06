import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import Employee from './entities/employee.entity';
import fakeEmployees from './fakeEmployessBase';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = fakeEmployees;
  getAll(): Employee[] {
    return this.employees;
  }
  getOne(id: number): Employee {
    const employee = this.employees.find((employee) => employee.id === id);
    if (!employee) {
      throw new NotFoundException(`Сотрудник с id: ${id} не найден`);
    }
    return employee;
  }

  remove(id: number) {
    this.getOne(id);
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }

  create(employeeData: CreateEmployeeDto) {
    this.employees.push({ id: this.employees.length + 1, ...employeeData });
  }

  patch(id: number, updateData: UpdateEmployeeDto) {
    const employee = this.getOne(id);
    this.remove(id);
    this.employees.push({ ...employee, ...updateData });
  }

  reset() {
    this.employees = [...fakeEmployees];
  }
}
