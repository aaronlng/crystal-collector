//define the variables to be used
var compNum = Math.floor(Math.random() * ((120-19)+1) + 19);
var crystal1 = Math.floor(Math.random() * ((12-1)+1) + 1);
var crystal2= Math.floor(Math.random() * ((12-1)+1) + 1);
var crystal3= Math.floor(Math.random() * ((12-1)+1) + 1);
var crystal4= Math.floor(Math.random() * ((12-1)+1) + 1);
var userScore = 0;
var wins = 0;
var losses = 0;

//crystal buttons
$("#crystal1").on("click", function() {
    userScore = userScore + crystal1;
    $("#totalScore").text(userScore);
    if (userScore === compNum) {
        console.log("winner!");
        wins++;
        $("#wins").prepend("<p>", "You Win!");
    } else if (userScore > compNum) {
        console.log("You Lose!");
        losses++;
    }
});

$("#crystal2").on("click", function() {
    userScore = userScore + crystal2;
    $("#totalScore").text(userScore);
});

$("#crystal3").on("click", function() {
    userScore = userScore + crystal3;
    $("#totalScore").text(userScore);
});

$("#crystal4").on("click", function() {
    userScore = userScore + crystal4;
    $("#totalScore").text(userScore);
});

$("#compNum").text(compNum);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

//determining whether user wins or loses



console.log(compNum);
console.log(crystal1);
console.log(crystal2);
console.log(crystal3);
console.log(crystal4);



