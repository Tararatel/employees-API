"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const generateFakeEmployees = (count = 10) => {
    return Array.from({ length: count }, (_, id) => ({
        id,
        employee_name: faker_1.faker.person.fullName(),
        employee_salary: faker_1.faker.number.int({ min: 50000, max: 500000 }),
        employee_age: faker_1.faker.number.int({ min: 20, max: 70 }),
        profile_image: faker_1.faker.image.avatar(),
    }));
};
const fakeEmployees = generateFakeEmployees(50);
exports.default = fakeEmployees;
//# sourceMappingURL=fakeEmployessBase.js.map