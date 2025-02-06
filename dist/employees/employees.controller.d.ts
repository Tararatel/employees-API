import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import Employee from './entities/employee.entity';
import { EmployeesService } from './employees.service';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    getAll(): Employee[];
    getOne(employeeId: number): Employee;
    create(employeeData: CreateEmployeeDto): void;
    reset(): {
        message: string;
    };
    remove(employeeId: number): void;
    patch(employeeId: number, updateData: UpdateEmployeeDto): void;
}
