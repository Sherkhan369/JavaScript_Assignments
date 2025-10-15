// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
let num = 10;
console.log("The value of num is: " + num);

++num;
console.log("After increment, the value of num is: " + num);

num++;
console.log("The value of num after increment is: " + num);

--num;
console.log("After decrement, the value of num is: " + num);

num--;
console.log("The value of num after decrement is: " + num);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:

// solution
// Initial values: a = 2, b = 1
// --a decrements a to 1, so the expression becomes 1 - --b + ++b + b--
// --b decrements b to 0, so the expression becomes 1 - 0 + ++b + b--
// ++b increments b to 1, so the expression becomes 1 - 0 + 1 + b--
// b-- uses the current value of b (1) and then decrements it to 0, so the expression becomes 1 - 0 + 1 + 1
//a is 1
// b is 1
let result = 1 - 0 + 1 + 1;
console.log(result);// 3

// 3. Write a program that takes input a name from user &
// greet the user.
// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// 5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");

let totalMarks = 100;

let obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
let obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
let obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

let totalObtained = parseInt(obtainedMarks1) + parseInt(obtainedMarks2) + parseInt(obtainedMarks3);
let percentage = (totalObtained / (totalMarks * 3)) * 100;

document.writeln("<table>");
document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.writeln("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.writeln("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.writeln("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.writeln("<tr><td colspan='2'>Total</td><td>" + totalObtained + "</td></tr>");
document.writeln("<tr><td colspan='2'>Percentage</td><td>" + percentage + "%</td></tr>");
document.writeln("</table>");
