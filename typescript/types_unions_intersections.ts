// Types and Unions

// Interfaces mostly done for objects
// Types is for single fields

// Unions has 2 differente sets of data and acepts both of them
type IDFieldType = string | number;

const printID = (id: IDFieldType) => {
	console.log('ID: ' + id);
};

printID(23234548483); // Accept numbers
printID('23234548483'); // Accepts strings

// Intersections

interface BussinessPartner {
	name: string;
	creditScore: number;
}

interface UserIdentity {
	id: number;
	email: string;
}

type Employee = BussinessPartner & UserIdentity;

const signContract = (employee: Employee): void => {
	console.log(
		'Contract signed by ' + employee.name + ' with the following email: ' + employee.creditScore,
	);
};

const clientJhon: Employee = {
	id: 1,
	name: 'Jhon',
	email: 'jhon@a.pt',
	creditScore: 240,
};

signContract(clientJhon);
