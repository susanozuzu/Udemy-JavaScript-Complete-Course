
//What is Type Conversion is when mainly convert from one type to another
//What is Type Coercion is when Javascript convert type behind the scene for us
//Javascript mainly work with String, Number, Boolean

//Example of Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);  //How to convert String to Number
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));  //How to convert a Number to String
console.log(typeof NaN);

console.log(String(23), 23);


//Example of Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

//Another example of Type Coercion
let n = '1' + 1; // '11'
n = n - 1; 
console.log(n); 
