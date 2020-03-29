//VARIABLES//
const myName = "Jorge"
let myAge = 30

const herName = "Pamela"
let herAge = 29
herAge = 30

console.log(myName)
console.log(myAge)
console.log(herName)
console.log(herAge)

//Variables Names
const camelCase = "myVar" //This is the one that we use as ¡convention

let five5 = 7

console.group(camelCase)
console.log(five5)

//This code is invisible for JS

console.log('HERE STARTS ARITHMETIC EXAMPLES')

const number1 = 7

const number2 = 21

let result
    //SUM
result = number1 + number2
console.log(result)

//SUBTRACTION
result = number1 - number2
console.log(result)

//DIVISION
result = number1 / number2
console.log(result)

//MULTIPLICATION
result = number1 * number2
console.log(result)

//EXPONENTIAL
result = number1 ** number2
console.log(result)

//STRINGS
const string1 = "Hi"
const string2 = "Pamela"

result = string1
console.log(result)

result = string2
console.log(result)

result = string1 + string2
console.log(result)

//MODULE
const number = 20

console.log(number % 2)
console.log(number % 3)
console.log(number % 5)
console.log(number % 7)

//Lets check if a number is even or divisible by 2

let newNumber = 18
console.log(newNumber % 2)

let newNumber2 = 18
console.log(newNumber2 % 2)

//INCREMENT

let numberIncrease = 10
numberIncrease++
console.log(numberIncrease)

//DECREMENT

let numberDecrease = 21
numberDecrease--
console.log(numberDecrease)

// OTHER EXAMPLES

numberIncrease += 2
console.log(numberIncrease)

numberDecrease -= 2
console.log(numberDecrease)

//EQUAL SIGN

let name1 = "Jorge"
let name2 = "Pamela"

name1 = name2
console.log(name2)

name1 == name2
console.log(name2)

console.log('HERE STARTS LOGICAL EXAMPLES')

//LOGICAL OPERATORS

const var1 = 1
const var2 = 2
const var3 = "1"

let result2
result2 = var1 == var2 // == compares the value not the type of value
console.log(result2)

result2 = var1 == var3 // == compares the value not the type of value
console.log(result2)

//STRICT COMPARISON
result2 = var1 === var2 // === compares value and type of value
console.log(result2)

result2 = var1 === var3 // === compares value and type of value
console.log(result2)

//NOT OPERATOR

console.log('HERE STARTS NOT OPERATOR COMPARISON')

result2 = var1 != var2
console.log(result2)

result2 = var1 != var3
console.log(result2)

console.log('HERE STARTS NOT OPERATOR STRICT COMPARISON')

result2 = var1 !== var2
console.log(result2)

result2 = var1 !== var3
console.log(result2)

//LETS CHECK HOW THE OPERATOR WORKS

const boolean = true
console.log(!boolean)

console.log(!!boolean)
console.log(!!!boolean)
console.log(!!!!boolean)
console.log(!!!!!boolean)

console.log('HERE STARTS MATH COMPARISON')

//MATH COMPARISON

//GREATER THAN

result = number1 > number2
console.log(result)

result = number2 > number1
console.log(result)

//GREATER OR EQUAL THAN

result = number1 >= number2
console.log(result)

result = number2 >= number1
console.log(result)

//LOWER THAN

result = number1 < number2
console.log(result)

result = number2 < number1
console.log(result)

//LOWER OR EQUAL THAN

result = number1 <= number2
console.log(result)

result = number2 <= number1
console.log(result)

console.log('HERE STARTS AND & OR OPERATORS')

const number3 = 8
const number4 = 7
const number5 = 21

// AND OPERATOR

result = number3 < number4 && number5 > number4
console.log(result)

result = number3 > number4 && number5 < number4
console.log(result)

// OR OPERATOR

result = number3 < number4 || number5 > number4
console.log(result)

result = number3 > number4 || number5 < number4
console.log(result)

console.log('PLAYING WITH BOOLEANS')

const trueVal = true
const falseVal = false

console.log(trueVal && trueVal) //true
console.log(trueVal && falseVal) //false
console.log(falseVal && trueVal) //false
console.log(falseVal && falseVal) //false

console.log(trueVal || trueVal) //true
console.log(trueVal || falseVal) //true
console.log(falseVal || trueVal) //true
console.log(falseVal || falseVal) //false

