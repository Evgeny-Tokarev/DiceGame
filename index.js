var userPattern = [];
var randomPattern = [];
var gameFlag = false;
var colours = ["green","red", "yellow", "blue"];
var level = 0;

function playSound(soundColour) {
    var audio = new Audio("sounds/" + soundColour + ".mp3");
    audio.play();
}
function pressButton(colour) {
    $("#" + colour).addClass("pressed");
    setTimeout(function () {
        $("#" + colour).removeClass("pressed");
      }, 100);

}

$(document).keypress(function() {
    if (!gameFlag) {
        console.log("!gameFlag / level = " + level);

        $("h1").text("Level " + level);
        if (level === 0) {
            setTimeout(function() {computerChoice();}, 1000); 
        } else {computerChoice();
        }
        gameFlag = true;
    }
})
$(".btn").click(function() {
 var userColour = $(this).attr("id");
 userPattern.push(userColour);
 playSound(userColour);
 pressButton(userColour);
 checkAnswer(userPattern.length - 1);

})
function checkAnswer(currentNumber) {
    console.log(userPattern.length + "   " + randomPattern.length)
    if (userPattern[currentNumber] === randomPattern[currentNumber]) {
        if (userPattern.length === randomPattern.length) {
            setTimeout(function() { computerChoice()}, 1000);
        }
    } else {
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
    pressButton(colours[currentNumber]);
    level = 0;
    randomPattern = [];
    gameFlag = false;
    }
}

function computerChoice() {
    
    userPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColour = colours[randomNumber];
    randomPattern.push(randomColour);
    level++;
    $("h1").text("Level " + level);
    $("#" + randomColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColour);
}