/*
conditionals - contional statements control behavior in JavaAscript and determine whether or not pieces of code can run. Conditionals will check if an expression is true. IF the expression is true, a block of code will run.
*/

/*
Falsy Values - considered false.

1) false
2) null
3) undefined
4) 0
5) NaN (not a number)
6) " " (empty string)
*/

/*
Truthy Values - considered true

1) true
2) 42, -42
3) "0"
*/

let snowing = true;
if (snowing == true) {
    console.log("It is snowing outside!");
}

if (snowing) {
    console.log("It is still snowing!");
}
let snowing = false;
if (snowing == false) {
    console.log(`It stopped snowing. Its too warm.`);
}

if (snowing) {
    //false!
    console.log(`It's not snowing. Bummer.`);
}

/*
IF ELSE - If the expression is false, it will run the next block of code.  The else statement specifies a block of code to be executed if the condition is false.
*/

let puppies = 3;
if (puppies < 1){
    console.log('I need more puppies.');
   
}
else{
    console.log('I have enough puppies.');
}

let myName= "Ash";
if (myName=="Sanjay") {
    console.log(`Hello My name is ${myName}`);

}
else{
    console.log(`Hello is your name  ${myName}`);
}
/*
Challenge! 
BRONZE
Write two variables. One will store your name and another will store a friend's name. 
Find out what property you can use to check how long the names are. 
Console log how many letters are in each name.
*/

let name1 = "Ashwathi"
let name2 = "SanjayThek"
console.log(name1 , name2);
console.log("Length of name1:", name1.length);
console.log("Length of name2:", name2.length);
if (name1.length >= name2.length) 
    {console.log(`My name is longer than ${name2}`);
}
else (name1.length <= name2.length)
{console.log(`${name2} My friends name is longer`);}

console.log("My name is longer by", name1.length - name2.length);


/*
SILVER
Expand on what you have already done and write a conditional to see who has 
the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
GOLD
In the console log include how many letters difference there are between the 
names.Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been 
mentioned so far. See if you can add that to your conditional!
*/

