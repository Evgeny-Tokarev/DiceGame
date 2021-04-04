var i = 1;
var currentDiceNumber;
var dices = [];
var buttons = $("[type = button]");
var redSound = new Audio("sounds/red.mp3");
var greenSound = new Audio("sounds/green.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var blueSound = new Audio("sounds/blue.mp3");
var wrongSound = new Audio("sounds/wrong.mp3");
var greeting = "Press A Key to Start";
sounds = [greenSound, redSound, yellowSound, blueSound, wrongSound];
function pressing(numberOfDice) {
    sounds[numberOfDice].play();
    buttons[numberOfDice].classList.add("pressed");
    setTimeout(function() {buttons[numberOfDice].classList.remove("pressed")}, 200)
}
function wrongPressing(numberOfDice) {
    sounds[4].play();
    buttons[numberOfDice].classList.add("pressed");
    setTimeout(function() {buttons[numberOfDice].classList.remove("pressed")}, 200);
    i = -1;
    greeting = "Game over, press A Key to Start";
}
function pressAnyKey(greeting) {
    $('h1').text(greeting);
   
        while (i >= 0) {
             $(document).on("keypress", function() {
              $('h1').text('Level ' + i);
               currentDiceNumber = Math.floor(Math.random() * 4) +1;
                dices.push(currentDiceNumber);
                 console.log(dices);
                 pressing(currentDiceNumber);
                 debugger;
                  var j = 0;
                  while (j < i)  {
                    $(document).on("click", function(event) {
                     switch (event.target) {
                      case buttons[0] :
                     if ( dices[j] === 0) {
                         pressing(0);} 
                         else {
                             wrongPressing(0);
                         }
                      pressing(0);
                       break;
                     case  buttons[1] :
                         if (dices[j] === 1) {
                             pressing(1);} 
                             else {
                                 wrongPressing(1);
                             }
                       break;
                      case buttons[2] :
                         if (dices[j] === 2) {
                             pressing(2);} 
                             else {
                                 wrongPressing(2);
                             }
                       break;
                       case buttons[3] :
                         if (dices[j] === 3) {
                             pressing(3);} 
                             else {
                                 wrongPressing(3);
                             }
                 
                          break;
                       }
                    
                    console.log("J - " + j);
                  });
            }
            
             i++;
             console.log("I - " + i);
            });
};
};
pressAnyKey(greeting); 

