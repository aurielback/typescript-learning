//import 
import { Login } from "./interface";


//interface
interface Address{

    street : string;
    city : string;
    state : string;
    pin : string;
};


//class1
class Employee implements Login{

    private id! : number;
    protected firstName! : string;
    private lastName! : string;
    address : Address;

    constructor(id : number, firstName : string, lastName : string, address : Address){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

    static getEmployeeCount() : number{
        return 50;
    }

    getNameWithAddres() : string{
        return `${this.firstName} stays at  ${this.address}`;
    }

    get empId() : number{
        return this.id;
    }

    set empId(id : number){
        this.id = id;
    }

    get empFirstName() : string{
        return this.empFirstName;
    }

    set empFirstName(firstName : string){
        this.firstName = firstName;
    }

    get empLastName() : string{
        return this.lastName;
    }

    set empLastName(lastName : string){
        this.lastName = this.lastName;
    }

    get empAddress() : Address{
        return this.address;
    }

    set empAddress(address : Address){
        this.address = address;
    }
}

//class2
class Manager extends Employee{

    constructor(id : number, firstName : string, lastName : string, address : Address){
        super(id, firstName, lastName, address);
    }

    getNameWithAddres(): string {
        return `${this.firstName} is manager in ${this.address}`
    }
}


//runs
let employee = new Employee(1, 'Pani', 'Pracownik',
    {street : 'Dluga', city : 'Wroclaw', state: 'DOL', pin : '23-232'});

//setter and getter use
employee.empId = 10;
console.log(employee.empId);


let manager = new Manager(1, 'Pan', 'Manager', 
    {street : 'Kromera', city : 'Wroclaw', state: 'DOL', pin : '23-332'});
console.log(manager);