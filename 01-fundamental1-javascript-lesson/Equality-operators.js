// What is Equality Operators is the result of evaluating an equality operator is always of type Boolean based on whether the comparsion is true.

// == Equality OPerator. is to check whether its two operands are equal, returning a Boolean result (Loose equality)
// != InEquality Operator
// === Identity Operator is to check whether its two operands are equal, returning a Boolean result (Strict equality)
// !== NonIdentity Operator

//Example of Identity Operator ===(strict equality)
const age = 18;
if (age === 18) console.log('You just become an adult :D')

//Example of Equality OPerator ==(Loose equality)
if(age == 18) console.log('You just become an children :D')

const favorite = ("Whats your favorite number");
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number!')
} else if(favorite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('NUmber is not 23 or 7')
}