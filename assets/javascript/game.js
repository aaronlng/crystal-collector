//define the variables to be used
var compNum = Math.floor(Math.random() * ((120-19)+1) + 19);
var crystal1 = Math.floor(Math.random() * ((12-1)+1) + 1);
var crystal2= Math.floor(Math.random() * ((12-1)+1) + 1);
var crystal3= Math.floor(Math.random() * ((12-1)+1) + 1);
var crystal4= Math.floor(Math.random() * ((12-1)+1) + 1);
var userScore = 0;
var wins = 0;
var losses = 0;
var winner = false;
var loser = false;

function reset() {
    compNum
    crystal1
    crystal2
    crystal3
    crystal4
    userScore = 0;
    winner = false;
    loser = false;
    $("#compNum").text(compNum);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#totalScore").text(userScore);
    console.log(compNum);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
}

function checkForWin() {
    if (userScore === compNum) {
        wins++;
        console.log("winner!");
        $("#wins").text("Wins: " + wins);
        winner = true;
    } else if (userScore > compNum) {
        losses++;
        console.log("loser!");
        $("#losses").text("Losses: " + losses);
        loser = true;
    }
}

function checkForReset() {
    if (winner === true) {
        $("#message").text("You Win!");
        reset();
    } else if (loser === true) {
        $("#message").text("You Lose!");
        reset();
    }
}

//crystal buttons
$("#crystal1").on("click", function() {
    $("#message").text("");
    userScore = userScore + crystal1;
    $("#totalScore").text(userScore);
    checkForWin();
    checkForReset();
});

$("#crystal2").on("click", function() {
    $("#message").text("");
    userScore = userScore + crystal2;
    $("#totalScore").text(userScore);
    checkForWin();
    checkForReset();
});

$("#crystal3").on("click", function() {
    $("#message").text("");
    userScore = userScore + crystal3;
    $("#totalScore").text(userScore);
    checkForWin();
    checkForReset();
});

$("#crystal4").on("click", function() {
    $("#message").text("");
    userScore = userScore + crystal4;
    $("#totalScore").text(userScore);
    checkForWin();
    checkForReset();
});

reset();





