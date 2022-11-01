/*
! functions
-block of code that performs a particular task.
-simplified programs that run a task when invoked.
-two types:
  - declarations
  -expressions

  */

/*
 ! functions declarations

 function hi() {
     console.log('HI');

 }

1.keyword
2.name of the function. parenthesis for the parameters.

*/

/*
! function expressions
let hey = function hi() {
     console.log('HI');
}

1. the variable 'hey' is now representative of the function "hi"
 does not get hoisted.
 */

 function hi() {
    // console.log('Hi');
     return 'Hi how are you?';
 }

 hi();
 console.log(hi());

 //* small chalenge

 function counting() {
    for (i=1; i <= 10; i++) {
        console.log(i);
    }
 }

 counting();

 /*
 ! parameters

  function hi(name)  {
     console.log('Hi, ${name}');
  }

 hi ('bruce');

 1. the parameter that the function is accepting or holding.
 2. using string interpolation, we are referring back to our parameter.
 3.where we are defining the value of our parameter (argument)

 */

 function order(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
 }

 order('cheese pizza');
 order('taco');





 function myName(firstName, lastName) {
    let fullName = firstName + '  ' + lastName ;
    console.log(`Hello my name is ${fullName},`);
    console.log(`hello my name is ${firstName} ${lastName}`);
 }

 myName('Bruce', 'Wayne');

 /*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

function tipCalculator(bill){
    let taxPercentage
    let tipPercentage

    taxPercentage = .0625
    tipPercentage = .18

    let total = (bill + (bill * taxPercentage));
    let tip = (total * tipPercentage).toFixed(2);
    console.log(tip);


}
tipCalculator(100);
tipCalculator(85);



/*
! Arrow Functions
   (1)       (2)
 let hi = () => {
   console.log('Hi')
 }

 1-We need to set fat arrow functions within a variable.
 2-we used the 'fat arrow' to signify that is a function.
 
 - introduced with ES6.
 -Consice way to write function expressions NOT declarations

 Can't be be hoisted.

 -consice boody
 -block body

*/

// consice body

let hello = () => console.log('Hi');
hello();

// Bock body
let goodbye = ()  => {
   return 'goodbye';
}

console.log(goodbye());

// Arrow functions parameters

let apples = x => `there are ${x} apples!`;
console.log(apples(10));

let basket = (no, fruit ) => `there are ${no} ${fruit}. `;
console.log(basket(7,'pears'));

let basket2 = (no, fruit) => `there are an ${no % 2 == 0 ? 'even' : 'odd' }
number of ${fruit}.`;
console.log(basket2(4, 'bananas'));
console.log(basket2(3, 'apples'));