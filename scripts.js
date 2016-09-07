console.log('scripts.js sourced');


var colors = ["red", "yellow", "green", "blue"];




// 
// $( document ).ready(function() {
//     console.log( "ready!" );
//   })



// $('.color-button').on('click', function(){
//   console.log('color-button click');
//
// $( "#outputDiv" ).append();
//   })
// });


var redCount= 0;
var yellowCount= 0;
var greenCount= 0;
var blueCount= 0;

$('[data-color="red"]').on('click', function(){
    console.log(' red clicked');
    $('<div class= "color-cube red"></div>').appendTo('.container');
redCount++;
console.log('redCount:', redCount);
$('#red').html('Total red: ' + redCount);
});
