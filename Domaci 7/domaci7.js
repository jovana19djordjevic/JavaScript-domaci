let ads = [
	{
		title: "Skoda oktavia 2014",
		price: 1950,
		image:
			"https://iprenders.blob.core.windows.net/transpv3v26100004/8X8XG2yamqj39Fvhu7ALc.o-JcGuX_6Zg50njyCesEU-s4FXKkxuZld5nIhS0e-PHXADBM-.8ys50913-QCFTLJ-960540dayvext_front1080.png",
	},
	{
		title: "Audi A4",
		price: 8000,
		image:
			"https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-a4-rt-2015-0024_0.jpg?itok=7cJ1PI3F",
	},
];

let produsctsELements = document.getElementById("products");

for (let ad in ads) {
	console.log(ads[ad][`title`], ads[ad][`price`], ads[ad][`image`]);
	produsctsELements.innerHTML +=
		ads[ad][`title`] + " " + ads[ad][`price`] + ads[ad][`image`] + "</br>";
}
