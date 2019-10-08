





$(document).ready(function() {
    randomNumber = Math.floor(Math.random() * 100) ;

    $("#randomNumber").text(randomNumber);

    var startScore = 0;
    var winsTally = 0;
    var lossesTally= 0;


    chromeCrytal = Math.floor(Math.random() * 10);
        purpleCrystal = Math.floor(Math.random() * 10);
        quartsCrystal = Math.floor(Math.random() * 10);
        blueCrystal = Math.floor(Math.random() * 10);




    function gameReset(randomNumber,startScore, winsTally, lossesTally) {
        var randomNumber = Math.floor(Math.random() * 100) ;
        var startScore = 0;
        var winsTally = 0;
        var lossesTally= 0;
        chromeCrytal = Math.floor(Math.random() * 10);
        purpleCrystal = Math.floor(Math.random() * 10);
        quartsCrystal = Math.floor(Math.random() * 10);
        blueCrystal = Math.floor(Math.random() * 10);

        $("#randomNumber").html("<p>" + randomNumber + "</p>");

        $("#totalSum").text(startScore);

        console.log(startScore);

        console.log(randomNumber);
        
        
    }

    $("#blueCrystal").on("click", function() {
        startScore = startScore + blueCrystal;
         $("#totalSum").text("Total: " + startScore);
         if (startScore === randomNumber)
         $("#wins").text("Wins:" + winsTally ++);
         else if (startScore> randomNumber)
         $("#losses").text("Losses: " + lossesTally ++);
         
        });

    $("#purpleCrystal").on("click", function() {
        startScore = startScore + purpleCrystal;
         $("#totalSum").text("Total: " + startScore);
         if (startScore === randomNumber)
         $("#wins").text("Wins:" + winsTally ++);
         else if (startScore> randomNumber)
         $("#losses").text("Losses: " + lossesTally ++);
         
        });

    $("#quartsCrystal").on("click", function() {
        startScore = startScore + quartsCrystal;
         $("#totalSum").text("Total: " + startScore);
         if (startScore === randomNumber)
         $("#wins").text("Wins: " + winsTally ++);
         else if (startScore > randomNumber)
         $("#losses").text("Losses: " + lossesTally ++);
         
        });

    $("#chromeCrystal").on("click", function() {
        startScore = startScore + chromeCrytal;
         $("#totalSum").text("Total: " + startScore);
         if (startScore === randomNumber)
         $("#wins").text("Wins:" + winsTally ++);
         else if (startScore > randomNumber)
         $("#losses").text("Losses: " + lossesTally ++);
         
        });








});