console.log('THIS IS THE FIRST SET OF EXERCISES')

// Create two variables, one with your name and one with your age.

const meinName = "Jorge"
let meinAlter = 30

// Create a variable called message that holds the following string “Hello [your name]! You are [your age] years old”.

const message = "Hello " + meinName + "! You are " + meinAlter + " years old."

// Console log message
console.log(message)

// Create two new variables, one should be equal to your age times 2 and the other one equal to your age to the power of three. Console log both variables.

const myAgeTimesTwo = meinAlter * 2
const myAgeToThePowerOfThree = meinAlter ** 3

console.log("My Age Times Two is:", myAgeTimesTwo)
console.log("My Age to the Power of Three is:", myAgeToThePowerOfThree)

// Do a modulus operation that will let you understand if your age, age times 2 and age to the power of three are even numbers.

let answer
answer = meinAlter % 2
console.log(answer) //answer === 0 means that my age is even; result !==0 means that my age is odd
answer = myAgeTimesTwo % 2
console.log(answer)
answer = myAgeToThePowerOfThree % 2
console.log(answer)

// Think if the following are true or false and then test them.
// true && true && false -->FALSE
// false && true && true --> FALSE
// true && (true || false) --> TRUE
// (true || true)  || false --> TRUE
// (false || (true || false))&&(true || (true && (false || true))) --> TRUE

console.log(true && true && false)
console.log(false && true && true)
console.log(true && (true || false))
console.log((true || true) || false)
console.log((false || (true || false)) && (true || (true && (false || true))))

//VARIABLES
// Can be created with CONST or LET
//CONST is if the variable value does not change, it remains constant
//LET is if we want to change the value of the variable

//MATH
//SUM --> +
//SUBTRACT --> -
//DIVIDE --> /
//MULTIPLY --> *
//EXPONENTIAL --> **
//MODULUS --> % (we can use this to check even and uneven numbers)
//INCREMENTAL (++) DECREMENTAL(--)


//LOGIC
// "=" --> ASSIGNMENT
// "==" --> SIMPLE COMPARISON
// "===" --> STRICT COMPARISON
// "!" --> CHANGES THE COMPARISON --> != !==
//"> < >= <="

//CONDITIONALS
/*
if(CONDITION){
  CODE EXECUTED IF CONDITION IS TRUE
}else{
  CODE EXECUTED IF CONDITION IS FALSE
}
*/

console.log('****HERE STARTS IF ELSE CONDITIONS****')

const trueBoolean = true
const falseBoolean = false

if (trueBoolean) {
    console.log("Condition is true")
} else {
    console.log("Condition is false")
}

if (falseBoolean) {
    console.log("Condition is true")
} else {
    console.log("Condition is false")
}

if (number1 === number2) {
    console.log("Numbers are the same")
} else {
    console.log("Numbers are different")
}

let result3
if (number1 == string1) {
    result3 = number1 + string1
    console.log(result3)
} else {
    console.log("Numbers can not be summed")
}

console.log('*****IF ELSE IF ELSE WITH LOGICAL COMPARISON****')

let difference

if (number1 >= number2) {
    difference = number1 - number2
    console.log("The difference between numbers is: ", difference)
} else {
    difference = number2 - number1
    console.log("The difference between numbers is: ", difference)
}

if (number1 > number2) {
    difference = number1 - number2
    console.log("The difference between numbers is: ", difference)
} else if (number2 > number1) {
    difference = number2 - number1
    console.log("The difference between numbers is: ", difference)
} else {
    console.log("Numbers are the same")
}

console.log('*****EXAMPLE****')

const number7 = 7
const number8 = 13
const number9 = 21

if (number8 > number7) {
    console.log("Number2 is bigger")
} else if (number8 > number7 && number8 < number9) {
    console.log("Number 2 is in the middle")
} else {
    console.log("Hello World")
}

if (number8 > number7 && number8 < number9) {
    console.log("Number 2 is in the middle")
} else if (number8 > number7) {
    console.log("Number 2 is bigger")
} else {
    console.log("Hello world")
}

if (number9 > number8) {
    console.log("You are right!")
} else {
    console.log("Fuck you!")
}

console.log("****WE ARE GOING TO TRY IF ELSE USING DAYS OF THE WEEK****")

