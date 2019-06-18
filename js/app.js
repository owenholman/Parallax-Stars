// canvas manipulation and declaration
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// sets the canvas to be the browser's full dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// declarations for the html elements
const gameBtn = document.getElementById('game-btn');
const cover = document.getElementById('cover-content');
const game = document.getElementById('game-content');

// initialise variables that will be used/changed later
var animation = null;
var stars;
var initGen = false;

window.addEventListener("resize", () => { // begin resize event listener; triggers when browser is resized
	// changes the canvas dimensions to properly reflect the changes
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}); // end resize event listener

window.addEventListener("keydown", e => { // begin keydown event listener; triggers when the user presses a key
	switch(e.code) { // begin switch conditional
		case 'Enter':
			gameBtn.click(); // clicks html button if 'enter' key is pressed
		break;
	} // end switch conditional
}); // end event listener

gameBtn.addEventListener('click', () => { // begin click event listener attached to html button
	if (initGen == false) { // runs if the initGen variable boolean is false
		// deals with certain html elements accordingly
		cover.style.display = 'none';
		game.style.display = 'block';

		stars = new StarObj(); // sets the starObj object function to variable stars
		play(); // runs play() function
		initGen = true; // sets boolean to true
	} else if (initGen == true) { // runs if the stars have already been generated
		window.cancelAnimationFrame(animation); // cancels the animation (pauses)
		delete stars; // deletes / recycles variable stars

		// deals with the UI html elements accordingly
		cover.style.display = 'flex';
		game.style.display = 'none';
		initGen = false; // sets the boolean generated to false
	} // end of if/else
}); // end of event listener of gameBtn

const drawBackground = () => { // start of drawBackground function
	let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height); // creates new variable with gradient
	// adding color to a specific point on the gradient
	gradient.addColorStop(0, "#0D0D0D");
	gradient.addColorStop(0.9, "#031626");
	gradient.addColorStop(1, "#032940");
	return gradient; // returning the gradient as a variable
} // end of drawBackground function

const play = () => { // start of play function
	// recommence the loop
	animation = window.requestAnimationFrame(play);

	// redraw the background
	ctx.fillStyle = drawBackground();
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	// draw and update stars
	stars.init();
	stars.update();
} // end of play function