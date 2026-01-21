"use strict";
// Types and Unions
const printID = (id) => {
    console.log('ID: ' + id);
};
printID(23234548483); // Accept numbers
printID('23234548483'); // Accepts strings
const signContract = (employee) => {
    console.log('Contract signed by ' + employee.name + ' with the following email: ' + employee.creditScore);
};
const clientJhon = {
    id: 1,
    name: 'Jhon',
    email: 'jhon@a.pt',
    creditScore: 240,
};
signContract(clientJhon);
