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
		city: "Zagreb",
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
		city: "Niš",
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
		city: "Ljubljana",
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

for (let estate of realEstates) {
	let div = document.createElement("div");

	div.textContent = estate.city + " " + estate.type;

	let paragraph = document.createElement("p");

	paragraph.textContent = estate.option;

	if (estate.option == null) {
		paragraph.textContent = "--";
	} else {
		paragraph.textContent = estate.option;
	}

	let priceParagraf = document.createElement("p");
	priceParagraf.textContent = estate.price;

	let sizeParagraf = document.createElement("p");
	sizeParagraf.textContent = estate.size;

	div.appendChild(paragraph);
	div.appendChild(priceParagraf);
	div.appendChild(sizeParagraf);

	document.querySelector("#estates").appendChild(div);
}
