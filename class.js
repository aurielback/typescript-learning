"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
//class1
class Employee {
    constructor(id, firstName, lastName, address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    login() {
        return {
            name: 'Jakub',
            age: 26,
            id: 1,
            email: '',
        };
    }
    static getEmployeeCount() {
        return 50;
    }
    getNameWithAddres() {
        return `${this.firstName} stays at  ${this.address}`;
    }
    get empId() {
        return this.id;
    }
    set empId(id) {
        this.id = id;
    }
    get empFirstName() {
        return this.empFirstName;
    }
    set empFirstName(firstName) {
        this.firstName = firstName;
    }
    get empLastName() {
        return this.lastName;
    }
    set empLastName(lastName) {
        this.lastName = this.lastName;
    }
    get empAddress() {
        return this.address;
    }
    set empAddress(address) {
        this.address = address;
    }
}
//class2
class Manager extends Employee {
    constructor(id, firstName, lastName, address) {
        super(id, firstName, lastName, address);
    }
    getNameWithAddres() {
        return `${this.firstName} is manager in ${this.address}`;
    }
}
//runs
let employee = new Employee(1, 'Pani', 'Pracownik', { street: 'Dluga', city: 'Wroclaw', state: 'DOL', pin: '23-232' });
//setter and getter use
employee.empId = 10;
console.log(employee.empId);
let manager = new Manager(1, 'Pan', 'Manager', { street: 'Kromera', city: 'Wroclaw', state: 'DOL', pin: '23-332' });
console.log(manager);
