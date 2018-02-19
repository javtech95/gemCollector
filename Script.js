$(document).ready(function () {

//Create random numbers between 19 - 120 Asign the number to the id in html

    var randomNumber = function () {
        return Math.floor((Math.random() * 102) + 19);
    };
    var number = randomNumber();
    $("#numberToMatch").text(number);


    //Declare variables for Score

    var wins = 0;
    var losses = 0;
    var totalScore = 0;


    //Create random numbers between 1 - 12 for each Crystal defining a variable. Asign them to each Crystal in html


    var randomBlue = function () {
        return Math.floor((Math.random() * 12) + 1);
    };
    var blueGem = randomBlue();
    $("#blueGem").html(blueGem);

    var randomPurple = function () {
        return Math.floor((Math.random() * 12) + 1);
    };
    var purpleGem = randomBlue();
    $("#purpleGem").html(purpleGem);

    var randomYellow = function () {
        return Math.floor((Math.random() * 12) + 1);
    };
    var opalGem = randomBlue();
    $("#opalGem").html(opalGem);

    var randomDiamon = function () {
        return Math.floor((Math.random() * 12) + 1);
    };
    var diamondGem = randomBlue();
    $("#diamond ").html(diamondGem);


    //set up click for jewels

    $("#blueGem").click(function () {
        totalScore = totalScore + blueGem;
        $("#totalScore").text(totalScore);
        winLose(totalScore, number);

    });

    $("#purpleGem").click(function () {
        totalScore = totalScore + purpleGem;
        $("#totalScore").text(totalScore);
        winLose(totalScore, number);

    });

    $("#opalGem").click(function () {
        totalScore = totalScore + opalGem;
        $("#totalScore").text(totalScore);
        winLose(totalScore, number);

    });

    $("#diamondGem ").click(function () {
        totalScore = totalScore + diamondGem;
        $("#totalScore").text(totalScore);
        winLose(totalScore, number);
    });

    //Set win/lose conditions
    //Add the wins to the "wins"
    //Add the loses to the "loses"
    //Reset the totalScore after wining or loosing
    //Reset the value of the Crystals

    function winLose(total, random) {
        if (total === random) {
            wins = wins + 1;
            $("#winsSpan").text(wins);
            totalScore = 0;
            $("#totalScore").text(0);
            number = randomNumber();
            $("#numberToMatch").text(number);
           blueGem = randomBlue();
            $("#blueGem").html(blueGem);
            purpleGem = randomBlue();
            $("#purpleGem").html(purpleGem);
            opalGem = randomBlue();
            $("#opalGem").html(opalGem);
           diamondGem = randomBlue();
            $("#diamond ").html(diamondGem);


        }
        if (total > random) {
            losses = losses + 1;
            $("#lossesSpan").text(losses);
            totalScore = 0;
            $("#totalScore").text(0);
            number = randomNumber();
            $("#numberToMatch").text(number);
            blueGem = randomBlue();
            $("#green").html(blueGem);
            blueGem = randomBlue();
            $("#purple").html(purpleGem);
            purpleGem = randomBlue();
            $("#yellow").html(diamondGem);
            opalGem = randomBlue();
            $("#red").html(opalGem);

        }
    }
});