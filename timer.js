setInterval() // Executes a function, over and over again, at specified time intervals
setTimeout() // Executes a function, once, after waiting a specified number of miliseconds

var timer = setTimeout(function() {
    alert('You have 5 seconds to make a move')
}, 5000)

function animateSomething(myDiv, speed) {
    var timer = setTimeout(function() {
        alert("You have X seconds to make a move!");

    var stopTimer = stop
        stop = function() {
            clearTimeout(timer);
        }
    });
}

Another approach

var text = ["TICK1", "TICK2", "TICK3", "TICK4", "TICK5"];
var counter = 0;
var elem = document.getElementById("tick");

setInterval(change, 1000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        alert("Next player's turn!");
        counter = 0;
    }
}

if (moveCount === 0) {
    change = false;
} else if (moveCount > 0) {
    change = true; // Is this the correct way to call the function change to start the timer? Or should I use setInterval?
}
