interface person {
	readonly id: number;
	readonly birthday: Date;
	name: string;
	country: string;
}

const employee: person = {
	id: 345,
	birthday: new Date(),
	name: 'Jhonny',
	country: 'Portugal',
};

// Normally we dont want allow changing ids or birthday for obvious reasons. In this case the id and birthday props are mutable.
// To avoid this we use the keyword readonly.
