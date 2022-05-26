var score = 0;
var clickingPower = 1;

var budbeeCost = 15;
var budbees = 0;

var pothogCost = 100;
var pothogs = 0;

var puffinCost = 500
var puffins = 0;


//BUILDINGS

function buyBudbee() {

    if (score>=budbeeCost) {

        score = score - budbeeCost;
        budbees = budbees + 1;
        budbeeCost = Math.round (budbeeCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("budbeecost").innerHTML = budbeeCost;
        document.getElementById("budbees").innerHTML = budbees;

        updateScorePerSecond();
    }


}

function buyPothog() {

    if (score>=pothogCost) {

        score = score - pothogCost;
        pothogs = pothogs + 1;
        pothogCost = Math.round (pothogCost * 1.15);

        document.getElementById("score").innerHTML = score;
        document.getElementById("pothogcost").innerHTML = pothogCost;
        document.getElementById("pothogs").innerHTML = pothogs;

        updateScorePerSecond();
    }

}

    function buyPuffin() {

        if (score>=pothogCost) {
    
            score = score - puffinCost;
            puffins = puffins + 1;
            puffinCost = Math.round (puffinCost * 1.15);
    
            document.getElementById("score").innerHTML = score;
            document.getElementById("puffincost").innerHTML = puffinCost;
            document.getElementById("puffins").innerHTML = puffins;
    
            updateScorePerSecond();
        }

}

//SCORE


function addToScore(amount) {

    score = score + amount;
    document.getElementById("score").innerHTML = score;
}

function updateScorePerSecond() {

    scorePerSecond = budbees + pothogs *5 + puffins *50;
    document.getElementById("scorepersecond").innerHTML = scorePerSecond;
}

function saveGame() {

    var gameSave = {

        score: score,
        clickingPower: clickingPower,
        budbeeCost: budbeeCost,
        budbees: budbees,
        pothogCost: pothogCost,
        pothogs: pothogs,
        puffinCost: pothogCost,
        puffins: puffins
    };
    localStorage.setItem("gameSave", JSON.stringify(gameSave));

}


setInterval (function() {

    score = score + budbees;
    score = score + pothogs *5;
    score = score + puffins *50;
    document.getElementById("score").innerHTML = score;

    document.title =score +" weedcrumbs - Buds";

} , 1000); // 1000ms = 1s

setInterval(function() {

    saveGame();

}, 30000); // 30s