//What is  Operators basely allows us to transform values or combine multiple values and really do all kind of works with Values
//There are many Catagories of Operators like e.g
//1:  Mathematical Operators
//2: Logic Operators
//3: Assignment Operators
//4: Comparsion Operators



//const ageSusan = 2021 - 1983;   //Is not changeable
//const ageFlourish = 2021 - 2007;
//console.log(ageSusan, ageFlourish);
//const ageSusan = now - 1983; //Is changeable



//1: E.g Mathematical Operations
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); 
// 2 ** 3 means 2 to the power of 3 = 2 * 2* 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);   // You can concaciate them using plus, ''This icon means to space the word inbetween


// Assignment operators
let x = 10 + 5;  // 15 x represent a number of all your calulations
x += 10;  // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100
x++;    // x = x + 1 =101
x--;   //x = x - 1 = 100
x--;  // x = x - 1 =99
console.log(x);

// Comparison operators, we use it to produce Boolean values
console.log(ageJonas > ageSarah); // >, <, >=< <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);