let click = [];

let canvasE = document.getElementById("canvas");
let draw = canvasE.getContext("2d");
let firstBtn = document.querySelector(".firstBtn");
let secondBtn = document.querySelector(".secondBtn");

let lines = [];

canvasE.addEventListener("click", function (event) {
	let rect = canvasE.getBoundingClientRect();
	let x = event.clientX - rect.left;
	let y = event.clientY - rect.top;
	console.log(x, y);

	console.log(rect);

	console.log(event.clientX);
	click.push({ x: x, y: y });
	console.log(click);
});
firstBtn.addEventListener("click", function () {
	if (click.length < 2) {
		return;
	}
	draw.beginPath();
	draw.moveTo(click[0].x, click[0].y);

	for (let i = 1; i < click.length; i++) {
		draw.lineTo(click[i].x, click[i].y);
	}

	draw.stroke();
	click = [];
});
secondBtn.addEventListener("click", function () {
	draw.clearRect(0, 0, canvasE.width, canvasE.height);

	click = [];
	console.log(click);
});
