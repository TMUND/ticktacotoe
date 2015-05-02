var player1Name = '';
var player2Name = '';
var turn = '';

var grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];           // 3 x 3 array for mapping the moves
var hasWinner = 0;                                      // flag variable for finding the winner
var moveCount = 0;                                      // for counting the number of moves on the board (max will be 9)

// var text = ["TICK1", "TICK2", "TICK3", "TICK4", "TICK5"];
// var counter = 0;

// var elem = document.getElementById("tick");

// setInterval(change, 1000);

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
        alert("Next player's turn!");
        counter = 0;
    }
}

function boardMessage(x) {                              // function for writing on the panel (player names)
    return $('#board').text(x);
}

function setTurn() {                                    // setting the turn for who goes, random
    var r = Math.floor((Math.random() * 2) + 1);
    hasWinner = 0;                                      // set the winner flag to 0 because game has just begun

    if (r === 1) {
        turn = player1Name;
        boardMessage (player1Name + "'s turn now");

    } else {
        turn = player2Name;
        boardMessage (player2Name + "'s turn now");
    }
}

// document.getElementById("timer").addEventListener("click", timer);

// function timer() {
//     alert("You have 10 seconds to make a move!");
// }

// var timer = setTimeout(function() {
//     alert('Your turn is over!');
// }, 10000);

// $('#timer').click(timer);

function init() {
    turn = '';
    grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    boardMessage('');

    $('.col').map(function() {                          // .map is used to change the values of an array
        $(this).text('');                               // .text (string of combined text of all matched elements (here, .col))
        $(this).removeClass('toe');                     // Clears the board for next game
        $(this).removeClass('taco');
    }).get();                                           // .get is used for retrieving an element

    hasWinner = 0;
    moveCount = 0;                                      // This initializing function is used to clear the old values like turn,
}                                                       // grid array, panel messages, and the grids for the new game

$('#playButton').click(function () {

    if (hasWinner === 1) {                              // this click is to initialize the game (if there was a winner, a play again button)
        init();
    }

    player1Name = $('#player-1-inp').val();             // Have the players set their names?
    player2Name = $('#player-2-inp').val();             // .val gets the first element in the set of matched elements

    if (player1Name === '' || player2Name === '') {
        alert('Please set both player names');
        return;
    }

    setTurn();                                          // set the turn
})

$('.col').click(function () {

    if (player1Name === '' || player2Name === '') {
        alert('Please set both player names');
        return;
    }

    var row = $(this).parent().index();                 // .parent gets the parent of each element in the current set of matched elements
    var col = $(this).index();                          // .index since no argument passed here, returns integer value indicating the...

    if (grid[row][col] !== 0) {                         //  ..position of the first element within the jQuery object relative to its sibling elements
        alert('This square is already taken');
        return;
    }

    if (hasWinner === 1) {
        alert('Click PLAY AGAIN for another game!');
        return;
    }

    if (turn === player1Name) {
        moveCount++;
        $(this).addClass('toe');
        grid[row][col] = 1;

        var ifWon = winnerCheck(1, player1Name);

        if (!ifWon) {
            if (moveCount >= 9) {
                boardMessage('Draw!');
                moveCount = 0;
                $('#playButton').text('Play again!');
                hasWinner = 1;
                return;

            } else {
                turn = player2Name;
                boardMessage(player2Name + "'s turn now");
            }

            return;

        } else {
            return;
        }
    } else if (turn = player2Name) {
        moveCount++;
        $(this).addClass('taco');
        grid[row][col] = 2;

        var ifWon = winnerCheck(2, player2Name);

        if (!ifWon) {
            if (moveCount >= 9) {
                boardMessage('Draw!');
                moveCount = 0;
                $('#playButton').text('Play again!');
                hasWinner = 1;
                return;

            } else {
                turn = player1Name;
                boardMessage(player1Name + "'s turn now");
            }

            return;

        } else {
            return;
        }
    }
});

function winnerCheck(n, playerName) {
    if (
        (grid[0][0] === n && grid[0][1] === n && grid[0][2] === n) ||
        (grid[1][0] === n && grid[1][1] === n && grid[1][2] === n) ||
        (grid[2][0] === n && grid[2][1] === n && grid[2][2] === n) ||

        (grid[0][0] === n && grid[1][0] === n && grid[2][0] === n) ||
        (grid[0][1] === n && grid[1][1] === n && grid[2][1] === n) ||
        (grid[0][2] === n && grid[1][2] === n && grid[2][2] === n) ||

        (grid[0][0] === n && grid[1][1] === n && grid[2][2] === n) ||
        (grid[0][2] === n && grid[1][1] === n && grid[2][0] === n)
        ) {

        boardMessage(playerName + " won the game!");
        hasWinner = 1;
        moveCount = 0;

        $('#playButton').text('play again?');
        return true;
    }

    return false;
}
