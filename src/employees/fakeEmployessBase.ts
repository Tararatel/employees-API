import { faker } from '@faker-js/faker';

const generateFakeEmployees = (count = 10) => {
  return Array.from({ length: count }, (_, id) => ({
    id,
    employee_name: faker.person.fullName(),
    employee_salary: faker.number.int({ min: 50000, max: 500000 }),
    employee_age: faker.number.int({ min: 20, max: 70 }),
    profile_image: faker.image.avatar(),
  }));
};

const fakeEmployees = generateFakeEmployees(50);

export default fakeEmployees;
