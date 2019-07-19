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
    const bballImages = [
        {img: "https://www.nydailynews.com/resizer/BLjzLj94aayGu3JNDpnGgXA4JMw=/800x560/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/WI6JGVUE6QLP25SWCK7ZIUECIQ.jpg"},
        {img: "http://www.realclearsports.com/blognetwork/rcs_sidelines/Raja%20Bell%20Suns.jpg"},
        {img: "https://cdn.vox-cdn.com/thumbor/FqNfGhfaP3771V_2lK2KCKUx8_U=/0x0:599x399/1200x800/filters:focal(0x0:599x399)/cdn.vox-cdn.com/uploads/chorus_image/image/5389779/amarescream.0.jpg"},
        {img: "http://cdn1-www.hoopsvibe.com/assets/uploads/2008/03/file_50727_0_arton47540.jpg"}
    ];

    var startGame_compScore = function () {
        var minNumber = 19;
        var maxNumber = 120;
        var compScore = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        $("#target-score").innerText(compScore);
    };
    var startGame_bballScore = function () {
        var minNumber = 1;
        var maxNumber = 12;
        var bballScore = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

        bballImages.forEach(function (img) {
            let bballbtn = $("<button>");
            bballbtn.addClass("bball-button");
            bballbtn.val(bballScore);
            //question about "img" in this function
            $("#buttons").append(bballbtn);
        });

        var userScore = 0;
        $("#current-score").innertext(userScore);
    };


    $("bball-button").on("click", function () {
        userScore = userScore + bballScore;
        if (userScore === compScore) {
            winScore++;
            $("#wins").innertext(winScore);
            startGame_compScore();
            startGame_bballScore();
        } else if (userScore > compScore) {
            lossScore++;
            $("#losses").innertext(lossScore);
            startGame_compScore();
            startGame_bballScore();
        }
    })



});