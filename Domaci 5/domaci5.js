let cars = [
	"Audi",
	"BMW",
	"Mercedes-Benz",
	"Volkswagen",
	"Porsche",
	"Opel",
	"Ford",
	"Chevrolet",
	"Cadillac",
	"Dodge",
	"Chrysler",
	"Jeep",
	"Ram",
	"Tesla",
	"Lucid",
	"Rivian",
	"Toyota",
	"Lexus",
	"Honda",
	"Acura",
	"Nissan",
	"Infiniti",
	"Mazda",
	"Subaru",
	"Mitsubishi",
	"Suzuki",
	"Hyundai",
	"Kia",
	"Genesis",
	"Ferrari",
	"Lamborghini",
	"Maserati",
	"Pagani",
	"Bugatti",
	"Bentley",
	"Rolls-Royce",
	"Aston Martin",
	"McLaren",
	"Lotus",
	"Alfa Romeo",
	"Fiat",
	"Lancia",
	"Peugeot",
	"Renault",
	"Citroën",
	"DS Automobiles",
	"Skoda",
	"Seat",
	"Cupra",
	"Volvo",
	"Polestar",
	"Saab",
	"Jaguar",
	"Land Rover",
	"Mini",
	"Smart",
	"Maybach",
	"GMC",
	"Hummer",
	"Buick",
	"Lincoln",
	"Tata",
	"Mahindra",
	"Geely",
	"BYD",
	"Great Wall",
	"Chery",
	"Nio",
	"XPeng",
	"Hongqi",
	"Daewoo",
	"Dacia",
	"Isuzu",
	"Scion",
	"Rover",
	"Pontiac",
	"Oldsmobile",
	"Plymouth",
	"Saturn",
	"Saic",
	"Koenigsegg",
	"Zastava",
	"Yugo",
];
let samoglasnici = ["a", "e", "i", "o", "u"];

for (let i = 0; i < cars.length; i++) {
	let firstWord = cars[i][0].toLowerCase();

	if (firstWord === "a") {
		continue;
	}
	console.log(cars[i]);
}

/*
*Kreiraj niz numbers sa nekoliko brojeva, a zatim napiši petlju koja prolazi kroz sve brojeve i koristi if-else strukturu da ispise "Even" za parne i "Odd" za neparne brojeve.

*
*/

let brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i, "Even");
	} else {
		console.log(i, "Odd");
	}
}

let car = {
	make: "bmw",
	model: 840,
	year: 2022,
	color: "black",
};
for (let keyCar in car) {
	switch (car[keyCar]) {
		case "bmw":
			console.log(car);
			break;
	}
}

/*
*Kreiraj niz students koji sadrži objekte sa svojstvima name i grade, a zatim napiši for petlju koja prolazi kroz niz i koristi if-else strukturu da ispise "Pass" za ocene 50 i više, i "Fail" za ocene ispod 50.

*/

let students = [
	{
		name: "jovana",
		grade: 60,
	},
	{
		name: "milan",
		grade: 70,
	},
	{
		name: "ivan",
		grade: 45,
	},
];

for (i = 0; i < students.length; i++) {
	if (students[i].grade >= 50) {
		console.log(students[i].name + "Pass");
	} else if (students[i].grade < 50) {
		console.log(students[i].name + "Fail");
	}
}

/*
*Kreiraj niz grades koji sadrži ocene učenika, a zatim napiši petlju koja prolazi kroz niz i koristi if-else strukturu da ispise "Excellent" za ocene iznad 90, "Good" za ocene između 75 i 90, "Average" za ocene između 50 i 75, i "Fail" za ocene ispod 50.

*/
let grades = [40, 60, 89, 99, 100, 75, 78, 55];

for (i = 0; i < grades.length; i++) {
	if (grades[i] > 90) {
		console.log(grades[i] + "Exellent");
	} else if (grades[i] >= 75 && grades[i] <= 90) {
		console.log(grades[i] + "Good");
	} else if (grades[i] >= 50 && grades[i] <= 75) {
		console.log(grades[i] + "Average");
	} else if (grades[i] < 50) {
		console.log(grades[i] + "Fail");
	}
}

let fruits = ["apple", "banana", "mango"];

for (i = 0; i < fruits.length; i++) {
	let fruit = fruits[i];
	switch (fruit) {
		case "apple":
			console.log("Apple is red");
			break;
		case "banana":
			console.log("Banana is yellow");
			break;
		case "mango":
			console.log("Mango is orange");
			break;
		default:
			console.log("False fruit");
	}
}

/*
*Kreiraj objekat book sa svojstvima title, author, year, i genre, a zatim napiši for-in petlju koja prolazi kroz sva svojstva objekta i koristi if-else strukturu da ispise poruku "Old book" ako je godina izdanja pre 2000, inače "New book".

*/

let book = {
	title: "razgovori sa bogom",
	author: "nil donald vols",
	year: 2022,
};

for (let yearBook in book) {
	if (book.year < 2000) {
		console.log(book.year + "Old book");
	} else {
		console.log(book.year + "New book");
	}
}

/*
*Kreiraj niz employees koji sadrži objekte sa svojstvima name i salary, a zatim napiši for petlju koja prolazi kroz niz i koristi if-else strukturu da ispise "High salary" za plate iznad 50000, "Medium salary" za plate između 30000 i 50000, i "Low salary" za plate ispod 30000.

*/
let employees = [
	{
		name: "jovan",
		salary: 25000,
	},
	{
		name: "stefan",
		salary: 55000,
	},
	{
		name: "ivana",
		salary: 35000,
	},
];

for (i = 0; i < employees.length; i++) {
	if (employees[i].salary >= 50000) {
		console.log(employees[i].name + "High Salary");
	} else if (employees[i].salary >= 30000 && employees[i].salary <= 50000) {
		console.log(employees[i].name + "Midium Salary");
	} else if (employees[i].salary < 30000) {
		console.log(employees[i].name + "Low Salary");
	}
}

/*
*Kreiraj niz cities sa nekoliko imena gradova, a zatim napiši petlju koja prolazi kroz niz i koristi switch strukturu da ispise poruku specifičnu za svaki grad (npr. "Welcome to New York", "Welcome to Los Angeles").

*/
let cities = ["New Yourk", "Los Angeles", "Las Vegas", "Toronto"];
console.log(cities);

for (i = 0; i < cities.length; i++) {
	switch (cities[i]) {
		case "New Yourk":
			console.log("Welcome to" + cities[i]);
			break;
		case "Los Angeles":
			console.log("WElcome to" + cities[i]);
			break;
		case "Las Vegas":
			console.log("Welcome" + cities[i]);
			break;
		case "Toronto":
			console.log("Welcome" + cities[i]);
			break;
	}
}
