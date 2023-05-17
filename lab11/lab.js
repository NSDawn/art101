/*
* LAB 11
* learning jQuery
*  
*/

// make an element generator function
let makeButton = function() {return $("<button>")};

// set attributes
let lightmodeButton = makeButton().attr("id", "lightmode").text("Light Mode");
let darkmodeButton = makeButton().attr("id", "darkmode").text("Dark Mode");

var changeTheme = function (in_mode) { 
  console.log(in_mode)
  let bodyTag = $("body");
  bodyTag.removeClass();
  bodyTag.addClass(in_mode);
};


// add the onclick functions 
lightmodeButton.on('click', function() {changeTheme('lightmode');});
darkmodeButton.on('click', function() {changeTheme('darkmode')});



// append the button to an element of id button_div
$("#button_div").append(lightmodeButton);
$("#button_div").append(darkmodeButton);





