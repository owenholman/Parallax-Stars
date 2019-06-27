const canvas = document.getElementById('animation');
const ctx = canvas.getContext('2d');
var maxStars;

const sizeBrowser = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	maxStars = canvas.width / 45;
}

const drawBackground = () => {
	let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
	gradient.addColorStop(0, "#0D0D0D");
	gradient.addColorStop(0.8, "#031626");
	gradient.addColorStop(1, "#032940");
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const playAnimation = () => {
	window.requestAnimationFrame(playAnimation);
	drawBackground();
	stars.update();
	stars.draw();
}

const getRandomNum = (min, max) => {
	return Math.random() * (max-min) + min;
}

var Stars = function() {
	this.x;
	this.y;
	this.dy;
	this.l;
	this.stars = [];

	this.init = () => {
		for (i = 0; this.stars.length < maxStars; i++) {
			this.x = getRandomNum(0, canvas.width);
			this.y = getRandomNum(0, canvas.height);
			this.l = getRandomNum(0.01, 5);
			this.dy = 1.5 / this.l;
			this.stars.push({
				x: this.x,
				y: this.y,
				dy: this.dy,
				l: this.l
			});
		}
	}

	this.update = () => {
		for (i = 0; i < this.stars.length; i++) {
			if (this.stars[i].y < 0 || this.stars[i].x > canvas.width) {
				this.stars.splice(i, 1);
			} else {
				this.stars[i].y -= this.stars[i].dy;
			}
		}
		if (this.stars.length < maxStars) {
			for (j = 0; this.stars.length < maxStars; j++) {
				this.x = getRandomNum(0, canvas.width);
				this.y = canvas.height;
				this.l = getRandomNum(0.01, 5);
				this.dy = 1.5 / this.l;
				this.stars.push({
					x: this.x,
					y: this.y,
					dy: this.dy,
					l: this.l
				});
			}
		}
	}

	this.draw = () => {
		for (i = 0; i < this.stars.length; i++) {
			ctx.fillStyle = "#F2F2F2";
			ctx.fillRect(this.stars[i].x, this.stars[i].y, this.stars[i].l, this.stars[i].l);
		}
	}
}

window.addEventListener('resize', () => {
	sizeBrowser();
});

sizeBrowser();
var stars = new Stars();
stars.init();
playAnimation();