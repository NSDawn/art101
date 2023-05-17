/*
* LAB 10
* Learning use Event Listeners
* 
*/

// grab the elements from the html
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

// run handleInput() when the Enter key is pressed
inputElement.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    handleInput()
    event.preventDefault(); 
  }
});

// handles input
function handleInput() {
    let inputText = inputElement.value;
    // if it's empty, don't do anything
    if (inputText == "") {return;}
    // clears the input box
    inputElement.value = "";
    // puts reversed input in the output box
    outputElement.innerHTML = inputText.split('').sort().join('');   
}