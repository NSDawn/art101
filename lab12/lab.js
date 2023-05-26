/*
* LAB 11
* conditionals
*  
*/

function sortingHat(in_str) {
  const HOUSES = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
  return (HOUSES[in_str.length % HOUSES.length])
}

function sortingHatWithUnecessaryIfs(in_str) {
  const in_str_len = in_str.length;
  const in_str_len_mod = in_str_len %4;

  if (in_str_len_mod == 0)           {return "Gryffindor"}
  else if (in_str_len_mod == 1)      {return "Ravenclaw"}
  else if (in_str_len_mod == 2)      {return "Slytherin"}
  else if (in_str_len_mod == 3)      {return "Hufflepuff"}
}


const sortingHatButton = document.getElementById("button");
sortingHatButton.addEventListener("click", sortingHatButtonClicked)

function sortingHatButtonClicked() {
  const input_value = document.getElementById("input").value;
  if (input_value === "") {return}

  const output_house = sortingHat(input_value)
  document.getElementById("output").innerHTML = "The sorting hat has placed you into: " + output_house;
}

