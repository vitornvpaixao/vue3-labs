"use strict";
// Interfaces and Types
const user1 = {
    id: 2,
    name: 'Pedro',
    age: 22,
};
user1.age = 22; // there isnt an interface for user1 but if .age='22' js will decide that age is a number due to the definition of the object's prop value
const user = {
    id: 2,
    name: 'Pedro',
    age: 22, // Since we define this object as UserInterface, if we write value as a string it will an error immediately
};
const user2 = {
    // Without Error because we use a question mark in prop age. Object props can be required or not.
    id: 2,
    name: 'Pedro',
};
if (!user2.age) {
    // This isnt as good as we can think it is since we have to check it.
    console.log('User has no age defined');
}
else {
    console.log(user2.age);
}
const user4 = {
    id: 2,
    name: 'jhony',
    age: 34,
    greet(message) {
        console.log(`${message} ${this.name}`);
    },
    greeting: () => {
        console.log(`${user4.name} has ${user4.age}`);
    },
};
user4.greet('Hello');
user4.greeting();
