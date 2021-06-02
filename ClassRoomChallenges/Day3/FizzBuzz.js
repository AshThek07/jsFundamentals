FIZZ BUZZ (Conditionals Only)
**************************/

/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/
// && operator allows us to compare two or more expressions
let FB = 15;
if(FB % 3 === 0 && FB % 5 === 0){
    console.log(FB,"Fizz Buzz")
} else if (FB % 5 === 0){
    console.log(FB,"Buzz");
    } else if (FB % 3 ===0){
        console.log(FB,"Fizz");
    }else{
console.log("your number is not divisible by 3 or 5.");
    }

    //switch

let FB = 30;
switch(true){
    case (FB % 3 === 0 && FB % 5 === 0):
      console.log(FB,"Fizz Buzz");
      break;

case (FB % 5 === 0):
    console.log(FB,"Buzz");
      break;

case (FB % 3 === 0):
console.log("Fizz");
      break;
default:
    console.log("your number is not divisible by 3 or 5.");
}

let FB = 30;
FB % 3 === 0 && FB % 5 === 0 ? console.log("Fizz Buzz"):
FB % 5 ===0 ? console.log("Buzz") :
FB % 3 === 0 ? console.log("Fizz"):
    
        