//DAYS OF THE WEEK
// 1 --> Monday
// 2 --> Tuesday
// 3 --> Wednesday
// 4 --> Thursday
// 5 --> Friday
// 6 --> Saturday
// 7 --> Sunday

const day = 1

if (day === 1) {
    console.log("Monday")
} else if (day === 2) {
    console.log("Tuesday")
} else if (day === 3) {
    console.log("Wednesday")
} else if (day === 4) {
    console.log("Thursday")
} else if (day === 5) {
    console.log("Friday 🍻")
} else if (day === 6) {
    console.log("Saturday")
} else if (day === 7) {
    console.log("Sunday")
} else {
    console.log("That is not a valid day.")
}

console.log("****USING A SWITCH STATEMENT****")
switch (day) {
    case 1: //day === 1
        console.log("Monday")
        break;
    case 2: //day === 2
        console.log("Tuesday")
        break;
    case 3: //day --- 3
        console.log("Wednesday")
        break;
    case 4: //day === 4
        console.log("Thursday")
        break;
    case 5: // day === 5
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("That is not a valid day")
        break;
}

console.log("****Using advance LOGIC in JS****")

const newNumber3 = 3
const newNumber4 = 10
const newNumber5 = 5

if (!(newNumber3 < newNumber4 || newNumber5 > newNumber4)) {
    console.log("Hey there!")
} else {
    console.log("Uuu, that is advanced logic!")
}

if (newNumber3 % 2 === 0) {
    console.log("newNumber3 is an even number")
} else {
    console.log("newNumber3 is an odd number")
}

if (newNumber4 % 2 !== 0) {
    console.log("newNumber4 is an odd number")
} else {
    console.log("newNumber4 is an even number")
}

console.log("****EXERCISE 2****")

//**************************************//
//CONDITIONALS//
//**************************************//

// Copy this: const inputAge = prompt(“What’s your age?”).
// If the age is greater than 50, then console.log(“age is just a number!”). Else, console.log(“You young and beautiful person!”)

inputAge = 30

if (inputAge > 50) {
    console.log("Age is just a number!")
} else {
    console.log("You are young and a beautiful person")
}

// Let’s be more detailed: now if the age is smaller than 50 but greater or equal to 20, then console.log(“You’re not in your teens anymore!”). If the age is smaller than 20 console.log(“You young and beautiful person!”).

if (inputAge > 50) {
    console.log("Age is just a number!")
} else if (inputAge < 50 && inputAge >= 20) {
    console.log("You are not very young anymore")
} else {
    console.log("You young and beautiful person")
}

// Create a variable with a language (“spanish”, “portuguese”, “english”, “italian”). Now improve the “hello world” to change depending on the chosen language.

const language = "deutsche"

switch (language) {
    case "spanish":
        console.log("Hola Mundo!")
        break;
    case "portuguese":
        console.log("Olá Mundo!")
        break;
    case "italian":
        console.log("Ciao Mondo!")
        break;
    case "english":
        console.log("Hello World")
        break;
    default:
        console.log("Hallo Welt")
        break;
}

// Create a variable with a number. Afterwards, if the number is even, console.log(“that is a even number”); if that is not the case, then console.log(“that is not an even number”).

const number_1 = 11
if (number_1 % 2 === 0) {
    console.log("That is an even number")
} else {
    console.log("That is an odd number")
}

// Create a variable with a number greater than 50. Afterwards, check if the number is divisible by 3, by 7 and by (3 & 7) and console.log the result in each case.

const anotherNumber = 63

if (anotherNumber % 7 === 0) {
    console.log("Number is divisible by 7")
} else if (anotherNumber % 3 === 0) {
    console.log("Number is divisible by 3")
} else if (anotherNumber % 3 === 0 && anotherNumber % 7 === 0) {
    console.log("Number is divisible by 7 and 3")
}

if (anotherNumber % 3 === 0 && anotherNumber % 7 === 0) {
    console.log("Number is divisible by 7 and 3")
} else if (anotherNumber % 3 === 0) {
    console.log("Number is divisible by 3")
} else if (anotherNumber % 7 === 0) {
    console.log("Number is divisible by 7")
}

console.log("****HERE WE USE LOOPS IN JS****")

//LOOPS//

let i = 0
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)

console.log("THIS IS A LARGE LOOP COUNTING NUMBERS WITH A FOR")

//FOR LOOP//

