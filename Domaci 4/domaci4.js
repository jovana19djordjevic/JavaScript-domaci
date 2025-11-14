let dayOfWeek = "subota";
switch (dayOfWeek) {
	case "subota":
	case "nedelja":
		console.log("Weekend");
		break;
	case "petak":
		console.log("Weekend is coming");
		break;
	default:
		console.log("Work work");
}

/*
Kreiraj promenljivu temperatura koja sadrži trenutnu temperaturu u stepenima Celzijusa, a zatim napiši if-else strukturu koja ispisuje "Hladno je" ako je temperatura manja od 15, "Umereno je" ako je između 15 i 25, i "Vruće je" ako je veća od 25.

*/

let temperature = 30;

if (temperature < 15) {
	console.log("Hladno je");
} else if (temperature >= 15 && temperature <= 25) {
	console.log("Umereno je");
} else if (temperature > 25) {
	console.log("Vruce je");
}

/*

Kreiraj promenljivu dobaDana koja može imati vrednosti "jutro", "popodne", ili "veče", a zatim napiši if-else strukturu koja ispisuje odgovarajuću poruku kao što su "Dobro jutro", "Dobar dan", ili "Dobro veče" na osnovu vrednosti te promenljive.

*/

let dobaDana = "podne";
if (dobaDana == "jutro") {
	console.log("Dobro jutro");
} else if (dobaDana == "podne") {
	console.log("Dobar dan");
} else if (dobaDana == "vece") {
	console.log("Dobro vece");
}

/*

Kreiraj promenljivu godineRada koja sadrži broj godina koliko osoba radi u nekoj firmi, a zatim napiši if-else strukturu koja ispisuje "Početnik" ako je broj godina manji od 2, "Iskusan radnik" ako je između 2 i 5, i "Veteran" ako je veći od 5.

*/

let godineRada = 6;

if (godineRada < 2) {
	console.log("Pocetnik");
} else if (godineRada >= 2 && godineRada <= 5) {
	console.log("Iskusan radnik");
} else if (godineRada > 5) {
	console.log("Veteran");
}

/*
Kreiraj promenljivu age koja sadrži broj godina, a zatim napiši if-else strukturu koja ispisuje "Child" ako je broj godina manji od 12, "Teen" ako je između 12 i 18, i "Adult" ako je veći od 18.
*/

let age = 16;
if (age < 12) {
	console.log("Child");
} else if (age >= 12 && age <= 18) {
	console.log("Teen");
} else if (age > 18) {
	console.log("Adult");
}

/*
Kreiraj promenljivu score koja sadrži broj poena, a zatim napiši if-else strukturu koja ispisuje "Fail" ako je broj poena manji od 50, "Pass" ako je između 50 i 75, i "Excellent" ako je veći od 75.

*/

let score = 80;

if (score < 50) {
	console.log("Fail");
} else if (score >= 50 && score <= 75) {
	console.log("Pass");
} else if (score > 75) {
	console.log("Exellent");
}
