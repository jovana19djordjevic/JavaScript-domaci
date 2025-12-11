function login(userName, password) {
	if (userName == "admin" && password == "admin") {
		return true;
	}
	return false;
}

let result3 = login("admin", "admin");

console.log(result3);
