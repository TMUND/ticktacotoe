var player1Name = '';
var player2Name = '';
var turn = '';

var grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];           // 3 x 3 array for mapping the moves
var hasWinner = false;                                      // flag variable for finding the winner
var moveCount = 0;                                      // for counting the number of moves on the board (max will be 9)


function boardMessage(x) {                              // function for writing on the panel (player names)
    return $('#board').text(x);
}

function setTurn() {                                    // setting the turn for who goes, random
    var r = Math.floor((Math.random() * 2) + 1);
    hasWinner = false;                                      // set the winner flag to 0 because game has just begun

    if (r === 1) {
        turn = player1Name;
        startPlayerTickAnimation(1);
        boardMessage (player1Name + "'s turn now");

    } else {
        turn = player2Name;
        startPlayerTickAnimation(2);
        boardMessage (player2Name + "'s turn now");
    }
}

function init() {
    turn = '';
    startPlayerTickAnimation();
    grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    boardMessage('');

    $('.col').map(function() {                          // .map is used to change the values of an array
        $(this).text('');                               // .text (string of combined text of all matched elements (here, .col))
        $(this).removeClass('toe');                     // Clears the board for next game
        $(this).removeClass('taco');
    }).get();                                           // .get is used for retrieving an element

    hasWinner = false;
    moveCount = 0;                                      // This initializing function is used to clear the old values like turn,
    tickAnimation = true;
    tickAnimation2 = true;
}                                                       // grid array, panel messages, and the grids for the new game

var player1TickAnimation = false;
var player2TickAnimation = false;

var startPlayerTickAnimation = function(playerNumber) {
    var intervalToCancel = false;
    var intervalToStart = false;
    var animationTouse = false;

    if (playerNumber === 1) {
        if (player2TickAnimation) intervalToCancel = player2TickAnimation;
        intervalToStart = player1TickAnimation;
        animationTouse = tickAnimation;
    } else if (playerNumber === 2) {
        if (player1TickAnimation) intervalToCancel = player1TickAnimation;
        intervalToStart = player2TickAnimation;
        animationTouse = tickAnimation2;
    } else {
        intervalToCancel = (player1TickAnimation || player2TickAnimation);
    }

    if (intervalToCancel) {
        clearInterval(intervalToCancel);
    }

    if (intervalToStart) {
        intervalToStart = setInterval(function() {
            animationTouse();
        }, 1000);
    }
};

var tickAnimation = function() {
  $('#timer').fadeIn(500, function() {
    $('#timer').fadeOut(500);
  });
};

var tickAnimation2 = function() {
  $('#timer2').fadeIn(500, function() {
    $('#timer2').fadeOut(500);
  });
};

$('#playButton').click(function () {

    if (hasWinner) {                              // this click is to initialize the game (if there was a winner, a play again button)
        init(); // Consider just hiding the play button when it's not needed
    }

    player1Name = $('#player-1-inp').val();             // Have the players set their names?
    player2Name = $('#player-2-inp').val();             // .val gets the first element in the set of matched elements

    if (player1Name === '' || player2Name === '') {
        alert('Please set both player names');
        return;
    }

    setTurn();                                          // set the turn
});


$('.col').click(function () {

    if (player1Name === '' || player2Name === '') {
        alert('Please set both player names');
        return;
    }

    var row = $(this).parent().index();                 // .parent gets the parent of each element in the current set of matched elements
    var col = $(this).index();                          // .index since no argument passed here, returns integer value indicating the...

    if (grid[row][col] !== 0) {                         // .position of the first element within the jQuery object relative to its sibling elements
        alert('This square is already taken');
        return;
    }

    if (hasWinner) {
        alert('Click PLAY AGAIN for another game!');
        return;
    }

    if (turn === player1Name) {
        moveCount++;
        $(this).addClass('toe');
        grid[row][col] = 1;

        tickAnimation();

        $('#timer2').stop(true, false).hide();

        var ifWon = winnerCheck(1, player1Name);


        if (!ifWon) {
            if (moveCount >= 9) {
                boardMessage('It\'s a draw!');
                moveCount = 0;
                $('#playButton').text('Play again!');
                hasWinner = false;
                return;

            } else {
                turn = player2Name;
                startPlayerTickAnimation(2);
                boardMessage(player2Name + "'s turn now");
            }

            return;

        } else {
            return;
        }
    } else if (turn === player2Name) {
        moveCount++;
        $(this).addClass('taco');
        grid[row][col] = 2;

        tickAnimation2();
        $('#timer').stop(true, false).hide();

        var ifWon = winnerCheck(2, player2Name);

        if (!ifWon) {
            if (moveCount >= 9) {
                boardMessage('It\'s a draw!');
                moveCount = 0;
                $('#playButton').text('Play again!');
                hasWinner = true;
                return;

            } else {
                turn = player1Name;
                startPlayerTickAnimation(1);
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
        hasWinner = true;
        moveCount = 0;
        tickAnimation = false;
        tickAnimation2 = false;

        // init();

        $('#playButton').text('PLAY AGAIN!?');
        return true;
    }

    return false;
}


$(document).ready(function() {
    init();
});