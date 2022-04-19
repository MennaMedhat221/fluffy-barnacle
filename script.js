let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, generateTarget) {
  console.log("before" + humanGuess);
  console.log("before" + computerGuess);
  if (humanGuess === computerGuess) {
    return true;
  } else {
    const human = Math.abs(humanGuess - generateTarget);
    const comp = Math.abs(computerGuess - generateTarget);
    console.log(human);
    console.log(comp);
    if (human < comp) {
      console.log();
      return true;
    } else {
      console.log();
      return false;
    }
  }
}

function updateScore(winner) {
  if (winner === "human") {
    return humanScore++;
  } else {
    return computerScore++;
  }
}

function advanceRound() {
  return currentRoundNumber++;
}
