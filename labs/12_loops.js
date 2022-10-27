/*
! loops
what is the loop doing and what does it need to stop?

different types:

-for
-for-in
-for-of
-while
-do..while
*/

//! for

let i;

//   1       2      3
for(i = 0; i <= 10; i++) {
    console.log(i);
}

/*
1. initial expression
2.condition
3.increment expression

*/

for(let i=0; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 0; i >= -24; i-= 2) {
    console.log(i);
}

let firstName = 'ken';

for(let i = 0; i < firstName.length; i++) {
    console.log(firstName[i]);
}

//let sum=0;
//let nextNum = 1;

//for(nextNum = 0; nextNum <= 50; sum + nextNum) {
    //console.log(sum);
//}
let sum = 0;
for(let i = 1; i <= 50; i++) {
    sum = sum + i;
}

console.log(sum);


//! for in

let student = {
    name: "peter",
    awesome: true,
    degree:'javascript',
    week: 1
}

for(item in student) {
    console.log(item);// name,awesome,degree,week
    console.log(student[item]);// peter, true, javascript,1
}

let catArray = [ 'tabby','british shorthair', 'burmese', 'maine coon', 'rag doll' ];

for(cat in catArray) {
  //  console.log(cat);
   // console.log(catArray[cat]);

}

//! for Of


/*
    Write a program that uses a loop, conditionals, and console.log() to print all the numbers from 1 to 30 inclusive, and follows the rules below:

    For numbers evenly divisible by 3, print "Fizz" instead of the number.

    For numbers evenly divisible by 5, and not 3, print "Buzz" instead of the number.

    For numbers that are evenly divisible by both 3 and 5, print "FizzBuzz" instead of the number, making sure that the program still prints "Fizz" or "Buzz" for numbers divisible by only 3 or 5, and not both.

    For any number that is not divisible by either 3 or 5, print the number itself.

    Hint: Remember to check that numbers divisible by both 3 and 5 print "FizzBuzz", and not just "Fizz" or "Buzz".
    Hint: You may have to reorder the arrangement of conditional checks to ensure the correct result prints for each number.

    Your code should output should start with the following: 
    1
    2
    Fizz
    4
    Buzz
    Fizz
    7
    8
    Fizz
    Buzz
*/

// let f;

// for( f = 0; f <= 30; f++) {
//     if (f / 3 == 0 ) {

//         console.log("Fizz");

//     } else {
//         console.log
//     }

    
// }

//! while

/*
structure:

while(condition) {
    code block...
}
 */

let city = [
    'building', 'building', 'light pole', 'bridge', 'building', 'light pole', 'tree', 'empty street'
];

let structure = city[0];
let pos = 0;

while(structure != ' empty street') {
    console.log(`spider-man swings from the ${structure}.`);
    pos++;
    structure = city[pos];
}
console.log(`spider-man lands in the ${structure}.`);

//! do while

let spidyHP = 20;
let badGuys = [
    {
        baddie: 'green goblin'
    }
]