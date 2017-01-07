//accept 1 integer as the argument for the function

//create a random number generator for a 1 - 10 range

//create a random letter generator by creating a random number generator for a 1 - 26 range
//and using the output to call the index of an alphabet string

//create a loop which creates a new string each time, of random length, populated by
//random letters

function randomSentence(){
  var integer = document.getElementById('a').value;
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



