"use strict";
// Type Annotation | Basics
let id = 5;
let company = 'vp enterprises';
let isPublished = true;
let ids = [1, 2, 3, 4, 5];
let x = 'Pedro'; // any defies a bit the point of ts
let xArr = ['pedro', 0, true]; // any only should be used in extreme scenarios - Avoid as musch as possible
const concatenateValues = (a, b) => {
    return a + b;
};
console.log(concatenateValues('Hello ', 'world'));
console.log(concatenateValues('5', '10'));
