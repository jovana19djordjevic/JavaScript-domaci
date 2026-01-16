let productsHolder = document.querySelector("#products");
let productBtn = document.querySelector("#productBtn");

fetch("https://dummyjson.com/products?limit=20&sortBy=title&order=asc")
	.then(function (response) {
		response.ok ? "Uspesno smo pozvali" : null;
		return response.json();
	})
	.then(function (data) {
		for (let product of data.products) {
			appendToProductHolder(product);
		}
	});

function appendToProductHolder(product) {
	let div = document.createElement("div");

	let productTitle = document.createElement("h1");
	productTitle.innerText = product.title;

	let productCategory = document.createElement("p");
	productCategory = product.category;

	div.append(productTitle, productCategory);

	productsHolder.append(div);
}

productBtn.addEventListener("click", function () {
	let clickText = document.querySelector("#inputProducts");
	let valueText =
		"https://dummyjson.com/products/search?q=phone" + clickText.value;

	fetch(valueText)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			productsHolder.innerHTML = "";
			for (let product of data.products) {
				appendToProductHolder(product);
			}
		});
});
