"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const fakeEmployessBase_1 = require("./fakeEmployessBase");
let EmployeesService = class EmployeesService {
    constructor() {
        this.employees = fakeEmployessBase_1.default;
    }
    getAll() {
        return this.employees;
    }
    getOne(id) {
        const employee = this.employees.find((employee) => employee.id === id);
        if (!employee) {
            throw new common_1.NotFoundException(`Сотрудник с id: ${id} не найден`);
        }
        return employee;
    }
    remove(id) {
        this.getOne(id);
        this.employees = this.employees.filter((employee) => employee.id !== id);
    }
    create(employeeData) {
        this.employees.push(Object.assign({ id: this.employees.length + 1 }, employeeData));
    }
    patch(id, updateData) {
        const employee = this.getOne(id);
        this.remove(id);
        this.employees.push(Object.assign(Object.assign({}, employee), updateData));
    }
    reset() {
        this.employees = [...fakeEmployessBase_1.default];
    }
};
exports.EmployeesService = EmployeesService;
exports.EmployeesService = EmployeesService = __decorate([
    (0, common_1.Injectable)()
], EmployeesService);
//# sourceMappingURL=employees.service.js.map