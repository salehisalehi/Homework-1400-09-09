const random_hex_color_code = () => {
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	return "#" + n.slice(0, 6);
};

function changeColor() {
	let color = random_hex_color_code();
	document.body.style.backgroundColor = color;
	document.getElementById("color").innerHTML = "HEX: " + color.toUpperCase();
}
