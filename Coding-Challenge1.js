//Questions 1
// 1. Store mark's and john's mass and height in variables

// 2. Calculate both their BMIs using the formula (you can even implement both versions)

// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// Test DATA 2: Marks weights 95 kg and is 1.88 m tall.John weight 85 kg and is 1.76 m tall.

//SOLUTION:

//Ans 1
//const massMark = 78;
//const massJohn = 92;
//const heightMark = 1.69;
//const heightJohn = 1.95;


//Ans 3
//const massMark = 95;
//const massJohn = 85;
//const heightMark = 1.88;
//const heightJohn = 1.76;

//Ans 2
//const BMIMark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);
//const markBMIHeight = BMIMark > BMIJohn;

//console.log(BMIMark, BMIJohn, markBMIHeight);



//Questions #2, if-else challenge
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it: 

1, Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's" or "John BMI is higher than Mark's!"

2, Use a template literal to include the BMI value is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

*/

//Ans


//const massMark = 78;
//const massJohn = 92;
//const heightMark = 1.69;
//const heightJohn = 1.95;


//Ans 1
//const massMark = 95;
//const massJohn = 85;
//const heightMark = 1.88;
//const heightJohn = 1.76;


//const BMIMark = massMark / heightMark ** 2;
//const BMIJohn = massJohn / (heightJohn * heightJohn);
//console.log(BMIMark, BMIJohn,);

//if (BMIMark > BMIJohn) {
 //   console.log("Mark's BMI is higher than John's");
//} else {
//    console.log("John BMI is higher than Mark's!");
//}


//Ans 2
const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn,);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}

