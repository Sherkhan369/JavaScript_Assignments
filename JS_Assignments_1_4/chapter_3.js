// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
let age = 20;
alert("I am " + age + " years old.");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
let visitCount = 14; 
alert("You have visited this site " + visitCount + " time.");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
let birthYear = 2003;
document.writeln("My birth year is " + birthYear + "<br>");
document.writeln("Data type of my declared variable is " + typeof(birthYear));


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

let visitorName = "Sher Khan";
let productTitle = "T-shirt";
let quantity = 5;
document.writeln(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");