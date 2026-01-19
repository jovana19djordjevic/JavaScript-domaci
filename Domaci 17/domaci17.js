let age = document.querySelector("#age");
let buttonDelete = document.querySelector("#buttonDelete");
let userId = null;

for (let i = 18; i <= 100; i++) {
	let option = document.createElement("option");
	option.value = i;
	option.innerText = i;
	age.appendChild(option);
}

document
	.getElementById("registerButtun")
	.addEventListener("click", function () {
		let name = document.querySelector("#name").value;
		let lastName = document.querySelector("#lastName").value;

		if (name.trim() === "" || lastName.trim() === "") {
			alert("Morate uneti sve podatke");
			return;
		}

		register(name, lastName, age.value);
	});

function register(name, lastName, age) {
	fetch("https://dummyjson.com/users/add", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify({
			firstName: name,
			lastName: lastName,
			age: age,
		}),
	})
		.then((response) => response.json())
		.then(function (data) {
			userId = data.id;
			buttonDelete.style.display = "inline-block";
			alert("Uspesno ste se registrovali" + data.firstName);
		});
}
buttonDelete.addEventListener("click", function () {
	if (!userId) {
		alert("Nema korisnika za brisanje!");
		return;
	}

	fetch(`https://dummyjson.com/users/` + userId, {
		method: "DELETE",
	})
		.then((result) => result.json())
		.then(function (data) {
			console.log(data);
		});
});
