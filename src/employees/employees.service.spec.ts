import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeesService],
    }).compile();

    service = module.get<EmployeesService>(EmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Тестирование ф-ции getAll', () => {
    it('Должен возвращаться массив', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('Тестирование ф-ции getOne', () => {
    it('Должен возвращаться сотрудник', () => {
      const result = service.getOne(1);
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
    });

    it('Должна возвращаться 404 ошибка', () => {
      try {
        service.getOne(666);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Сотрудник с id: 666 не найден`);
      }
    });
  });

  describe('Тестирование ф-ции remove', () => {
    it('Сотрудник удаляется', () => {
      const allEmp = service.getAll();
      service.remove(1);
      const afterRemove = service.getAll();
      expect(afterRemove.length).toBeLessThan(allEmp.length);
    });
    it('Должна возвращаться 404 ошибка', () => {
      try {
        service.remove(666);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Сотрудник с id: 666 не найден`);
      }
    });
  });

  describe('Тестирование ф-ции create', () => {
    it('Сотрудник добавляется', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        id: 666,
        employee_name: 'Boris',
        employee_salary: 666,
        employee_age: 666,
        profile_image: '',
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('Тестирование ф-ции patch', () => {
    it('Сотрудник изменён', () => {
      service.create({
        id: 666,
        employee_name: 'Boris',
        employee_salary: 666,
        employee_age: 666,
        profile_image: '',
      });
      service.patch(666, {
        employee_name: 'Oleg',
      });
      const getOneEmp = service.getOne(666);
      expect(getOneEmp.employee_name).toEqual('Oleg');
    });
    it('Должна возвращаться 404 ошибка', () => {
      try {
        service.patch(666, { employee_name: 'Tarakan Fred' });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
