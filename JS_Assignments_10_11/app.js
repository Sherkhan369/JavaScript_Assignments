// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

let city = prompt("Enter city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

let gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male"){
    alert("Good Morning Sir");
}else{
    alert("Good Morning Ma’am");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

let trafficSingle  = prompt("Enter traffic signal color (red/yellow/green):");

if (trafficSingle.toLowerCase() === "red"){
    alert("Stop: single close now")
} else if(trafficSingle.toLowerCase()=== "yellow"){
    alert("Ready to move")
} else if (trafficSingle.toLowerCase() === "green"){
    alert("Ready to move")
} else{
    alert("wait for the traffic police")
}

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

let fuel = prompt("how many litres fuel are remaining: ")
if( fuel < "0.25litres"){
    alert("Please refill the fuel in your car")
}else{
    alert("keep safe driving")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//a.
 var a = 4;
if (++a === 5){ // yes this condition is true
alert("given condition for variable a is true"); 
}

//b.
// var b = 82;
if (b++ === 83){ 
alert("given condition for variable b is true");
}

//c.
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){ // condition 2 is true
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){ // condition 4 is true
alert("condition 4 is true");
}

//d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals"); // the cost is equal
}

//e.
if (true){ // is true
alert("True");
}
if (false){
alert("False");
}

//f.
if("car" < "cat"){ // is run
alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

let subject1 = parseInt(prompt("Enter your English marks: "))
let subject2 = parseInt(prompt("Enter your Math marks: "))
let subject3 = parseInt(prompt("Enter your Science marks: "))

let totalMarks = 300;
console.log("Total Marks: ",totalMarks);

let obtainedMarks = subject1+subject2+subject3;
console.log("Obtain marks: ",obtainedMarks);

let percentage = obtainedMarks/totalMarks * 100;
console.log("Percentage: ",percentage.toFixed(2));

if (percentage >= 80 && percentage < 100){
    console.log("Grade: A");
}else if(percentage >= 60 && percentage < 80){
    console.log("Grade: B");
} else if(percentage >= 50 && percentage < 60){
    console.log("Grade: C");
}else{
    console.log("Remark: you need to improve.");
}


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

let randomNum = Math.random(1, 10);
let guessNum = parseInt(prompt("Guess the number: "))

if (guessNum == randomNum){
    console.log("Bingo! Correct answer");
} else if(guessNum == randomNum){
    guessNum +=1;
    console.log("Close enough to the correct answer");
}else{
    console.log("try next time. ");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

let num = parseInt(prompt("Enter a number:"));

if (num % 3 === 0) {
    alert(num + " is divisible by 3");
} else {
    alert(num + " is NOT divisible by 3");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
let number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert(number + " is an even number");
} else if(number % 2 !== 0) {
    alert(number + " is an odd number");
}
else{
    alert("Please enter a valid number");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature = parseInt(prompt("Enter temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is very cold outside.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
let firstNum = parseFloat(prompt("Enter first number:"));
let secondNum = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");

if (operation === "+") {
    alert("Result: " + (firstNum + secondNum));
} else if (operation === "-") {
    alert("Result: " + (firstNum - secondNum));
} else if (operation === "*") {
    alert("Result: " + (firstNum * secondNum));
} else if (operation === "/") {
    alert("Result: " + (firstNum / secondNum));
} else if (operation === "%") {
    alert("Result: " + (firstNum % secondNum));
} else {
    alert("Invalid operation");
}