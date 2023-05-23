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


// preset the theme based on preference
if (window.matchMedia) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    changeTheme('lightmode'); // if they prefer dark, set to light mode.
  } else {
    changeTheme('lightmode'); // otherwise, if they prefer light mode, set it to light mode.
  }
} else {  
  changeTheme('lightmode'); // and if their browser doesn't support this, set it to light mode anyway dab dab poggers.
}


