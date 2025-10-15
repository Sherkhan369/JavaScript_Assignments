console.log("------------JavaScript Assignments chapetr 12 to 13-----------");
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let userInput = prompt("Enter a character (number or string):");

let checkCheker = userInput.charCodeAt(0);

if (checkCheker >= 48 && checkCheker <= 57) {
    console.log("The given input is a number.");
} else if (checkCheker >= 65 && checkCheker <= 90) {
    console.log("The given input is an uppercase letter.");
} else if (checkCheker >= 97 && checkCheker <= 122) {
    console.log("The given input is a lowercase letter.");
} else {
    console.log("The given input is not a number or a letter.");
}

console.log("---------------------------------------------");

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// let num1 = parseInt(prompt("Enter the first number: "));

let num2 = parseInt(prompt("Enter the second number: "))
if (num1 > num2) {
        alert("The larger number is: " + num1);
    } else if (num2 > num1) {
        alert("The larger number is: " + num2);
    } else {
        alert("Both numbers are equal: " + num1);
    }

    console.log("---------------------------------------------");

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// let num = parseInt(prompt("Enter a number:"));

if (num > 0) {
    alert("The number is Positive.");
} else if (num < 0) {
    alert("The number is Negative.");
} else {
    alert("The number is Zero.");
}

console.log("---------------------------------------------");

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

let char = prompt("Enter your character:");
char = char.toLowerCase();
let vowel = ['a','e','i','o','u'];

if (vowel.includes(char)) {
    alert(true);
} else {
    alert(false);
}

console.log("---------------------------------------------");

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

let pswd = "1234"; 

let user = prompt("Please enter your password:");

if (!user) {
    console.log("Please enter your password");
} else if (user === pswd) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

console.log("---------------------------------------------");

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = prompt("what's the hour: ");

if(hour < 18){
    greeting ="Good day"
}else{
    greeting= "Good evening"
}

console.log("---------------------------------------------");

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let tim = +prompt("What's the time: ");

if (tim >= 0 && tim < 1200){
    console.log("Good Morning");
}else if (tim >= 1200 && tim < 1700){
    console.log("Good Afternoon");
}else if (tim >= 1700 && tim < 2100){
    console.log("Good evening");
}else if (tim > 2100 && tim < 2359){
    console.log("Good night");
}

console.log("-----------------------End----------------------");