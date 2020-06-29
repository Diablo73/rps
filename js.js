const game = () => {
	
	var pScore = 0;
	var cScore = 0;
	
	
	//Start the Game
	const startGame = () => {
		const playBtn = document.querySelector(".goB button");
		const introScreen = document.querySelector(".start");
		const match = document.querySelector(".match");
		playBtn.addEventListener("click", () => {
			introScreen.classList.add("fadeOut");
			match.classList.add("fadeIn");
			var wi = document.getElementById("win");
			w = wi.options[wi.selectedIndex].text;
			var ti = document.getElementById("tie");
			t = ti.options[ti.selectedIndex].text;
			var li = document.getElementById("lose");
			l = li.options[li.selectedIndex].text;
			matchno = 0;
			
			var wi = document.getElementById("win").value;
			var ti = document.getElementById("tie").value;
			var li = document.getElementById("lose").value;
	
			if (wi == 0) {
				w = 3;
			}
			if (ti == 0) {
				t = 1;
			}
			if (li == 0) {
				l = 0;
			}
			console.log(w + " " + t + " " + l);
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
		matchno++;
		const result = document.querySelector(".result");
		//Checking for a tie
		if (playerChoice === computerChoice) {
			result.textContent = matchno + ". TIE";
			pScore = parseInt(pScore) + parseInt(t);
			cScore = parseInt(cScore) + parseInt(t);
			updateScore();
			return;
		}
		//Check for Rock
		else if (playerChoice === "Rock") {
			if (computerChoice === "Paper") {
				result.textContent = matchno + ". LOSE";
				cScore = parseInt(cScore) + parseInt(w);
				pScore = parseInt(pScore) + parseInt(l);
				updateScore();
				return;
			} else {
				result.textContent = matchno + ". WIN";
				pScore = parseInt(pScore) + parseInt(w);
				cScore = parseInt(cScore) + parseInt(l);
				updateScore();
				return;
			}
		}
		//Check for Paper
		else if (playerChoice === "Paper") {
			if (computerChoice === "Scissors") {
				result.textContent = matchno + ". LOSE";
				cScore = parseInt(cScore) + parseInt(w);
				pScore = parseInt(pScore) + parseInt(l);
				updateScore();
				return;
			} else {
				result.textContent = matchno + ". WIN";
				pScore = parseInt(pScore) + parseInt(w);
				cScore = parseInt(cScore) + parseInt(l);
				updateScore();
				return;
			}
		}
		//Check for Scissors
		else if (playerChoice === "Scissors") {
			if (computerChoice === "Rock") {
				result.textContent = matchno + ". LOSE";
				cScore = parseInt(cScore) + parseInt(w);
				pScore = parseInt(pScore) + parseInt(l);
				updateScore();
				return;
			} else {
				result.textContent = matchno + ". WIN";
				pScore = parseInt(pScore) + parseInt(w);
				cScore = parseInt(cScore) + parseInt(l);
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

function dropw() {
	var x = document.getElementById("win").options.length;
	document.getElementById("win").size = x;
}
function dropt() {
	var x = document.getElementById("tie").options.length;
	document.getElementById("tie").size = x;
}
function dropl() {
	var x = document.getElementById("lose").options.length;
	document.getElementById("lose").size = x;
}