$(document).ready(function () {

//Create random numbers between 19 - 120 Asign the number to the id in html

    let randomNumber = function () {
        return Math.floor((Math.random() * 102) + 19);
    };
    let number = randomNumber();
    $("#numberToMatch").text(number);


    //Declare variables for Score

    let wins = 0;
    let losses = 0;
    let totalScore = 0;


    //Create random numbers between 1 - 12 for each Crystal defining a variable. Asign them to each Crystal in html


    let randomBlue = function () {
        return Math.floor((Math.random() * 12) + 1);
    };
    let blueGem = randomBlue();
    $("#blueGem").html(blueGem);

    let randomPurple = function () {
        return Math.floor((Math.random() * 12) + 1);
    };
    let purpleGem = randomBlue();
    $("#purpleGem").html(purpleGem);

    let randomYellow = function () {
        return Math.floor((Math.random() * 12) + 1);
    };
    let opalGem = randomBlue();
    $("#opalGem").html(opalGem);

    let randomdiamond = function () {
        return Math.floor((Math.random() * 12) + 1);
    };
    let diamondGem = randomBlue();
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

    $("#diamond ").click(function () {
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
            $("#blueGem").html(blueGem);
            blueGem = randomBlue();
            $("#purpleGem").html(purpleGem);
            purpleGem = randomBlue();
            $("#opalGem").html(opalGem);
            opalGem = randomBlue();
            $("#diamond ").html(diamondGem);

        }
    }
});