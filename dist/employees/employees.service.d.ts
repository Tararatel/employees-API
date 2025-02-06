import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import Employee from './entities/employee.entity';
export declare class EmployeesService {
    private employees;
    getAll(): Employee[];
    getOne(id: number): Employee;
    remove(id: number): void;
    create(employeeData: CreateEmployeeDto): void;
    patch(id: number, updateData: UpdateEmployeeDto): void;
    reset(): void;
}
