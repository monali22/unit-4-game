var wins = 0;
var losses = 0;
var check = false;

$(document).ready(function () {

    function check(randNum) {
        if (randNum === parseInt($("#score").text())) {
            wins++;
            $("#wins").text(wins);
            $("#wltext").text("You Won");
            playTheGame();
            //return;
        }
        if (randNum < parseInt($("#score").text())) {
            losses++;
            $("#losses").text(losses);
            $("#wltext").text("You Lost");
            playTheGame();
            //return;
        }
    }

    function playTheGame() {
        var guessNumber = $("#guessNumber");

        var randNum = Math.floor((Math.random() * 100) + 1);

        guessNumber.text(randNum);


        var score = $("#score");

        score.text(0);


        $("#wins").text(wins);

        $("#losses").text(losses);

        var nums = [];


        for (var i = 1; i < 10; i++) {
            var randNum2 = Math.floor((Math.random() * 10) + 1);
            if (nums.indexOf(randNum2) == -1) nums.push(randNum2);
        }
        console.log(nums);
        if (randNum > parseInt($("#score").text())) {
        $("#img1").on("click", function () {
            var num = parseInt($("#score").text()) + nums[0];
            score.text(num);
            check(randNum);
        });
        $("#img2").on("click", function () {
            var num = parseInt($("#score").text()) + nums[1];
            score.text(num);
            check(randNum);
        });
        $("#img3").on("click", function () {
            var num = parseInt($("#score").text()) + nums[2];
            score.text(num);
            check(randNum);
        });
        $("#img4").on("click", function () {
            var num = parseInt($("#score").text()) + nums[3];
            score.text(num);
            check(randNum);
        });
    }

    }




    

    playTheGame();

    

});






