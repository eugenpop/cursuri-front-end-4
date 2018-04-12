var rsp = ["Rock", "Paper", "Scissors"];


var yourChoice = Math.random();

if (yourChoice < 0.34) {
  yourChoice = rsp[0];
} else if (yourChoice <= 0.67) {
  yourChoice = rsp[1];
} else {
  yourChoice = rsp[2];
}
console.log("Your Choice: " + yourChoice);

var computerChoice = Math.random();

if (computerChoice < 0.34) {
  computerChoice = rsp[0];
} else if (computerChoice <= 0.67) {
  computerChoice = rsp[1];
} else {
  computerChoice = rsp[2];
}
console.log("Computer Choice: " + computerChoice);

play(yourChoice, computerChoice);

function play(yourChoice, computerChoice) {
  if (yourChoice === computerChoice) {
    console.log("It's a tie!");
  } else if ((yourChoice === rsp[0] && computerChoice === rsp[2]) || (yourChoice === rsp[1] && computerChoice === rsp[0]) || (yourChoice === rsp[2] && computerChoice === rsp[1])) {
    console.log("User wins!");
  } else {
    console.log("Computer wins!");
  }
}