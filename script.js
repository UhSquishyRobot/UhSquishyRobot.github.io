//accept 1 integer as the argument for the function

//create a random number generator for a 1 - 10 range

//create a random letter generator by creating a random number generator for a 1 - 26 range
//and using the output to call the index of an alphabet string

//create a loop which creates a new string each time, of random length, populated by
//random letters

function randomSentence(){
  var integer = document.getElementById('a').value;
  if (integer == 0){
    alert("You didn't enter nuffin ya muffin");
  }
  else if (integer > 300) {
    alert("Don't wanna crash your browser now!");
  }
  else {
  array = []

  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  function Number(){
    var randomNumber = (Math.floor((Math.random() * 10) +1));
    return randomNumber
  }
  
  for (var i = 0; i < integer; i++){
    var string = ""
    for (var n = 0; n < (Number()); n++)
      string += alphabet[Math.floor((Math.random() * 25) + 1)];
      array.push(string)
  }
  var crumbles = array;
  alert(crumbles);
}
}

//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
//+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+


var rockScissorsPaper = function() {

var wins = 0
var compWins = 0

var rounds = 2  
while (true) {
      rounds = prompt("How many rounds would you like to play?")
      if (isNaN(rounds)) {
        alert("Please enter only digits");
      }
      else if (rounds > 15) {
        alert("Even robots get bored eventually.  Try a smaller number!");
      }
      else if (rounds % 2 === 0) {
        alert("Please enter only odd numbers!");
      }
      else {
        break;
      }
    }

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        alert ("It's a draw!");
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            alert ("Computer Chose: Scissors\nRock Wins!");
            wins++;
        }
        else {
            alert ("Computer Chose: Paper\nPaper Wins");
            compWins++;
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            alert ("Computer Chose: Rock\nPaper Wins");
            wins++;
        }
        else {
            alert ("Computer Chose: Scissors\nScissors Wins");
            compWins++;

        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            alert ("Computer Chose: Rock\nRock Wins");
            compWins++

        }
        else {
            alert ("Computer Chose: Paper\nScissors Wins");
            wins++;

        }
    }
}



for (var counter = 0; counter < rounds; counter++) {

    while (true) {
      var userChoice = prompt("Rock? Paper? Scissors?").toLowerCase();
        if ((userChoice === "rock") || (userChoice === "paper") || (userChoice === "scissors")) {
          break;
        }
        else {
          alert("Please enter only 'rock', 'paper', or 'scissors'");
        }
      }
      
  var playerTWO = function(){
      var randomNum = (~~((Math.random() * 3) +1))
      
      if (randomNum === 1) {
        computerChoice = "rock";
      }
      else if (randomNum === 2) {
      computerChoice = "paper";
      } 
      else {
      computerChoice = "scissors";
      }
      return computerChoice;
    }
      
var computer = playerTWO();
compare(userChoice, computer);
}

if (wins > compWins) {
  alert("YOU WIN!!");
}
else if (wins < compWins) {
  alert("COMPUTER OVERLORD WINS!!!");
}
else {
  alert("LIGHTNING ROUUUUUUND!!!!")
  while (wins === compWins) {
    input = prompt("Rock/Paper/Scissors");
    var lightning = playerTWO();
    compare(input, lightning);
  }
  }
  if (wins > compWins) {
    alert("YOU WIN!!");
  }
  else if (wins < compWins) {
    alert("COMPUTER OVERLORD WINS!!!");
}
}



