// START GAME
// var = wins, losses, userScore, compScore, jewelScore, jewelPhotos

//generate random number for the compScore*********
//generate random number for the bballImages***********
//add score to user score with every click
//add win if score matches and add loss if score goes over
//if score goes over restart game

//The random number shown at the start of the game should be between 19 - 120
//Each crystal should have a random hidden value between 1 - 12

$(document).ready(function () {

    var winScore = 0;
    var lossScore = 0;
    var userScore = 0;
    var compScore = 0;
    var minNumberImg = 1;
    var maxNumberImg = 12;
    var minNumberComp = 19;
    var maxNumberComp = 120;
    const bballImages = [
        "assets/images/bballpic1.jpg",
        "assets/images/bballpic2.jpg",
        "assets/images/bballpic3.jpg",
        "assets/images/bballpic4.jpg",
        "assets/images/bballpic5.jpg"
    ];

    startGame();

    bballImages.forEach(function (src) {
        let bballbtn = $("<button>");
        bballbtn.addClass("bball-button");
        bballbtn.attr("score", Math.floor(Math.random() * (maxNumberImg - minNumberImg + 1) + minNumberImg));
        let img = $("<img>");
        img.attr("src", src);
        img.addClass("bball-buttonImg");
        bballbtn.append(img);
        $("#buttons").append(bballbtn);
    });

    function startGame() {
        console.log("I DID IT #1");
        compScore = Math.floor(Math.random() * (maxNumberComp - minNumberComp + 1) + minNumberComp);
        $("#target-score").text(compScore);
        $("#current-score").text(userScore);
    }

    $(".bball-button").on("click", function () {
        userScore = userScore + parseInt($(this).attr("score"));
        $("#current-score").text(userScore);
        if (userScore === compScore) {
            winScore++;
            userScore = 0;
            $("#wins").text(winScore);
            startGame();
        } else if (userScore > compScore) {
            lossScore++;
            userScore = 0;
            $("#losses").text(lossScore);
            startGame();
        }
    })



});