var player1Name = '';
var player2Name = '';
var turn = '';

var grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];   // 3 x 3 array for mapping the moves
var hasWinner = 0,                              // flag variable for finding the winner
var moveCount = 0;                              // for counting the number of moves on the board (max will be 9)

function boardMessage(x) {                      // function for writing on the panel (player names)
    return $('#board').text(x);
}

function setTurn() {                                    // setting the turn for who goes, random
    var r = Math.floor((Math.random() * 2) + 1);
    hasWinner = 0;                                      // set the winner flag to 0 because game has just begun

    if (r === 1) {
        turn = player1Name;
        boardMessage (player1Name + " 's turn now");

    } else {
        turn = player2Name;
        boardMessage (player2Name + " 's turn now");
    }
}

function init() {
    turn = '';
    grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    boardMessage('');

    $('.col').map(function() {                          // .map is used to change the values of an array
        $(this).text('');                               // .text (string of combined text of all matched elements (here, .col))
    }).get();                                           // .get is used for retrieving an element

    hasWinner = 0;
    moveCount = 0;                                      // This initializing function is used to clear the old values like turn,
}                                                       // grid array, panel messages, and the grids for the new game
