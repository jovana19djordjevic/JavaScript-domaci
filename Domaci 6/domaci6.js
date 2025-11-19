let names = ["admin", "administrator", "toma"];

/*
*  Da li je ime koje je korisnik uneo u arrayu names
---> toma --> Da li se to ime nalazi u arrayu names ?
-- > Ako se nalazi ispisati preko alerta "Dobrodosao administratore"
--> Ako se Ne nalazi onda "Nemate pristup sajtu"
*/
let alowedTypes = ["admin", "administrator", "toma"];
let ifcheck = alowedTypes.includes("admin");
console.log(ifcheck);

if (ifcheck == true) {
	alert("Vi ste administrator");
} else {
	alert("Nemate pristup sajtu");
}

/*
*Kreiraj promenljivu grade koja prima ocenu unetu od strane korisnika putem prompt funkcije, a zatim napiši if-else strukturu koja koristi alert da ispise "Excellent" za ocene iznad 90, "Good" za ocene između 75 i 90, "Average" za ocene između 50 i 75, i "Fail" za ocene ispod 50.

*/

let grade = prompt("Unesi ocenu");
console.log(grade);

if (grade > 90) {
	alert("Exelent");
} else if (grade >= 75 && grade < 90) {
	alert("Good");
} else if (grade >= 50 && grade < 75) {
	alert("Average");
} else if (grade < 50) {
	alert("Fail");
}

/*
*Kreiraj niz shoppingList koji sadrži nekoliko artikala unetih od strane korisnika putem prompt funkcije (koristi split(',') da bi razdvojio stvari u nizu), a zatim napiši for petlju koja prolazi kroz niz i koristi switch strukturu da ispise specifične poruke za određene artikle (npr. "Buy fruits", "Buy vegetables") koristeći alert za prikaz poruka.

*/

let product = prompt("Unesi proizvode");

let shopingList = product.split(`,`);

for (i = 0; i < shopingList.length; i++) {
	switch (product) {
		case "apple":
		case "banana":
		case "orange":
			alert("Buy fruits");
			break;
		case "carot":
		case "potato":
		case "tomato":
			alert("Buy vegetables");
			break;
	}
}

let input = prompt("Kakvo je vreme?");

let weather = ["sunny", "rainy", "cloudy"];

for (i = 0; i < weather[i].length; i++) {
	switch (input) {
		case "sunny":
			alert("Wear sunglasses");
			break;
		case "cloudy":
			alert("It is cold");
			break;
		case "rainy":
			alert("Take an umbrella");
			break;
	}
}

/*
*Kreiraj niz colors koji sadrži nekoliko boja unetih od strane korisnika putem prompt funkcije (koristi split(',') da bi razdvojio boje), a zatim napiši for petlju koja prolazi kroz niz i koristi switch strukturu da ispise specifične poruke za određene boje (npr. "Red is vibrant", "Blue is calm").

*/
let color = prompt("Unesi boju");

let colors = color.split(`,`);

for (i = 0; i < colors.length; i++) {
	switch (colors[i]) {
		case "blue":
			alert("Blue is calm");
			break;
		case "red":
			alert("Red is vibrant");
			break;
		case "green":
			alert("Green is nature");
			break;
	}
}

/*
*Kreiraj promenljivu userName koja prima ime uneto od strane korisnika putem prompt funkcije, a zatim napiši if-else strukturu koja koristi alert da ispise "Hello, [userName]!" ako je ime kraće od 5 karaktera, a "Welcome, [userName]!" ako je ime duže ili jednako 5 karaktera.

*/
let userName = prompt("Napisi ime");

if (userName.length < 5) {
	alert("Hello" + userName);
} else if (userName.length >= 5) {
	alert("WElcome" + userName);
}
