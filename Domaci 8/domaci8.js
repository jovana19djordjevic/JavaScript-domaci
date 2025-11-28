let cars = [
	{
		name: "Audi A4",
		price: 32000,
		image:
			"https://images.autouncle.com/it/car_images/8ee12fd2-8eb9-4227-9462-755c93207318_audi-a4-a4avant-35-2-0-tfsi-mhev-business-advanced-150cv.jpg",
		year: 2020,
	},
	{
		name: "BMW 3 Series",
		price: 35000,
		image:
			"https://www.nanninember.it/img/ckeditor/P90323716_highRes_the-all-new-bmw-3-se.jpg",
		year: 2019,
	},
	{
		name: "Mercedes C-Class",
		price: 38000,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZyZpSv1zvVZRMC5bbMuYJOPlvrmHHUTqPs1kVdmKW_qgt1IfLle5rAvae-BlndPB_no&usqp=CAU",
		year: 2025,
	},
	{
		name: "Volkswagen Golf",
		price: 22000,
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRs_kCWMWieCwZKi9qI8I9h0td5on46zSKBhLEufSTnZRKTUXmO15on-WtF8mx0qrdzVU&usqp=CAU",
		year: 2018,
	},
	{
		name: "Tesla Model 3",
		price: 42000,
		image: "https://cdn.motor1.com/images/mgl/XB3oNV/s1/tesla-model-3-2022.jpg",
		year: 2022,
	},
	{
		name: "Toyota Corolla",
		price: 20000,
		image:
			"https://www.thecarexpert.co.uk/wp-content/uploads/2019/04/2024_Toyota_Corolla_001-scaled-1-1600x1200-cropped.jpg",
		year: 2019,
	},
	{
		name: "Honda Civic",
		price: 21000,
		image: "https://www.carpro.com/hubfs/2025-honda-civic-si.jpg",
		year: 2025,
	},
	{
		name: "Ford Focus",
		price: 19000,
		image:
			"https://media-assets.wired.it/photos/615f3aee552959047b7a393a/master/w_1600%2Cc_limit/1531819399_Focus-2018IMG_1182.jpg",
		year: 2018,
	},
];

for (let car of cars) {
	let div = document.createElement("div");

	let image = document.createElement("img");
	image.src = car.image;

	let paragraf = document.createElement("p");
	paragraf.textContent = car.name;

	let span = document.createElement("span");
	span.textContent = car.price;

	let spanYear = document.createElement("span");
	spanYear.textContent = car.year;

	if (car.year === 2025) {
		spanYear.textContent = "NOVO";
	}

	paragraf.appendChild(span);

	div.appendChild(image);
	div.appendChild(paragraf);
	div.appendChild(spanYear);

	document.querySelector("#main").appendChild(div);
}
