

//Reviewing functions Declaration, Expression,and Arrow Functions


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName){
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if (retirement > 0){    
        return retirement;
        console.log(`${firstName} retires in ${retirement} years`)
} else {
    return -1;
    console.log(`${firstName} has already retired`);
}
}
console.log(yearsUntilRetirement(1991, 'Susan'));
console.log(yearsUntilRetirement(1950, 'Bob'));