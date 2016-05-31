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

function getDefinition(key) {
  backDefinition = flashcardData[key];
  return backDefinition;
}
//
// getDefinition("toggleclass");
// console.log(backDefinition);
// ///////working code above this line

var key;

// function getKeyname() {
//   var key = $(this).text();
//   key = key.slice(0,-2);
//   key = key.toLowerCase();
//   return key;
// };

$(function() {
  $('li').click(function() {
    var key = $(this).text();
    key = key.slice(0,-3);
    key = key.toLowerCase();
    console.log(key);
    getDefinition(key);

    $('#flashBack').html('<p>' + backDefinition + '</p>');

    $('#flashFront').html('<h2>' + key + '</h2>');


  })
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
