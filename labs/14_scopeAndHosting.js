//! Scope

let x = 12;

function scope() {
    let x = 33;
    console.log(x);// returns global variable 'x'
}
scope();
console.log(x); // returns global variable 'x'

let y = 10;

function scope2(){
    y = 20;
    console.log(y);

}

scope2();
console.log(y);

/*
Variable keyword:
  -const: cannot be reassigned.
  -var: Scooped to nearest function block.
  -let: Scooped to the nearist enclosing block.
*/

//* Var

var a = 12;

function varTest() {
    var a = 33;

    if(true) {
        var a = 45;
        console.log(`var - wittin if: ${a}`);
    }
    console.log(`var - outside if: ${a}`);
}

varTest();
console.log(`var - outside function: ${a} `);

// let

let b = 12;

function letTest() {
    let b = 33;
    if(true) {
        let b = 45;
        console.log(`let - within if: ${b}`);
    }
    console.log(`let - within function: ${b}`);
}

letTest();
console.log(`let - outside function: ${b}`);

/*
! hoisting

   -JS reads from top to bottom in 2 passes 
     - 1st pass:
           -made by the compiler. this is where hoisting is initiated.
            -compiled for execution.
            -2nd pass:
               -variables are assigned.
               -executes any hoisted code 
*/
//console.log(newName); // error - value isn't assigned until the second pass

let newName = 'everly'; //value doesn't get hoisted

hoistedFunction();// doesn't break because function has benn hoisted to the top.

function hoistedFunction() {
    console.log(' I have been hoisted!');
}

//notHoisted();

let notHoisted = function() => {
    console.log('not hoisted');
}