let id: number = 5;
let company: string = 'vp enterprises';
let isPublished: boolean = true;

let ids: number[] = [1, 2, 3, 4, 5];
let x: any = 'Pedro'; // any defies a bit the point of ts
let xArr: any[] = ['pedro', 0, true]; // any only should be used in extreme scenarios - Avoid as musch as possible

const concatenateValues = (a: string, b: string): string => {
	return a + b;
};

console.log(concatenateValues('Hello ', 'world'));
console.log(concatenateValues('5', '10'));
