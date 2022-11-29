"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//created Object of User interface
let { name: userName, email: userLogin } = {
    name: 'Jakub',
    age: 26,
    id: 1,
    email: 'exampleEmail@exampleWeb.com',
};
console.log(`This is an userlogin: ${userLogin} and a password: ${userName}`);
//create employeer
let employeer = {
    name: 'NieRondel',
    age: 26,
    id: 1,
    email: 'niepracujeboniemusze@gmail.com',
    salary: 10000
};
let [user1, user2, ...restUsers] = [{
        name: 'Jakub',
        age: 26,
        id: 1,
        email: 'exampleEmail@exampleWeb.com',
    },
    {
        name: 'Tomasz',
        age: 54,
        id: 2,
        email: 'exampleEmail2@exampleWeb.com',
    },
    {
        name: 'Rafał',
        age: 36,
        id: 3,
        email: 'exampleEmail3@exampleWeb.com',
    },
    {
        name: 'Darek',
        age: 88,
        id: 4,
        email: 'exampleEmail4@exampleWeb.com',
    }];
let result = restUsers.filter(n => n.id > 3);
console.log(result);
