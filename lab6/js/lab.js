// index.js - Arrays and Objects
// Author: Nishant Suria
// Date: 2 May 2023


// Define Variables
let myTransport = ["Ford Taurus", "bike", "rides from friends", "Lime Scooter"]; // 'array' or 'list'
 
let myMainRide = { // 'object' 'dictionary'
  make: "Ford",
  model: "Taurus",
  color: "rusty",
  year: 1995,
  age: function() {
    return 2023 - this.year;  
  }
}

document.writeln("Kinds of Transportation I use: ", myTransport, "<br>");

document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, "\t"), "</pre>" )