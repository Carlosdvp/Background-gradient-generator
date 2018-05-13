'use srict';

// lets grab the color inputs and the he element
var css = document.querySelector('h3'),
		color1 = document.querySelector('.color-1'),
		color2 = document.querySelector('.color-2'),
		body = document.getElementById('gradient');


// function to set the gradient colors
function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	//lets print the css where we can see it
	css.textContent = body.style.background + ';';
}

// now we use the previous function as a callback

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);





