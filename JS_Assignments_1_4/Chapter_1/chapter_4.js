// 1. Declare 3 variables in one statement.
// 2. Declare 5 legal & 5 illegal variable names.
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

let name, age, country;
// legal
let myName, $price, _age, user1, __totalamount;

// illegal
 var 1user, my-name, full name , @value , var;   
 

 console.log("<h1>Rules for naming JS variables</h1>");
    console.log("Variable names can only contain letters, numbers, $ and _. <br>");
    console.log("For example: $my_1stVariable <br><br>");
    
    console.log("Variables must begin with a letter, $ or _. <br>");
    console.log("For example: $name, _name or name <br><br>");
    
    console.log("Variable names are case sensitive <br><br>");
    
    console.log("Variable names should not be JS keywords");