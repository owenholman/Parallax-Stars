const StarObj = function() { // start of starObj object function
	// begin this. variables
	this.initGen = false;
	this.farStarArr = [];
	this.maxFarStars = 150;
	this.farStarLength;
	this.closeStarArr = [];
	this.maxCloseStars = 20;
	this.closeStarLength;

	// for each individual star
	this.x;
	this.y;
	this.dyA = -0.8;
	this.dyB = -0.4;

	const randomNum = (min, max) => { // start randomNum function
		return Math.random() * (max - min) + min; // returns a random number within the argued range
	} // end function randomNum

	this.init = () => { // start this.init function
		if (this.initGen == false) { // if statement for when the boolean initGen is false
			// for far stars
			for (i = 0; i < this.maxFarStars; i++) { // begin for loop
				// for each individual star
				this.x = randomNum(0, canvas.width);
				this.y = randomNum(0, canvas.height);
				this.farStarLength = randomNum(0, 3);
				this.farStarArr.push({ // begin pushing
					x: this.x,
					y: this.y,
					dy: this.dyA,
					length: this.farStarLength
				}); // end pushing to array
			} // end for loop

			// for close stars
			for (i = 0; i < this.maxCloseStars; i++) { // begin for loop
				// for each individual star
				this.x = randomNum(0, canvas.width);
				this.y = randomNum(0, canvas.height);
				this.closeStarLength = randomNum(4, 7);
				this.closeStarArr.push({ // begin pushing to an array
					x: this.x,
					y: this.y,
					dy: this.dyB,
					length: this.closeStarLength
				}); // end pushing to array
			} // end for loop

			// ensure this part of if is not generated again
			this.initGen = true;
		} else { // if the stars have already been generated
			for (i = 0; i < (this.maxFarStars - this.farStarArr.length); i++) { // if there arent enough far stars filling up the max value we re-generate
				// for each individual star
				this.x = randomNum(0, canvas.width);
				this.y = canvas.height;
				this.farStarLength = randomNum(0, 3);
				this.farStarArr.push({ // begin pushing to array
					x: this.x,
					y: this.y,
					dy: this.dyA,
					length: this.farStarLength
				}); // end pushing to array
			} // end for loop
			for (i = 0; i < (this.maxCloseStars - this.closeStarArr.length); i++) { // if there arent enough close stars filling up the max value we re-generate
				// for each individual star
				this.x = randomNum(0, canvas.width);
				this.y = canvas.height;
				this.closeStarLength = randomNum(4, 7);
				this.closeStarArr.push({ // begin pushing
					x: this.x,
					y: this.y,
					dy: this.dyB,
					length: this.closeStarLength
				}); // end pushing to array
			} // end for loop
		} // end if/else conditional
	} // end this.init function

	this.update = () => { // begin this.update function
		for (i = 0; i < this.farStarArr.length; i++) { // begin for loop
			if (this.farStarArr[i].y <= (0 - this.farStarArr[i].length)) { // checks if the y value of the object runs off-screen
				this.farStarArr.splice(i, 1); // removes the object
			} else { // runs if the object is still on display
				this.farStarArr[i].y += this.farStarArr[i].dy; // accelerates the y value of each star
				// draws each star
				ctx.fillStyle = "#F2F2F2";
				ctx.fillRect(this.farStarArr[i].x, this.farStarArr[i].y, this.farStarArr[i].length, this.farStarArr[i].length);
			} // end of if/else conditional
		} // end of for loop

		for (i = 0; i < this.closeStarArr.length; i++) { // begin for loop
			if (this.closeStarArr[i].y <= (0 - this.farStarArr[i].length)) { // checks if the y value of each star runs off-screen
				this.closeStarArr.splice(i, 1); // removes the object from the array
			} else { // runs if the object is still on the display
				this.closeStarArr[i].y += this.closeStarArr[i].dy; // accelerates the y value of each star
				// draws each star
				ctx.fillStyle = "#F2F2F2";
				ctx.fillRect(this.closeStarArr[i].x, this.closeStarArr[i].y, this.closeStarArr[i].length, this.closeStarArr[i].length);
			} // end of if/else conditional
		} // end of for loop
	} // end of this.update function
} // end of starObj object function