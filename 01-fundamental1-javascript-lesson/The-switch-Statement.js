
//What is switch statement is evaluate an expression, matching the expression value to a case clause, and execute statement associates with that case, as well as statements in case that follow the matching case.

//Example of switch statement

const day =  'monday';

switch (day) {
    case 'monday': //day === 'monday'
    console.log('I am learning JavaScript');
    console.log('I want to master Javascript');
    break;

    case 'Tuesday': //day === 'Tuesday'
    console.log('I am enjoying my learning');
    break;

    case 'Wednesday': //day === 'Wednesday'
    console.log('I want to get a good job in jesus name Amen');
    console.log('I receive my job in jesus name');
    break;

    case 'Thursday': //day === 'Thursday'
    console.log('I will start on first of April');
    console.log('By Mbition company');
    break;

    case 'Friday': //day === 'Friday'
    console.log('Thank you Jesus');
    console.log('You love me so much');
    break;

    case 'Saturday': //day === 'Saturday'
    console.log('What a might God that i serve');
    break;

    case 'Sunday': //day === 'Sunday'
    console.log('I am going to enjoy my weekend');
    break;

    default: //Means when the message is n ot correct it will default it
    console.log('Not a valid day!');
}


//Example of Identity Operator === Strict equality

if (day === 'monday') {
    console.log('I am learning JavaScript');
    console.log('I want to master Javascript');
} else if (day === 'tuesday') {
    console.log('I am enjoying my learning');
} else if (day === 'wednesday'  || day === 'thursday') {
    console.log('I want to get a good job in jesus name Amen');
    console.log('I receive my job in jesus name');
} else if (day === 'friday') {
    console.log('Thank you Jesus');
    console.log('You love me so much');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('I am going to enjoy my weekend');
} else  {
    console.log('Not a valid day!');
}
    
