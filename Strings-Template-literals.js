// Strings is an very important part on programming
// Different way of building String in easy way using 'Template Literals'


// Create a new Variable about a person
const firstName = 'Jonas';
const job = 'programmer';
const birthYear = 1991;
const year = 2037;

//Examples #1.

const jonas = "I'm " + firstName + ',a ' + (year - birthYear) + ' years old ' +  job + '!';
console.log(jonas);



//Examples using Template strings in Js#2,
// OR
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;  //We use backtips to tell Js we are writing template strings, we write variable inside a string.
console.log(jonasNew)

//Examples #3 using backtips `` to write in strings
// OR
console.log(`Just a regular string...`);


//Examples #4 with Template role to create 'Multiple-lines strings'
// OR

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);