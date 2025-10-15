console.log("-----------JavaScript Assignments chapter 25 to 30-------");

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let num = 12.4;

console.log("Number: ",num);

let roundOff = Math.round(num);
console.log("round off value of the number: ",roundOff);

let floorvalue = Math.floor(num);
console.log("floor value of the number: ",floorvalue);

let ceilValue = Math.ceil(num);
console.log("ceil value of the number: ",ceilValue);

console.log("-----------------------------------");

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

let nums = -12.4;

console.log("Number: ",num);

let round_Off = Math.round(nums);
console.log("round off value of the number: ",round_Off);

let floor_value = Math.floor(nums);
console.log("floor value of the number: ",floor_value);

let ceil_Value = Math.ceil(nums);
console.log("ceil value of the number: ",ceil_Value);

console.log("-----------------------------------");

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

let absoluteNum = -5;

let absoluteNumver = Math.abs(absoluteNum);
console.log(`The absolute value of ${absoluteNum} is ${absoluteNumver}`);

console.log("-----------------------------------");

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

let dice1 = Math.floor(Math.random()*6)+1;
let dice2 = Math.floor(Math.random()*6)+1;

console.log(`Random dice value is ${Math.round(dice1)}`);
console.log(`Random dice value is ${Math.round(dice2)}`);

console.log("-----------------------------------");

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

let toss = Math.floor(Math.random()*2)+1;

if(toss == 2){
    console.log("random coin value : Heads");
}else{
    console.log("random coin value: tails");
}

console.log("-----------------------------------");

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

let randomNumber = Math.floor(Math.random()*100)+1;

console.log(`random number between 1 to 100: ${randomNumber}`);

console.log("-----------------------------------");

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:

let weight =( prompt("Enter your weight"));
let weight1 = parseFloat(weight);
console.log(`The weight of user is ${weight1} kilograms`);

console.log("-----------------------------------");


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

let secretNum = 8;
let randomNum = Math.floor(Math.random()*10)+1;
let userNum = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if(userNum === randomNum){
    console.log("Congratulations! You guessed the secret number.");
}else{
    console.log(`Sorry, the secret number was ${randomNum}.`);
}


 console.log("-----------------------------------End-------------------------------------------");

