/*
* LAB 9
* Learning how to grab html elements
* 
*/

// grab the div from the document
const outputEl = document.getElementById('results_box');

// make 2 new divs and give them text
const new1El = document.createElement("p");
new1El.innerHTML = "This is new text to add";
const new2El = document.createElement("p");
new2El.innerHTML = "More text to add!";

// append them to the dom
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

