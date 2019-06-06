const StarObj = function() {
	this.initGen = false;

	this.farStarArr = [];
	this.maxFarStars = 150;
	this.farStarLength;

	this.closeStarArr = [];
	this.maxCloseStars = 20;
	this.closeStarLength;

	this.x;
	this.y;
	this.dyA = -0.8;
	this.dyB = -0.4;

	const randomNum = (min, max) => {
		return Math.random() * (max - min) + min;
	}

	this.init = () => {
		if (this.initGen == false) {
			// for far stars
			for (i = 0; i < this.maxFarStars; i++) {
				this.x = randomNum(0, canvas.width);
				this.y = randomNum(0, canvas.height);
				this.farStarLength = randomNum(0, 3);
				this.farStarArr.push({
					x: this.x,
					y: this.y,
					dy: this.dyA,
					length: this.farStarLength
				});
			}

			// for close stars
			for (i = 0; i < this.maxCloseStars; i++) {
				this.x = randomNum(0, canvas.width);
				this.y = randomNum(0, canvas.height);
				this.closeStarLength = randomNum(4, 7);
				this.closeStarArr.push({
					x: this.x,
					y: this.y,
					dy: this.dyB,
					length: this.closeStarLength
				});
			}

			// ensure this part of if is not generated again
			this.initGen = true;
		} else {
			if (this.farStarArr.length < this.maxFarStars) {
				for (i = 0; i < (this.maxFarStars - this.farStarArr.length); i++) {
					this.x = randomNum(0, canvas.width);
					this.y = canvas.height;
					this.farStarLength = randomNum(0, 3);
					this.farStarArr.push({
						x: this.x,
						y: this.y,
						dy: this.dyA,
						length: this.farStarLength
					});
				}
				for (i = 0; i < (this.maxCloseStars - this.closeStarArr.length); i++) {
					this.x = randomNum(0, canvas.width);
					this.y = canvas.height;
					this.closeStarLength = randomNum(4, 7);
					this.closeStarArr.push({
						x: this.x,
						y: this.y,
						dy: this.dyB,
						length: this.closeStarLength
					});
				}
			}
		}
	}

	this.update = () => {
		for (i = 0; i < this.farStarArr.length; i++) {
			if (this.farStarArr[i].y <= (0 - this.farStarArr[i].length)) {
				this.farStarArr.splice(i, 1);
			} else {
				this.farStarArr[i].y += this.farStarArr[i].dy;
				ctx.fillStyle = "#F2F2F2";
				ctx.fillRect(this.farStarArr[i].x, this.farStarArr[i].y, this.farStarArr[i].length, this.farStarArr[i].length);
			}
		}

		for (i = 0; i < this.closeStarArr.length; i++) {
			if (this.closeStarArr[i].y <= (0 - this.farStarArr[i].length)) {
				this.closeStarArr.splice(i, 1);
			} else {
				this.closeStarArr[i].y += this.closeStarArr[i].dy;
				ctx.fillStyle = "#F2F2F2";
				ctx.fillRect(this.closeStarArr[i].x, this.closeStarArr[i].y, this.closeStarArr[i].length, this.closeStarArr[i].length);
			}
		}
	}
}