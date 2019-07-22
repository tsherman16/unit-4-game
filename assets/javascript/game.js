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

    function resetBBallImages() {
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
    }

    function startGame() {
        compScore = Math.floor(Math.random() * (maxNumberComp - minNumberComp + 1) + minNumberComp);
        $("#target-score").text(compScore);
        $("#current-score").text(userScore);
        $('#buttons').empty();
        resetBBallImages();
    }

    $(document).on("click", ".bball-button", function () {
        userScore = userScore + parseInt($(this).attr("score"));
        $("#current-score").text(userScore);
        if (userScore === compScore) {
            winScore++;
            userScore = 0;
            $("#wins").text(winScore);
            alert("Congrats, got the Win! Can you repeat?");
            startGame();
        } else if (userScore > compScore) {
            lossScore++;
            userScore = 0;
            $("#losses").text(lossScore);
            alert("#loser #tryharder");
            startGame();
        }
    })

});