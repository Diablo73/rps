const game = () => {
	let pScore = 0;
	let cScore = 0;
	
	//Start the Game
	const startGame = () => {
		const playBtn = document.querySelector(".goB button");
		const introScreen = document.querySelector(".goB");
		const match = document.querySelector(".match");
		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
		});
	};
	//Play Match
	const playMatch = () => {
		
		const options = document.querySelectorAll(".options button");
		const playerHand = document.querySelector(".pHand");
		const computerHand = document.querySelector(".cHand");
		const hands = document.querySelectorAll(".hands img");
		
		hands.forEach(hand => {
			hand.addEventListener("animationend", function() {
				this.style.animation = "";
			});
		});
		//Computer Options
		const computerOptions = ["Rock", "Paper", "Scissors"];
		
		options.forEach(option => {
			option.addEventListener("click", function() {
				//Computer Choice
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];
				
				setTimeout(() => {
					//Here is where we call compare hands
					compareHands(this.textContent, computerChoice);
					//Update Images
					playerHand.src = `hands/${this.textContent}.png`;
					computerHand.src = `hands/${computerChoice}.png`;
				}, 900);
				//Animation
				playerHand.style.animation = "shakePlayer 1s ease";
				computerHand.style.animation = "shakeComputer 1s ease";
			});
		});
	};
	
	const updateScore = () => {
		const playerScore = document.querySelector(".pScore p");
		const computerScore = document.querySelector(".cScore p");
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};
	
	const compareHands = (playerChoice, computerChoice) => {
		//Update Text
		const result = document.querySelector(".result");
		//Checking for a tie
		if (playerChoice === computerChoice) {
			result.textContent = "TIE";
			pScore++;
			cScore++;
			updateScore();
			return;
		}
		//Check for Rock
		else if (playerChoice === "Rock") {
			if (computerChoice === "Paper") {
				result.textContent = "LOSE";
				cScore += 3;
				updateScore();
				return;
			} else {
				result.textContent = "WIN";
				pScore += 3;
				updateScore();
				return;
			}
		}
		//Check for Paper
		else if (playerChoice === "Paper") {
			if (computerChoice === "Scissors") {
				result.textContent = "LOSE";
				cScore += 3;
				updateScore();
				return;
			} else {
				result.textContent = "WIN";
				pScore += 3;
				updateScore();
				return;
			}
		}
		//Check for Scissors
		else if (playerChoice === "Scissors") {
			if (computerChoice === "Rock") {
				result.textContent = "LOSE";
				cScore += 3;
				updateScore();
				return;
			} else {
				result.textContent = "WIN";
				pScore += 3;
				updateScore();
				return;
			}
		}
	};

	//Is call all the inner function
	startGame();
	playMatch();
};

//start the game function
game();
