//==========JavaScript Assignments chapter 17-20==========//
//==========ARRAYS AND LOOPS==========//

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
let multiArray = [[], [], []];
console.log("Empty Multidimensional Array:", multiArray);

console.log("=========================================");

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Initialized Multidimensional Array (Matrix):", matrix);

console.log("=========================================");

// 3. Write a program to print numeric counting from 1 to 10.
console.log("Numeric Counting from 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("=========================================");
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

let tableNumber = parseInt(prompt("Enter a number to show its multiplication table:"));
let tableLength = parseInt(prompt("Enter length of multiplication table:"));
console.log(`Multiplication Table of ${tableNumber} Length ${tableLength}`);

for(i =1; i <= tableLength; i++){
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}
console.log("=========================================");

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(let i = 0; i < fruits.length; i++){
    console.log(` Element at index ${i} is ${fruits[i]}`);
}

console.log("=========================================");
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
console.log("Counting:");
for(let i = 1; i <= 15; i++){
    console.log(i);
}

console.log("Reverse Counting:");
for(let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("Even:");
for(let i = 0; i <= 20; i += 2){
    console.log(i);
}

console.log("Odd:");
for(let i = 1; i < 19; i += 3){
    console.log(i);
}

console.log("Series:");
for(let i = 2; i <= 20; i += 2){
    console.log(`${i}k`);
}

console.log("=========================================");

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.

// Method 1: Using for loop
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

let found = false;
for(let i = 0; i < items.length; i++){
    if(items[i] === userInput){
        found = true;
        alert(`"${userInput}" is available at index ${i} in our bakery.`);
        break;
    }else{
        console.log("We are sorry. This item is not available in our bakery.");
    }
}
// Method 2: Using includes() method
if (items.includes(userInput)) {
    alert(`"${userInput}" is available at ABC Bakery.`);
} else {
    alert(`Sorry, "${userInput}" is not available at ABC Bakery.`);
}

console.log("=========================================");

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
let numbers = [24, 53, 78, 91, 12];
let largestNumber = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > largestNumber){
        largestNumber = numbers[i];
    }
}

console.log("Largest number in the array is:", largestNumber);

console.log("=========================================");

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
let smallestNumber = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if(numbers[i] < smallestNumber){
        smallestNumber = numbers[i];
    }
}
console.log("Smallest number in the array is:", smallestNumber);

console.log("=========================================");

// 10. Write a program to print multiples of 5 ranging 1 to
// 100
console.log("Multiples of 5 ranging 1 to 100:");

for(let i = 5; i <= 100; i += 5){
    console.log(i);
}
console.log("=========================================");
//==========END==========//

