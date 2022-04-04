//What is Arrow functions provide you with an alternative way to write a shorter and faster syntax compared to function expressions.

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
 

//How to calculate when a person retired from from work
const yearsUntilRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;

}

console.log(yearsUntilRetirement(1991, 'Susan'));
console.log(yearsUntilRetirement(1980, 'Bob'));