
//What is Function is similar to a procedure a set of statement that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

//There are 3 ways of writing a function in JavaScript:  1, Function Declaration, 2, Function Expression, 3, Arrow Functions

//A function is a piece of code we can use over and over again
//A variable hold a Value, but a function can hold one or more complete line of code

//Example of function Declaration:

function logger () {
    console.log('My name is Susan');
}


// Calling / Running / Invoking function
logger();
logger ();   //Calling a function without a value and return
logger(); 

function fruitProcessor(apples, oranges){ //To call the function
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //To produce the juice
    return juice; //Return the Juice from the function
}

const appleJuice = fruitProcessor(5, 0); //Calling a value
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(6, 7);
console.log(appleOrangeJuice);

//Functions allows us to write a more maintainable code,
//This principal means dont repeat your code 