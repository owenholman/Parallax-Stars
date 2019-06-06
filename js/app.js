const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gameBtn = document.getElementById('game-btn');
const cover = document.getElementById('cover-content');
const game = document.getElementById('game-content');
var stars;

window.addEventListener("resize", function() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

gameBtn.addEventListener('click', () => {
	cover.style.display = 'none';
	game.style.display = 'block';
	stars = new StarObj();
	play();
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
	window.requestAnimationFrame(play);

	// redraw the background
	ctx.fillStyle = drawBackground();
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	// draw and update stars
	stars.init();
	stars.update();
}