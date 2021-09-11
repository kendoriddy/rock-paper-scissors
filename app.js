let userScore = 0;
let computerScore = 0;
// let yourPlay = 0;
// let compPlay = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const playerPlay = document.getElementById("your-play");
const computerPlay = document.getElementById("comp-play");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function usersPlay(userChoice, computerChoice) {
 userChoice;
 computerChoice;
  playerPlay_h3.innerHTML += userChoice;
  computerPlay_h3.innerHTML += computerChoice;
}
// usersPlay();

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function playEvaluate(choices, winner) {
  let userChoice = choices[0];
  let computerChoice = choices[1];

  // const smallUserWord = "user".fontsize(3).sub();
  // const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);

  (winner === 1)? userScore++ : (winner === -1)? computerScore++ : {};

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;

  playerPlay.innerHTML = `<h3>Your Play: ${convertToWord(choices[0])}</h3>`;
  computerPlay.innerHTML = `<h3>Computer's Play: ${convertToWord(choices[1])}</h3>`;

  let message = (winner === 1)? ['beats', 'You win!'] : (winner === -1)? ['loses to', 'You lose!'] : ['equals', "It's a draw"];
  
  result_p.innerHTML = `${convertToWord(userChoice)} ${message[0]} ${convertToWord(computerChoice)}. ${message[1]}`;
  
  let classes = (winner === 1)? 'green-glow' : (winner === -1)? 'red-glow' : 'gray-glow';
  userChoice_div.classList.add(classes);

  setTimeout(() => userChoice_div.classList.remove(classes), 300);
}



// function win(userChoice, computerChoice) {
//   const smallUserWord = "user".fontsize(3).sub();
//   const smallCompWord = "comp".fontsize(3).sub();
//   const userChoice_div = document.getElementById(userChoice);
//   userScore++;
//   userScore_span.innerHTML = userScore;
//   computerScore_span.innerHTML = computerScore;
//   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
//   userChoice_div.classList.add('green-glow');
//   setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
// }


// function lose(userChoice, computerChoice) {
//   const smallUserWord = "user".fontsize(3).sub();
//   const smallCompWord = "comp".fontsize(3).sub();
//   const userChoice_div = document.getElementById(userChoice);
//   computerScore++;
//   userScore_span.innerHTML = userScore;
//   computerScore_span.innerHTML = computerScore;
//   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose!`;
//   userChoice_div.classList.add('red-glow');
//   setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
// }
// function draw(userChoice, computerChoice) {
//   const smallUserWord = "user".fontsize(3).sub();
//   const smallCompWord = "comp".fontsize(3).sub();
//   const userChoice_div = document.getElementById(userChoice);
//   result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw`;
//   userChoice_div.classList.add('gray-glow');
//   setTimeout(function() { userChoice_div.classList.remove('gray-glow')}, 300);
// }

function game(userChoice) {
  const computerChoice = getComputerChoice();
  let choices = userChoice + computerChoice;
  switch (choices) {
    case "rs":
    case "pr":
    case "sp":
      playEvaluate(choices, 1);
      break;
    case "rp":
    case "ps":
    case "sr":
      playEvaluate(choices, -1);
      break;
    case "rr":
    case "pp":
    case "ss":
      playEvaluate(choices, 0);
      break;

  }
}
function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");
  })
  scissors_div.addEventListener('click', function() {
    game("s");
  })
}

main();