//for(starter, condition, increment){
// CODE TO BE RUN FROM STARTER UNTIL CONDITION, INCREMENTED WITH INCREMENT
//}

for (let i = 0; i <= 100; i++) {
    console.log(i)
}
console.log("THIS IS A LARGE LOOP COUNTING NUMBERS WITH a WHILE")

let count = 0
while (count <= 100) {
    console.log(count)
    count++
}

console.log("THIS IS A LARGE LOOP COUNTING NUMBERS FROM 5 TO 5 WITH A FOR")

for (let i = 0; i <= 100; i += 5) {
    console.log(i)
}

console.log("THIS IS A LARGE LOOP COUNTING NUMBERS FROM 5 TO 5 WITH A WHILE")

let count1 = 0
while (count1 <= 100) {
    console.log(count1)
    count1 += 5
}

console.log("THIS IS A LARGE LOOP DECREMENT NUMBERS WITH A FOR")

for (let i = 100; i >= 0; i--) {
    console.log(i)
}

console.log("THIS IS A LARGE LOOP DECREMENT NUMBERS WITH A WHILE")

let count2 = 100
while (count2 >= 0) {
    console.log(count2)
    count2--
}

console.log("THIS IS A LOOP WITH A FOR PRINTING FIVE & TEN")

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("FIVE")
    } else if (i === 10) {
        console.log("TEN")
    } else {
        console.log(i)
    }
}

console.log("THIS IS A LOOP WITH A WHILE PRINTING FIVE & TEN")

let counter = 0

while (counter <= 10) {
    switch (counter) {
        case 5:
            console.log("FIVE")
            break;
        case 10:
            console.log("TEN")
            break;
        default:
            console.log(counter)
            break
    }
    counter++
}

console.log("EXERCISE 3")
    //**************************************//
    //LOOPS//
    //**************************************//

// Print all the numbers from 1 to 250 to the console. Do it with a for loop and with a while loop.
/*
//for loop
for (let i = 1; i <= 250; i++) {
    console.log(i)
}
//while loop
let n_counter = 1
while (n_counter <= 250) {
    console.log(n_counter)
    counter++
}


// For all the numbers between 30 and 50, print in the console only those that are even.

for (let i = 30; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// While the number is smaller than 20, if the number is even print in the console “this number is even”; if not, print in the console “this number is odd".

let counter_n = 0
while (counter_n < 20) {
    if (counter_n % 2 !== 0) {
        console.log("Number is odd")
    } else {
        console.log("Number is even")
    }
    counter_n++
}

// Print all the numbers from 73 to -5 to the console.
for (let i = 73; i >= -5; i--) {
    console.log(i)
}
*/


// Print all the numbers from 25 to -25 to the console. 
//If the number is greater than 0, print in the console the number;
//If the number is smaller than zero, print to the console“ negative number”.
//If the number is zero, print to the console“ ** Z E R O - 0 ** )

for (let i = 25; i >= -25; i--) {
    if (i > 0) {
        console.log(i)
    } else if (i < 0) {
        console.log("Negative number")
    } else {
        console.log("**Z E R O - 0**")
    }
}

/*
let counter = 73

while(counter >= -5){
  console.log(counter)
  counter --
}
*/

//======================================= DAY 3 ==================================================

//VARIABLES
//Can be declared with Let and with Const
//Let --> Variables value change
//Const --> Variables value remain constant

//MATH
// + --> Sum
// - --> Subtract
// / --> Division
// * --> Multiplication
// ** --> Exponential
// % --> Modules (Check if a value is divisible by another, or check if a number is even/odd)
//Incremental (++) and Decremental (--)

//LOGIC
// = --> In javascript does not mean comparison, it means assignment
// == --> Basic Comparison (only value, not type)
// === --> Strict Comparison
// ! --> Not Operator (!= or !==)
// >, <, >=, <=
//&& operations
// || operations

//CONDITIONALS

//IF
/*
if(CONDITION){
  //THIS CODE WILL RUN IF CONDITION IS TRUE
} else if(CONDITION 2){
  //THIS CODE WILL RUN IF CONDITION 2 IS TRUE
}else{
  RUNS WHEN ALL PREVIOUS CONDITIONS ARE FALSE
}
*/
//SWITCH CASE
/*
switch(VARIABLE){
  CASE A:
  //code will run if variable matches condition A
  break;
  CASE B:
  //code will run if variable matches condition B
  break;
  default:
  //code will run if no case was matched
  break;
}
*/

