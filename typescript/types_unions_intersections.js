"use strict";
// Types and Unions
const printID = (id) => {
    console.log('ID: ' + id);
};
printID(23234548483); // Accept numbers
printID('23234548483'); // Accepts strings
const signContract = (employe) => {
    console.log('Contract signed by ' + employe.name + ' with the following email: ' + employe.creditScore);
};
const clientJhon = {
    id: 1,
    name: 'Jhon',
    email: 'jhon@a.pt',
    creditScore: 240,
};
signContract(clientJhon);
