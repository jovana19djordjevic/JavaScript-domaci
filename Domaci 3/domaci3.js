let name = "admin";
let password = "tajnasifra";

if (name == "admin" && password == "tajnasifra") {
	console.log("Dobrodosli nazad");
} else if (name == "toma" && password == "tajnasifra") {
	console.log("Dobrodosao Tomo");
} else {
	console.log("Pogresna lozinka");
}

//Kreiraj promenljivu koja sadrži tvoje godine, a zatim napiši if-else strukturu koja ispisuje "Maloletan" ako je broj godina manji od 18, inače ispisuje "Punoletan". (Vezba ispod predavanja)//
let age = 18;

if (age >= 18) {
	console.log("Punoletan");
} else {
	console.log("Maloletan");
}

//Kreiraj niz sa nekoliko različitih brojeva, napiši if-else strukturu koja proverava da li je zbir prvog i poslednjeg broja u nizu veći od 50 i ispiši odgovarajuću poruku.//

let number = [20, 5, 3, 18, 1];
let first = number[0];
let last = number[4];

let zbir = first + last;

if (zbir > 50) {
	console.log("Veci");
} else if (zbir < 50) {
	console.log("Manji broj");
}
//Kreiraj promenljivu koja sadrži ime nekog voća, a zatim napiši if-else strukturu koja ispisuje "Ovo je jabuka" ako je vrednost "jabuka", "Ovo je banana" ako je vrednost "banana", i "Neko drugo voće" za sve ostale vrednosti.//
let fruit = "jabuka";
if (fruit == "jabuka") {
	console.log("Ovo je jabuka");
} else if (fruit == "banana") {
	console.log("Ovo je banana");
} else {
	console.log("Neko drugo voce");
}