//LOOPS
//FOR LOOPS
/*
for(counter (i); condition; increment){
  //code that runs until I meats condition after being incremented by increment
}
*/

//WHILE LOOPS
/*
let counter
while(CONDITION){
  this code will run while the condition is true
}
*/

console.log("****Here starts Function Declaration ****")

//FUNCTION DECLARATION

function helloWorld() {
    console.log("Hello World")
}

helloWorld()

console.log("****Here starts Function Expression ****")

//FUNCTION EXPRESSION

const helloWorld2 = function() {
    console.log("Hello World 2")
}

helloWorld2()

console.log("**** Call out a function instead of writing every time what we want ****")

console.log("Hello Paula")

const name = "Paula"
console.log("Hello", name)

const name3 = "Santiago"
console.log("Hello", name3)

const name4 = "Carmen"
console.log("Hello", name4)


const sayHello = function(name) {
    console.log("Hello", name)
}

sayHello("Alma")
sayHello("Pamela")
sayHello("Jorge")
sayHello("Luis")
sayHello("Pita")
sayHello("Henry")
sayHello("Grace")
sayHello("Colmillo")
sayHello("Ferry")
sayHello("Joey")
sayHello("Rebeca")
sayHello("Monique")
sayHello("Fernado")

console.log("**** Using a LOOP ****")

for (let i = 0; i < 2; i++) {
    sayHello("Pita")
}

for (let i = 0; i < 3; i++) {
    sayHello("Pamela")
}


console.log("**** Using a FUNCTION EXPRESSION ****")

const sayHello2 = function(name, amountOfTimes) {
    for (let i = 0; i < amountOfTimes; i++) {
        console.log("Hello", name)
    }
}

sayHello2("Pamela", 5)


const sayLove = function(name) {
    console.log("Hallo Liebe", name)
}

const loveDeclaration = function(name, amountOfTimes) {
    for (let i = 0; i < amountOfTimes; i++) {
        sayLove(name)
    }
}

loveDeclaration("Pamela", 7)

console.log("**** Another example of FUNCTIONS****")

const sum = function(number1, number2) {
    const result = number1 + number2
    return result
}

const sumResult = sum(10, 98)
console.log(sumResult)

const test = true
console.log(typeof test)


console.log("================ EXERCISE 4 ===================")

// Create a function that prints all the numbers from 1 to a number that is the function parameter, to the console.

const printer = function(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i)
    }
}

// Run this function for 5 different numbers.
console.log("================ Example 1 ===================")
printer(5)
console.log("================ Example 2 ===================")
printer(29)
console.log("================ Example 3 ===================")
printer(1)
console.log("================ Example 4 ===================")
printer(20)
console.log("================ Example 5 ===================")
printer(97)

// Print all the numbers from an input number to another input number to the console. 
//If the number is greater than a third input number, print in the console the number; 
//If the number is smaller than that number, print to the console “smaller number”. 
//If the number is that number, print to the console [THE NUMBER].

const printerComplex = function(number1, number2, number3) {
    for (let i = number1; i <= number2; i++) {
        if (i < number3) {
            console.log("smaller number")
        } else if (i > number3) {
            console.log(i)
        } else {
            console.log(number3)
        }
    }
}
console.log("================ Example 6 ===================")
printerComplex(1, 20, 7)

console.log("================ Example 7 ===================")
printerComplex(-10, 10, 0)

// Create a function that has three arguments: once is a number, the second is a number, and the third is a math operation (“sum”, “subtract”, “multiply”, “divide”,”exponential”,”modulus”). 
//Save whatever result is returned from the function and then console.log a message that says “Your result is [RESULT]”

const addition = function(number1, number2) {
    return number1 + number2
}

const calculator = function(number1, number2, operation) {
    switch (operation) {
        case 'sum':
            return addition(number1, number2)
            break;
        case 'subtract':
            return number1 - number2
            break;
        case 'multiply':
            return number1 * number2
            break;
        case 'divide':
            return number1 / number2
            break;
        case 'exponential':
            return number1 ** number2
            break;
        default:
            alert("Not a valid operation");
            break;
    }
}

const answers = calculator(12, 2, "multiply")

console.log("================ Example 8 ===================")
console.log("The answer is:", answers)