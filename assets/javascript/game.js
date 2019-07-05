var wins = 0;
var losses = 0;
var check = false;
var sum = 0;
var randomNumber = 0;
var nums = [];
var randomNumberForCrystal = 0;
$(document).ready(function () {

    setUp();
    function setUp() {
        
        console.log("In setup");
        randomNumber = 0;
        nums = [];
        randomNumberForCrystal = 0;

        randomNumber = Math.floor((Math.random() * 100) + 1);
        console.log(randomNumber);
        $('#guessNumber').text(randomNumber);
        $('#score').text(0);



        while (nums.length != 4) {
            randomNumberForCrystal = Math.floor((Math.random() * 10) + 1);
            if (nums.indexOf(randomNumberForCrystal) === -1) {
                nums.push(randomNumberForCrystal);
            }
        }
        console.log(nums);

        $('#img1').attr('value', nums[0]);
        $('#img2').attr('value', nums[1]);
        $('#img3').attr('value', nums[2]);
        $('#img4').attr('value', nums[3]);
        play();
    }


    function play() {
        
        $('#img1').unbind().click(function () {
            console.log("in img1");
            var num = parseInt($('#score').text());
            num = num + nums[0];
            $('#score').text(num);
            if(parseInt($('#score').text())==randomNumber){
                console.log("you won");
                wins++;
                $('#wins').text(wins);
                setUp();
            }
            else if(parseInt($('#score').text())>randomNumber){
                console.log("you lost");
                losses++;
                $('#losses').text(losses);
                setUp();
            }
        });

        $('#img2').unbind().click(function () {
            console.log("in img2");
            var num = parseInt($('#score').text());
            num = num + nums[1];
            $('#score').text(num);
            if(parseInt($('#score').text())==randomNumber){
                console.log("you won");
                wins++;
                $('#wins').text(wins);
                setUp();
            }
            else if(parseInt($('#score').text())>randomNumber){
                console.log("you lost");
                losses++;
                $('#losses').text(losses);
                setUp();
            }
        });

        $('#img3').unbind().click(function () {
            console.log("in img3");
            var num = parseInt($('#score').text());
            num = num + nums[2];
            $('#score').text(num);
            if(parseInt($('#score').text())==randomNumber){
                console.log("you won");
                wins++;
                $('#wins').text(wins);
                setUp();
            }
            else if(parseInt($('#score').text())>randomNumber){
                console.log("you lost");
                losses++;
                $('#losses').text(losses);
                setUp();
            }
        });

        $('#img4').unbind().click(function () {
            console.log("in img4");
            var num = parseInt($('#score').text());
            num = num + nums[3];
            $('#score').text(num);
            if(parseInt($('#score').text())==randomNumber){
                console.log("you won");
                wins++;
                $('#wins').text(wins);
                setUp();
            }
            else if(parseInt($('#score').text())>randomNumber){
                console.log("you lost");
                losses++;
                $('#losses').text(losses);
                setUp();
            }
        });

    }
});






