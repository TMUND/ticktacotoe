// $(document).ready(function() {
// 	$('.square1 ').on('click', function() {
// 		$('.taco').show('src', 'tacotoon.png');
// 	})
// });

// function handler( event ) {
// 	var target = $( event.target );
// 		if ( target.is( ".square 1" ) ) {
// 			target.children().toggle();
// 	}
// }	

// $( ".row1" ).click( handler ).find( ".row1" ).hide();


$(document).ready(function() {
    $("#test").click(function() {
        $("div").hide();
    });
    
    $("#test1").click(function() {
        $("div").show();
    });
});

function sayHello() {
	alert('Hello World');
};

// $(document).ready(function() {
// var x = "x"
// var o = "o"
// var count = 0;
// var o_win = 0;
// var x_win = 0;

// $('#board table').click(function() {

//	if ($("#sqr 1").hasClass('X') && $("#sqr 2 v").hasClass('X'))
//})
