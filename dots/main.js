const inp = document.querySelector(".input");
const result = document.querySelector(".result");

document.querySelector(".btn").addEventListener("click", () => {
	let text = inp.value;
	let sum = 0;
	let i = text.length;
	while (i--) {
		letter = obj[text[i]];
		if (letter != null) {
			sum += parseInt(letter, 10);
		}
	}
	result.textContent = sum;
});
