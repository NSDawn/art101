/* LAB.JS
* Nishant Suria
* Get a string from the user and write it in alphabetical order
*
*/

function alphabetizeString(in_string) {
    return in_string.split("").sort().join("");
}

function main() {
    let user_input = window.prompt("Enter something!");
    document.writeln(
        "<div><pre><code>Oh, hey, I've fixed your name: <br>" +
        alphabetizeString(user_input) +
        "<br></code></pre></div>"
        );
}

main();