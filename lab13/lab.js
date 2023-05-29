/*
* LAB 13
* loops
*  
*/

let KEY = {
  3: "Fizz",
  5: "Buzz",
  7: "Bang",
}

function fizzBuzz(n) {
  intn = parseInt(n);
  let output = "";
  for (let i = 1; i < intn + 1; i++) {
    let thisln = "";
    for (let key in KEY) {
      if (i % key === 0) {
        
        thisln += KEY[key]
      }
    }
    thisln += thisln == "" ? i : "!";
    thisln += "<br>";
    output += thisln;
  }
  return output;
}


const generateButton = document.getElementById("button");
generateButton.addEventListener("click", generateButtonClicked)

function generateButtonClicked() {
  const input_value = document.getElementById("input").value;
  if (input_value === "") {return}


  const OUTPUT_ELEMENT = document.getElementById("output");
  OUTPUT_ELEMENT.innerHTML = fizzBuzz(parseInt(input_value));
  
}

const updateButton = document.getElementById("button_update");
generateButton.addEventListener("click", updateButtonClicked)

function updateButtonClicked() {
  KEY = {};
  for (let i = 1; i <= 3; i++) {
    
    const multiple = parseInt(document.getElementById("input_multiple_" + String(i)).value);
    const label = document.getElementById("input_label_" + String(i)).value;
    if (multiple <= 0) {continue;};
    KEY[multiple] = label
  }
  console.log(KEY)
} 

updateButtonClicked();


