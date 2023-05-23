/* LAB.JS
* Nishant Suria
* Test out with anon functions
*
*/

function isPrimeNumber(x) {
    if (x % 1 != 0) {return false;}
    for (let i = 2; i < x/2; i++) {
        if (x % i == 0) {return false} 
    }
    return true;
}


function main() {
    console.log("is 22 prime? ", isPrimeNumber(22));
    document.writeln("is 22 prime? ", isPrimeNumber(22));
    console.log("is 79 prime? ", isPrimeNumber(79));
    document.writeln("is 79 prime? ", isPrimeNumber(79));
    console.log("is 81397 prime? ", isPrimeNumber(81397));
    document.writeln("is 81397 prime? ", isPrimeNumber(81397));

    let array = [100, 23, 43, 91, 727, 90017];
    console.log("My array: ", array);
    document.writeln("<br><br>My array: ", array);

    let result = array.map(isPrimeNumber);
    console.log("Test of primeness of array: " + result);
    document.writeln("<br><br>Test of primeness of array: " + result);

    result = array.map(function(x){
        return x ** 0.5;
    })

    console.log("Square root of array: " + result);
    document.writeln("<br><br>Square root of array: " + result);
}

main();