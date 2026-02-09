export function getUserLocation() {
	let userLocation = "";
	while (userLocation === "") {
		userLocation = prompt("Unesite odakle ste");
	}
	return userLocation;
}
