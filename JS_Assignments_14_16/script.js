//============ARRAYS METHODS===========
// 1. Declare an empty array using JS literal notation to store
// student names in future
var studentNames = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentNamesObj = new Array();

// 3. Declare and initialize a strings array.
var stringArray = ["Hello", "World", "JavaScript"];

// 4. Declare and initialize a numbers array.
let numberArray = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
let booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array.
let mixedArray = ["Hello", 42, true, 3.14, "World"];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser:
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log("Qualifications in Pakistan:");
for (let i = 0; i < qualifications.length; i++){
    console.log(i+1,qualifications[i]);
}


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let studentsNames = ["Sherkhan", "Sufiyan", "Ahsan"];
let studentsScores = [320, 230, 480];
let totalMarks = 500;
for (let i = 0; i < studentsNames.length; i++){
    let percentage = (studentsScores[i] / totalMarks) * 100;
    console.log("Score of " + studentsNames[i] + " is " + studentsScores[i] + ". Percentage: " + percentage + "%");
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
let colors = ["Red", "Green", "Blue", "Yellow"];
console.log("Colors array:", colors);

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
let updatedColor = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(updatedColor);
console.log("Updated Colors array:", colors);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colors.push("Purple", "Orange");
console.log("Updated Colors array after adding two more colors:", colors);

// d. Delete the first color in the array. Display the updated
// array in your browser.
colors.shift();
console.log("Updated Colors array after deleting the first color:", colors);

// e. Delete the last color in the array. Display the updated
// array in your browser.
colors.pop();
console.log("Updated Colors array after deleting the last color:", colors);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
let askUser = prompt("At which index do you want to add a color?");
let colorName = prompt("Enter the color name to add:");
colors.splice(askUser, 0, colorName);
console.log("Updated Colors array after adding color at desired index:", colors);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
let deleteIndex = prompt("At which index do you want to delete color(s)?");
let deleteCount = prompt("How many colors do you want to delete?");
colors.splice(deleteIndex, deleteCount);
console.log("Updated Colors array after deleting color(s) from desired index:", colors);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let stnScore = [320, 450, 180, 300,500]
console.log("Scores of students: ",stnScore);

stnScore.sort()
console.log("Ordered scores of students:", stnScore);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ['Karachi', 'Quetta', 'Peshawar', 'Islamabad','Lahore']
console.log("Cities list:\n",cities);

cities.slice(2,4)
console.log("Selected cities list:\n",cities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

let arr = ["This ","is"," my","cat"];
let singleString = arr.join(" ");
console.log("Array elements:\n",arr);
console.log("String:\n",singleString);


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
let devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");

console.log("Devices:\n",devices);

console.log("Out:\n",devices.shift());
console.log("Out:\n",devices.shift());
console.log("Out:\n",devices.shift());
console.log("Out:\n",devices.shift());

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
let devices1 = [];
devices1.push("Keyboard");
devices1.push("Mouse");
devices1.push("Printer");
devices1.push("Monitor");

console.log("Devices:\n",devices1);

console.log("Out:\n",devices1.pop());
console.log("Out:\n",devices1.pop());
console.log("Out:\n",devices1.pop());
console.log("Out:\n",devices1.pop());

console.log("Devices:\n",devices1);

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:

let phoneMakers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.writeln("<select>");
for (let i = 0 ; i < phoneMakers.length; i++){
    document.writeln("<option>" + phoneMakers[i] + "</option>")
}
document.writeln("</select>");