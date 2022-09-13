const Employee = require('../Lib/Employee');

describe('Employee', () => {
    it('can create an individual employee as an object', () => {
        const employeeTest = new Employee();
        expect(typeof(employeeTest)).toBe('object');
    })

    it('employee should have a name', () => {
        const name = 'spencer';
        const employeeTest = new Employee(name);
        expect(employeeTest.name).toBe(name);
    })

})