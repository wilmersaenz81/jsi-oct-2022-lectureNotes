/* 
! variables
-var
-let
-const
 when we want a constant variable or a variable that doesn't change
*/

let a = 2;

let b = 1;
//  (1)   (2)  (3)    (4)
// [----5---]     [---6----]
/*
1. JS keyword to denote the creation of a variable
2. Name of the variable. we use this name when we are referencing our variable.
3. the assigment operator.
4. the data value the variable is storing.
5. the variable declation.
6. the variable initialization.
*/

//declaration example

let x;

//initialization example
x = 10;

let ourVariable; //camelCasing
let OurSecondVariable; // pascalcasing
let our_third_variable; //snake_casing
let $_3seconds;

let first = "John";
let last = "Smith";
let full = first + last;

let y;
console.log("declaration: ", y);
y=10;
console.log("initialization 1: ", y);
y=33;
console.log("initialization 2: ", y);


let today = "great";
const javascript = "wonderful";
console.log(today, javascript);

today = 'lovely';
console.log(today, javascript);

// javascript = 'super'; // will cause an error
console.log(today, javascript);

console.log('This message is a string');
let nameInput = "your name goes here";

console.log("log: ", nameInput);

let unusedVariable;
console.warn("This is a warning: ");

let warning = 'Uh Oh';
console.warn("warn: ", warning);


console.error('This is an error message');
let err = "this look real bad";
console.error("error: ", err)

let arr = [1,2,3,4,5,6,7];
console.table(arr);

