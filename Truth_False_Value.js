
//5 Falsy Values are 0, '', undefined, null, NaN,:  They can only called falsy value when you want to convert them into a Boolean

//Example:
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


 //Examples of Falsy values are
 const money = 100;
 if(money) {
     console.log("Don't spend it all ;");

 } else {
     console.log('You should get a job!');
 }


 let height = 0;
 if (height) {
     console.log('YAY! Height is defined');    
 } else {
     console.log('Height is UNDEFINED');
 }