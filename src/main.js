/*** This file is the main entry into our app ***/

//Let's import some local files
import addNumbers from "./lib/add-numbers";
import myData from "./data/data.json";

//Something simple: write out to the console
console.log("Hello world");

//Lets use that library we imported above
let results = addNumbers(25, 17);
document.querySelector("#answer").innerHTML = results;

//Lets use the JSON we imported
document.querySelector("#data").innerHTML = JSON.stringify(myData, null, 4);