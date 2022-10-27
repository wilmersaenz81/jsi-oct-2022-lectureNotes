 /*
 ! Conditionals
    -evaluates an expression and responds if it true.
 -falsy: 
    -false
    -0
    -empty string
    -null
    -undefined
    -NaN
 */
//! If statement

    let isOn = true;

    if (isOn == true) {
        console.log('the light is on');
    };
    /*
    strucuture:
    if(condition evaluated) {  
        code that runs if expression is true
    }
    */

    if(isOn) {
        console.log('its still on!')
    }

    isOn = false;

    if(isOn == false) {
        console.log('the light is off');
    }

    //! If / Else statement

    let weather = 75;

    if(weather<70) {
        console.log('wear a jacket.');
    } else {
        console.log('No need for a jacket');
    } 

    //! And

    let rain = false;

    if (weather > 70 && rain) {
        console.log('wear a jacket');
    } else {
        console.log('No jacket is needed');
    }

    //!Or
    if(weather > 70 || rain) {
    console.log('wear a jacket');
    } else {
        console.log('No jacket is needed.')
    }

    //!Not
    if(!rain) {
        console.log('seems to be clear');
    }

    /*
    bronze:
    write an if else statement that check your name;
    if it is your name, console.log '<name>'
    if the name does not match, console.log 'hello, what is your name?'
    
    silver:
    if it is your name, console.log' hello, my name is <name>'

    gold:
    if it is not your name, console.log 'hello, is your name <name here> ?'

    */

    let nam = "wilmer";

    if (nam =="wilmer" ) {
        console.log(nam);
    } else {
        console.log('What is your name');
    }
    if (nam == "wilmer") {
        console.log('Hello my name is' +'  ' +(nam));
    } else {
        console.log('hello, is your name' +'  '+ (nam));
    }

    //! If Else Statements

    let grade = 88;
        grade = 73;
        grade = 0;    



    if (grade > 75) {
        console.log('passing');
    } else if (grade >= 69) {
          console.log('please see the techer');
    } else {
        console.log('falling');
    }

    //! Switch
    /*
    -break
       this will stop the execution of more code or case testing inside of the code  block.
    
    - default
         there can only be one. 
         specifies some code to run if there are no cases that match.

    */

         let officeCharacter = 'pam';
         officeCharacter = 'Dwight';

         switch(officeCharacter) {
            case "Michael":
                console.log('My mind is going a mile an hour');
                break;
            case 'Dwight':
                console.log('perfectenschlag');
                break;
            case"Jim":
                console.log("Bears. Beets. Battlestar Galactica");
                break;
            default:
                console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);

         }

         /*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/
let dessertMenu = "pie";

switch(dessertMenu){
    case "pie":
        console.log('pie, pie, me oh my!');
        break;
    case "cake":
        console.log('cake is great');
        break;
    case "ic cream":
        console.log('I scream for ice cream!');
        break;
    default:
        console.log('not on the menu');            
}

let num = -11;

switch(true) {
     case (num < 0 && num > -10):
     console.log('cas 1 ran');
     break;
     case (num > 0):
     console.log('case 2 ran');
     break;
     default:
        console.log('did not work');
}

//! Ternaries

let newnum = 6;

// ex:
(newnum > 0) ? console.log('yes') : console.log('no');

// sample if/else

if (newnum > 0) {
    console.log('yes');
} else {
    console.log('no');
}

//else if

if (newnum == 0) {
    console.log('hello');
} else if (newnum < 0 ) {
    console.log('hi');
} else {
    console.log('goodbye');
}


newnum == 0 ? console.log('hello') : newnum < 0 ? console.log('hi')  : console.log('goodbye');

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'

    write a ternary that does the saem thing as the age challenge
*/

let age = 25;

if (age >= 25) {
    console.log('you can rent a car');
} else if (age >= 21){
    console.log('you can drink');
} else if (age >= 18) {
    console.log('you can vote');
} else { 
    console.log('sorry, you are too young to do anything');
}

age >= 25 ?     console.log('you can rent a car') : age >= 21 ? console.log('you can drink') : age >= 18 ?  console.log('you can vote') :     console.log('sorry, you are too young to do anything');




