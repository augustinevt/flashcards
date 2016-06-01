// declare and fill out an object
//
// list titles will correspond with key
//
// in jquery
//   take the list title and use it find corrensponding value in object
//   put title and the value in varible
//   then interpolate into jquery .HTML method

var flashcardData = {toggleclass: "i wanna learn about toggleclass", fadein: "i wanna learn about fadein", slideup: "i wanna learn about slideup"};
var backDefinition;
var key;

function getDefinition(key) {
  backDefinition = flashcardData[key];
  return backDefinition;
}

$(function() {
  $('li').click(function() {
    if ( $("#flashBack").hasClass('active') ) {
      $('#flashFront, #flashBack').toggleClass('active');
    }
    var keyRaw = $(this).text();
    key = keyRaw.slice(0,-3).toLowerCase();
    console.log(key);
    getDefinition(key);
    $('#flashBack').html('<p>' + backDefinition + '</p>');
    $('#flashFront').html('<h2>' + keyRaw + '</h2>');
  })

  $('.flashcard').click(function() {
    $('#flashFront, #flashBack').toggleClass('active');
  });

});


//  var keyname = "this.h2"
//
//
//
//  var backDefinition = getDefinition(keyname)
//
//  #flashFront.html('<h2>' + keyname + '</h2>')
//
//
//  #flashBack.html('<p>' + backDefinition + '</p>')
//
// });
