// Boolean can only be true or false
// Boolean value e.g true; then print it with console.log(true), you get true as answer
// 3 Primitive Data Types: a=Number:Floating points Numbers used for decimals and integers e.g "let age = 23;", b=String:Sequence of characters used for text e.g "let FirstName = 'Jonas';", c=Boolean:Logical type that can only be true or false used for taking decisions e.g "let fullAge = true;"

// How to store Boolean in variable
//Declare a variable using let
let javascriptIsFun = true;   //true or false is a Boolean value that hold the Data type not the variable.
console.log(javascriptIsFun);


//Typeof is an operator just like plus or minus operator that you can used to show a type of a value
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'jonas'); // example of string and most to used quot''

//Dynamic typing in action simple means we can easlier change the type of the value that is stored on a variable.  
//'Numbers and String' are the most Data used type

//How to resigned the variable name without using let!, using variable name-javascriptIsFun and resign it with another Value String 'YES'
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);


// To define a variable without a Value
let year;
console.log(year); // Undefined means whenever you declare an empty variable the value of the variable will be undefined
console.log(typeof year); // undefined is both 


//Resign a new Value basely
//Dynamic typeing
year = 19991;
console.log(typeof year); //THis typeof call Number

console.log(typeof null);



