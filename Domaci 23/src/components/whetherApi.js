import axios from "axios";

const apiKey = "487a3016fcca41a78a9101757260902";

export async function getCurrentWhetherForLocation(location) {
	const response = await axios.get(
		"https://api.weatherapi.com/v1/current.json",
		{
			params: {
				key: apiKey,
				q: location,
				aqi: "no",
			},
		},
	);
	return response;
}

//https://api.weatherapi.com/v1/forecast.json?key=487a3016fcca41a78a9101757260902&q=London&days=7&aqi=no&alerts=no

export async function getFunctionForecast(location, days) {
	console.log("FORECAST FUNKCIJA START", location);
	const response = await axios.get(
		"https://api.weatherapi.com/v1/forecast.json",
		{
			params: {
				key: apiKey,
				q: location,
				days: days,
				aqi: "no",
				alerts: "no",
			},
		},
	);
	return response;
}
