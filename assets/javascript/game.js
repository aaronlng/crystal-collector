//define the variables to be used
var crystal1 = "";
var crystal2 = "";
var crystal3 = "";
var crystal4 = "";
var compNum = Math.floor(Math.random() * ((120-19)+1) + 19);

var wins = 0;
var losses = 0;

//Function to create random computer number
$("#compNum").text(compNum);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

//crystal buttons
