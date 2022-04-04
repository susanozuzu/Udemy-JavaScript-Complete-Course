
//What is the different between Function Declaration and Function Expression?
//Function Declaration is saved for later use, and will be executed later, when it is invoked (called), Function Declarations must begin with "Function" e.g function bar () {
    //return 3;
//}
//Function Expression can be stored in a variable: e.g const x function (a, b) {
  //  return a x b;
//}

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);