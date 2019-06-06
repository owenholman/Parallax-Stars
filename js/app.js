const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameBtn = document.getElementById('game-btn');
const cover = document.getElementById('cover-content');
const game = document.getElementById('game-content');
var animation = null;
var stars;
var initGen = false;

window.addEventListener("resize", function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

window.addEventListener("keydown", e => {
	switch(e.code) {
		case 'Enter':
			gameBtn.click();
		break;
	}
});

gameBtn.addEventListener('click', () => {
	if (initGen == false) {
		cover.style.display = 'none';
		game.style.display = 'block';
		stars = new StarObj();
		play();
		initGen = true;
	} else if (initGen == true) {
		window.cancelAnimationFrame(animation);
		delete stars;
		cover.style.display = 'flex';
		game.style.display = 'none';
		initGen = false;
	}
});

const drawBackground = () => {
	let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
	gradient.addColorStop(0, "#0D0D0D");
	gradient.addColorStop(0.9, "#031626");
	gradient.addColorStop(1, "#032940");
	return gradient;
}

const play = () => {
	// recommence the loop
	animation = window.requestAnimationFrame(play);

	// redraw the background
	ctx.fillStyle = drawBackground();
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	// draw and update stars
	stars.init();
	stars.update();
}