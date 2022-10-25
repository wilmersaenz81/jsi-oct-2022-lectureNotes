/*
! How do we use variables?

 -refernce, change, and include with other variables.
 -used with:
     -functions
     -expressions
     -operators
     -staments

*/

// Booleans

let on = true;
console.log(on);

let off = false;
console.log(off);

// Null & Undefined

/* 
- Null is like a container with nothing in it.
-undefined is when a variable has bee set, or has not been created yet.
*/
let empty = null;
console.log(empty);

let undef = undefined;
// instead of assigning our undef variable a data type of undefined, we can symply just declare the variable as such.
console.log(undef);

let correctWay; // write like this for undefined.
console.log(correctWay);


// Numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9s
console.log(precise);

let rounded = 9999999999999999; //16 9s
console.log(rounded);// JS gives space for 15 9s before rounding.

let notQuite = 0.2 + 0.1;
console.log(notQuite); // automatically rounding.

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let makeANumber = Number('123');
console.log(makeANumber);
console.log(typeof makeANumber);


// Strins

let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `back tics`;

console.log(stringOne, stringTwo, stringThree);

// numbers vs strings

let exOne = 1234 + 567;
let exTwo = '1234' + '567';
let sampleSent = "Hello" + " " + "people.";

console.log(exOne);
console.log(exTwo);
console.log(sampleSent);

console.log(typeof exOne);
console.log(typeof exTwo);

//objects
let frodo = {
     race: 'hobbit',
     //key : value,
    // rings: 1,
     cloak: true
}

console.log(frodo);
console.log(typeof frodo);

// arrays

let list = [ 'item 1', 'item 2', 'item 3'];
//   (1)  (2)             (3)
/*

1.name of array or list
2.the array is within the square brackets
3.each item regardless of data type is separate by a coma.

*/

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);
//clasified as objects because it can hold multiple data types.


// literals

let car ='ford';
let december = 12;
let tired = true;
let soup = {
    a:'chicken noodle',
    b:'tomato',
    c:'beef and barley'
}

console.log(soup);
console.log(soup.b);
console.log(frodo.race);

let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
console.log(days.toString());
console.log(days.length);

// special values
let inf = 5/0;
let notANumber = "string" * 317;

console.log(inf);
console.log(notANumber);





