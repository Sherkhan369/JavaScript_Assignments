// ===========JavaScript Assignments Chapter 21 to 25=================

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");

let fullName = firstName + " " + lastName;

console.log("Full Name: ",fullName);

console.log("------------------------------------");
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

let userFavoriteMobile = prompt("Find you favorite moble name: ");

let userInputLength = userFavoriteMobile.length;
console.log("Length of String", userInputLength);

console.log("------------------------------------");

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let country = "Pakistan";
let findIndex = country.indexOf("n")
console.log("The index of n ==>",findIndex);

console.log("------------------------------------");

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let myTex = "Hello World!";

let findLastL = myTex.lastIndexOf("l");
console.log("The last index of l ==>",findLastL);

console.log("------------------------------------");

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let tex = "Pakistan";

let thirdIndex = tex[3];
console.log("Third index is ==>",thirdIndex);

console.log("------------------------------------");


// 6. Repeat Q1 using string concat() method.

let firstNme = prompt("Enter your first name: ");
let lastNme = prompt("Enter your last name: ");

let fullNme = firstName.concat(" ", lastName);

console.log("Hello, " + fullName + "!");

console.log("------------------------------------");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

let city = "Hyderabad";
let replaceCity = city.replace("Hyder","Islam");

console.log("After replacement: ",replaceCity);

console.log("------------------------------------");

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

let  message = "Ali and Sami are best friends. They play cricket and football together.";

let replaceAnd = message.replaceAll("and","&");
console.log("After replacement: ",replaceAnd);

console.log("------------------------------------");

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

let str = "472";
console.log(typeof(str));

let convert = parseInt(str);
console.log("convert to number: ",typeof(convert));

console.log("------------------------------------");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

let userPromt = prompt("Enter your Query: ")

let convertCapital = userPromt.toUpperCase();
console.log("Convert to capital",convertCapital);

console.log("------------------------------------");


// 11. Write a program that takes user input. Convert and
// show the input in title case.

let msg = prompt("Enter your query: ");
let titleCase = msg[0].toUpperCase()+""+ msg.slice(1);

console.log("Title case: ",titleCase);

console.log("------------------------------------");

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

let num = 35.36;
let values = num.toString().replace(".","");
console.log("Convert to string: ",values);

console.log("------------------------------------");

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

let userQuery = prompt("Enter your name : ");

let specialsymbol = ["@",".", "!",","];

if (userQuery.charCodeAt("!")==33 || userQuery.charCodeAt("@") == 64 || userQuery.charCodeAt(",") == 44 || userQuery.charCodeAt(".")==46) {
    console.log("enter a valid username");
}else{
    console.log("The user name is : ");
}

console.log("------------------------------------");

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

let found = false;
for(let i = 0; i < items.length; i++){
    if(items[i] === userInput.toLowerCase()){
        found = true;
        alert(`"${userInput}" is available at index ${i} in our bakery.`);
        break;
    }else{
        console.log("We are sorry. This item is not available in our bakery.");
    }
}

console.log("------------------------------------");

// 15.Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

let password = prompt("Enter your password: ");

if(password[0] >= 48 || password[0] <= 57){
    console.log("can not start with number");
}else if(password.length < 6){
    alert("password at least 6 characters")
}else if(password.charCodeAt() >= 65 && password.charCodeAt() <= 90 || password.charCodeAt() >= 97 && password.charCodeAt()<=122){
    alert("Password accept")
}else{
    alert("invelid password")
}

console.log("------------------------------------");

// 16.Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

let university = "University of Karachi";

let splitMethod = university.split("");

for (i =0; i < splitMethod.length; i++){
    console.log(splitMethod[i]);
}

console.log("------------------------------------");

// 17. Write a program to display the last character of a user
// input.

let usr = prompt("Enter a words");

let lastCharacter = usr.slice(-1)

console.log(`Last character of user input is ${lastCharacter}`);

console.log("------------------------------------");

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

let stringText = "The quick brown fox jumps over the lazy dog";

let countThe = stringText.toLowerCase();
let words = countThe.split(" ")
let count = 0;

for(i = 0; i < words.length;  i++){
    if( words[i] == "the"){
        count++;
        
    }
    
}
console.log(`There are ${count} occurences of the world The,`);

console.log("-----------------End-------------------");