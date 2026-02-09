import axios from "axios";
import { getUserLocation } from "./components/location.js";
import { getCurrentWhetherForLocation } from "./components/whetherApi.js";
import { getFunctionForecast } from "./components/whetherApi.js";

let location = localStorage.getItem("location") || getUserLocation();

localStorage.setItem("location", location);

document.querySelector("#changeLocation").addEventListener("click", () => {
	location = getUserLocation();

	localStorage.setItem("location", location);
});

//https://api.weatherapi.com/v1/current.json?key=487a3016fcca41a78a9101757260902&q=London&aqi=no

const response = await getCurrentWhetherForLocation(location);
const responseForeCast = await getFunctionForecast(location, 7);

let forcastDays = responseForeCast.data.forecast.forecastday;

if (response.data.current.is_day) {
	document.querySelector("body").style.background = "grey";
	console.log("day");
}

for (let forecast of forcastDays) {
	console.log(
		`Na dan ${forecast.data} maksimalna temperatura bice: ${forecast.day.maxtemp_c} a minmalna: ${forecast.day.mintemp_c}`,
	);
}
const days = responseForeCast.data.forecast.forecastday;

function getForeCastDays(days) {
	const container = document.querySelector("#foreCast");

	container.innerHTML = "";

	for (let forecast of days) {
		const card = document.createElement("div");

		card.innerHTML = `Na dan ${forecast.date} maksimalna temperatura bice: ${forecast.day.maxtemp_c} a minmalna: ${forecast.day.mintemp_c}`;

		container.append(card);
	}
}

getForeCastDays(days);
