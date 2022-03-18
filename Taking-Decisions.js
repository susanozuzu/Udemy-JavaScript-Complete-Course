//If / else Statements


const age = 15;
//const isOldEnough = age >= 18;  // To create a variable

// To use Boolen Value using If statement to take a decision into
if (age >= 18)   {  
 console.log('Sarah can start driving licence');  //()inside the parenthesis goes a conditions that will be evaluated, if this conditions turnout to be true this block curlbracket{} will be executed, 
} else {    // else means optional
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

//This structure is called if else control  structure, is called control structure because it allows us to have more control over the way our code is executed
//Another if_else example that

const birthYear = 2021;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;

}
console.log(century);