let proizvodi = ["hleb", "mleko", "cips", "jabuke", "kafa"];

for (i = 0; i < proizvodi.length; i++) {
	if (
		proizvodi[i] == "hleb" ||
		proizvodi[i] == "jabuke" ||
		proizvodi[i] == "mleko"
	) {
		console.log(proizvodi[i] + "Zdrava hrana");
	}
}

let password = "string";

for (i = 0; i < password.length; i++) {
	if (password.length < 6) {
		console.log("Slaba");
	} else if (password.length >= 6 && password.length <= 10) {
		console.log("DObra");
	} else if (password.length > 10) {
		console.log("Odlicna");
	}
}

let chatFilter = "Ovaj film je glup i dosadan ";

let stopFilter = chatFilter.includes("glup", "dosadan", "uzasan");

for (i = 0; i < chatFilter.length; i++) {
	if (stopFilter == true) {
		console.log("Sadrzaj neprikadan");
	} else {
		console.log("OK");
	}
}

let drink = "vece";

if (drink == "jutro") {
	console.log("kafa");
} else if (drink == "podne") {
	console.log("voda");
} else if (drink == "vece") {
	console.log("caj");
}

let email = "info@mail.com";

for (i = 0; i < email.length; i++) {
	if (email[i] == "@" || email[i] == ".") {
		console.log("Validan");
	} else {
		console.log("Nevalidan");
	}
}

let name = "petAr";

let firstLetter = name.charAt(0);
let firstLetterCap = firstLetter.toUpperCase();
let remainingLetters = name.slice(1);
let capitalizedWord = firstLetterCap + remainingLetters;

console.log(capitalizedWord);

let task = [
	{ task: "Operi sudove", done: true },
	{ task: "Nauči JS", done: false },
	{ task: "Prošetaj psa", done: true },
];

for (i = 0; i < task.length; i++) {
	if (task[i].done === true) {
		console.log(task[i]);
	}
}

let password = "Moje je ime Marko";

let word = password.includes("Marko");

for (i = 0; i < password.length; i++) {
	if (word) {
		console.log("Lozinka sadrzi ");
	}
}

let movies = ["Matrix", "Avatar", "Titanic", "Inception"];

for (i = 0; i < movies.length; i++) {
	if (movies[i] == "Inception") {
		console.log("Na listi je");
	} else {
		console.log("Nije na listi");
	}
}
