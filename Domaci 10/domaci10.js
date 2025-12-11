let cities = [
	"Svi",
	"Beograd",
	"Novi Sad",
	"Kragujevac",
	"Podgorica",
	"Zagreb",
	"Niš",
	"Subotica",
	"Banja Luka",
	"Sarajevo",
	"Split",
	"Rijeka",
	"Osijek",
	"Ljubljana",
	"Maribor",
	"Koper",
	"Tuzla",
	"Mostar",
	"Skoplje",
	"Tetovo",
	"Priština",
	"Budimpešta",
	"Beč",
	"Graz",
	"Prag",
	"Bratislava",
];

let types = [
	"Stanovi",
	"Kuce",
	"Prostorni prostori",
	"Placevi",
	"Garaze/Parking",
];

let options = [
	"Garsonjera",
	"Jednosoban stan",
	"Jednoiposoban stan",
	"Dvosoban stan",
	"Trosoban stan",
	"Troiposoban stan",
	"Cetvorosoban",
	"4,5 soban stan",
];

let realEstates = [
	{
		city: "Beograd",
		option: "Garsonjera",
		type: "Stanovi",
		price: 48200,
		size: 25,
	},
	{
		city: "Novi Sad",
		option: null,
		type: "Kuce",
		price: 12000,
		size: 85,
	},
	{
		city: "Beograd",
		option: "Dvosoban stan",
		type: "Stanovi",
		price: 98000,
		size: 55,
	},
	{
		city: "Novi Sad",
		option: "Jednosoban stan",
		type: "Stanovi",
		price: 72000,
		size: 38,
	},
	{
		city: "Beograd",
		option: "Trosoban stan",
		type: "Stanovi",
		price: 165000,
		size: 75,
	},
	{
		city: "Split",
		option: "Garsonjera",
		type: "Stanovi",
		price: 85000,
		size: 30,
	},
	{
		city: "Nis",
		option: "Dvosoban stan",
		type: "Stanovi",
		price: 65000,
		size: 48,
	},
	{
		city: "Sarajevo",
		option: null,
		type: "Placevi",
		price: 40000,
		size: 300, // npr. kvadratura placa
	},
	{
		city: "Banja Luka",
		option: null,
		type: "Garaze/Parking",
		price: 12000,
		size: 18,
	},
	{
		city: "Sarajevo",
		option: "Cetvorosoban",
		type: "Stanovi",
		price: 240000,
		size: 96,
	},
	{
		city: "Skoplje",
		option: "Troiposoban stan",
		type: "Stanovi",
		price: 110000,
		size: 82,
	},
	{
		city: "Podgorica",
		option: null,
		type: "Kuce",
		price: 150000,
		size: 120,
	},
];

let citiesSelector = document.querySelector("#citiesSelector");
let typeSelector = document.querySelector("#typeSelector");
let roomSelector = document.querySelector("#roomSelector");

for (let option of options) {
	let optionElement = document.createElement("option");
	optionElement.innerHTML = option;
	roomSelector.appendChild(optionElement);
}

for (let type of types) {
	let typeOption = document.createElement("option");
	typeOption.innerHTML = type;
	typeSelector.appendChild(typeOption);
}

for (let city of cities) {
	let cityOption = document.createElement("option");
	cityOption.innerHTML = city;

	if (city === "Svi") continue;

	let cityFound = false;
	let cityCount = 0;

	for (let estate of realEstates) {
		if (estate.city == city) {
			cityFound = true;
			cityCount++;
		}
	}

	if (city === "Svi") {
		cityCount = realEstates.length;
	}

	cityOption.innerHTML += " (" + cityCount + ")";
	cityOption.value = city;
	citiesSelector.appendChild(cityOption);

	if (!cityFound && city !== "Svi") {
		cityOption.disabled = true;
	}
}

let currentCity = null;

citiesSelector.addEventListener("change", function (event) {
	currentCity = event.currentTarget.value;
	console.log(currentCity);

	let allEstates = document.getElementsByClassName("realEstate");
	console.log(allEstates);

	for (realEstate of allEstates) {
		//console.log(realEstate.querySelector(".city"));
		let estateCity = realEstate.querySelector(".city").textContent;

		realEstate.classList.remove("hidden");

		if (estateCity !== currentCity && currentCity !== "Svi") {
			realEstate.classList.add("hidden");
		}
	}
});

let currentType = null;

typeSelector.addEventListener("change", function (e) {
	currentType = e.currentTarget.value;
});

let currentRoom = null;

roomSelector.addEventListener("change", function (e) {
	currentRoom = e.currentTarget.value;

	for (realEstate of realEstates) {
		if (realEstate.city === currentCity) {
			console.log(realEstate);
		}
	}
});

for (let estate of realEstates) {
	let estateHolder = document.createElement("div");
	estateHolder.classList = "realEstate";

	let estateTitle = document.createElement("p");
	estateTitle.innerText = estate.city;
	estateTitle.classList = "city";

	let estateOption = document.createElement("p");

	estateOption.innerText = estate.option;

	if (estate.option == null) {
		estateOption.textContent = "-";
	} else {
		estateOption.innerHTML = estate.option;
	}

	let estatePrice = document.createElement("p");
	estatePrice.innerHTML = estate.price;

	let estateSize = document.createElement("p");
	estateSize.textContent = estate.size;

	estateHolder.append(estateTitle);
	estateHolder.append(estateOption);
	estateHolder.append(estatePrice);
	estateHolder.append(estateSize);

	document.querySelector("#estates").appendChild(estateHolder);
}
