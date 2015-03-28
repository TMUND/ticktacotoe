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

function sayHello() {
	alert('Hello World');
}

$(document).ready(function() {
    $("#test").click(function() {
        $("div").hide();
    });
    
    $("#test1").click(function() {
        $("div").show();
    });
});
