
var wins = 0;
var losses = 0;

$(document).ready(function () {

    var guessNumber = $("#guessNumber");

    var randNum = Math.floor((Math.random() * 100) + 1);

    guessNumber.text(randNum);

    
    var score = $("#score");

    score.text(0);


    $("#wins").text(wins);

    $("#losses").text(losses);

    if (randNum == parseInt($('#score').text())){


        ++wins;
        $("#wins").text(wins);

    }
    else if (randNum > parseInt($('#score').text())) {

        console.log(randNum < parseInt($('#score').text()));
        $("#hexa").on("click", function () {

            var num1 = score.text();

            var num = parseInt(num1) + 6;

            score.text(num);



        });


        $("#circ").on("click", function () {

            var num1 = score.text();

            var num = parseInt(num1) + 1;

            score.text(num);

        });


        $("#octa").on("click", function () {

            var num1 = score.text();

            var num = parseInt(num1) + 8;

            score.text(num);

        });

        $("#squa").on("click", function () {

            var num1 = score.text();

            var num = parseInt(num1) + 4;

            score.text(num);

        });


    }
    else if (randNum$ < parseInt($('#score').text())) {

        ++losses;

        $("#losses").text(losses);

    }

console.log(typeof randNum);

});

