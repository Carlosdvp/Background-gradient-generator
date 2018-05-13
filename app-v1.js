'use srict';

// lets grab the color inputs and the he element
var css = document.querySelector('h3'),
		color1 = document.querySelector('.color-1'),
		color2 = document.querySelector('.color-2'),
		body = document.getElementById('gradient');

// console.log(body);
// body.style.background = 'firebrick';

color1.addEventListener('input', function() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
})

color2.addEventListener('input', function() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
})

