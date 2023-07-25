// <--------------------JavaScript Mastery Lesson No : 1 ------------------------------>

console.log("Hello World")

// <--------------------JavaScript Mastery Lesson No : 2 ------------------------------>

//intro of variblesconsole.log(firstName

// varibles can store some information
// we can use that information later
// we can change that information later

// declare a varible

var firstName = "Bilal Nasir"
var secondName = "Nasir Wasim ul Haq"

// use a varible

console.log(firstName);
console.log(secondName);

// change value

firstName = "Bilal Durani";
console.log(firstName);

// <--------------------JavaScript Mastery Lesson No : 3 ------------------------------>

// rule of naming variables

// you cannont start with number
//  example :-
// 1-value (invalid);
// value-1 (valid);

var value1 = 2;
console.log(value1 + 16);

// you can use only underscor _ or dollor symbol
// example :-
// first_name (valid)
// $firstname (valid)

var $firstName = "Owais"; // Camel case writing
console.log($firstName);

// first$name (valid)
// $first$name (valid)

// you cannot use spaces
var first_name = "harshit"; // snake case writing
// first name (invalid)

// convention
// start with small letter and use camelCase

// <--------------------JavaScript Mastery Lesson No : 4 ------------------------------>

// let keyword
// declare variable with let keyword

var nameOf = "Prime minster";
 nameOf = "Imran Khan";
console.log(nameOf);

// block spave vs function scope (coverd later in this video)

// <--------------------JavaScript Mastery Lesson No : 5 ------------------------------>

// declare constants

const pi = 3.14;
console.log(pi);

// <--------------------JavaScript Mastery Lesson No : 6 ------------------------------>

// String indexing

let firstFather = "Bilal_Durrani";

// B i l a l _ D u r r  a  n i
// 0 1 2 3 4 5 6 7 8 9 10 11 12

// console.log(firstName[0]);
// length of string
// firstFather.length

 let worldBiggerString = "Then_some_body_call_me_billu_I_got_angry" // I Din't count a my string indexing.
 console.log(worldBiggerString[worldBiggerString.length-1])
console.log(firstFather.length);
// last Index : length - 1

// <--------------------JavaScript Mastery Lesson No : 7 ------------------------------>

// trim() // Using to trim extra spaces.
// toUpperCAse() // Change the value to UpperCase.
// toLowerCase() // Change the value to LowerCase.
// slice() // Use for sliceing your exicting string.

let trimUse = "  Mr_spaces   ";
console.log(trimUse.length);
let firstTrim = trimUse.trim(); // Mr_spaces
console.log(firstTrim);
console.log(firstTrim.length);

let mainHeading = "the basic of programing";
console.log(mainHeading.toUpperCase());

let normalParagraph = "PROGRAMING THE KEY OF SUCESSED";
console.log(normalParagraph.toLowerCase());

let sliceUse = "Are you superior or bad man";
console.log(sliceUse.slice(0, 16));
console.log(sliceUse)

// <--------------------JavaScript Mastery Lesson No : 8 ------------------------------>

// typeof operator

// data types
// string "Jokhay"
// number 2, 4, 5, 6,
// booleans
// undfined
// null
// BigInt
// Symbol

let primitiveDataType = 22;
let numberTwo = "Jamal_fraudiya"
console.log(numberTwo)

// convert number to string.

let converterIntoNumberToString = 18;
converterIntoNumberToString = converterIntoNumberToString + "";
console.log(typeof converterIntoNumberToString);

// convert string to number.

let converterIntoStringToNumber = +"34"
console.log(typeof converterIntoStringToNumber);

// There is the another way to convert number & string.

let weight = 18;
let subWeight = "220";
weight = String(weight);
subWeight = Number(weight);
console.log(typeof weight);
console.log(typeof subWeight);

// <--------------------JavaScript Mastery Lesson No : 9 ------------------------------>

// String Concatenation

let $newName = "Bilal";
let $secondName = "Nasir";

let bothName = $newName + " " + $secondName;
console.log(bothName);

// <--------------------JavaScript Mastery Lesson No : 10 ------------------------------>

// Without Template String:-

let $ageData = 18;
let $NameData = "Bilal Nasir";

// let $bothData = " My name is " + $NameData + " and age is " + $ageData; This also work but not looking cool

// With help of Template String :-

let $bothData = ` my name is ${$NameData} and my age is ${$ageData} `;
console.log($bothData);

// <--------------------JavaScript Mastery Lesson No : 11 ------------------------------>

// Undefined
let worksUndifined;
console.log(worksUndifined);

// Null
let worksNull = null;
console.log(typeof worksNull, "  Bug & Error in JS ");
// There is a big bug and error in Javascript write a null its out put is object,

// BigInt That is the 2 types of converting simple number into BigInt

console.log(Number.MAX_SAFE_INTEGER); // There is a Number limit in Javascript that way we use BigInt Data type.
let worksBigInt = BigInt(12);
let worksBigInt2 = 123n;
console.log(worksBigInt + worksBigInt2)

// <--------------------JavaScript Mastery Lesson No : 12 ------------------------------>


let num1 = 5;
let num2 = 8;


// Booleans // Have only two value True & False
console.log(num1>=num2);
console.log(num1<=num2);

// Comparison operator

// == vs ===

let comparisonGame = 10;
let comparisonReflex = "10";

console.log(comparisonGame == comparisonReflex);
console.log(comparisonGame === comparisonReflex); // Then we will put thrid = its calles also checked datatypes.

// != vs !==

let maxNum = 20;
let maxNum2 = "20";
console.log(maxNum != maxNum2);
console.log(maxNum !== maxNum2);

// <--------------------JavaScript Mastery Lesson No : 13 ------------------------------>

// Truthy & Falsy values

// falsy values

// false
// ""
// null
// undefined
// 0

let falsyValue = "";
if(falsyValue){
    console.log(falsyValue);
}
else{
    console.log("Thats all are falsy value")
}

// truthy values

// "abc"
// 1, -1
// All character called truthy values

// <--------------------JavaScript Mastery Lesson No : 14 ------------------------------>

// if else condition
let drivingAge = 18;

if (drivingAge <=10){
    console.log("You are a little kid you dont think about driving");
}

if (drivingAge <=17){
    console.log("You you are a kid you can drive then you age is 18");
}

if (drivingAge <=60){
console.log("you can drive a car")
}

else{
console.log("please enter a valid age");
}
// <--------------------JavaScript Mastery Lesson No : 15 ------------------------------>

// Without Ternary Operator

let $boysAge = 17;
let $drink;

if ($boysAge >=18){
    $drink = "alcohol";
}

else{
    $drink = "milk";
}
console.log($drink);

// With the help of Ternary Operator

let girlsAge = 18;
let formulaBeauty = girlsAge >=18 ? "You can apply a beauty formula" : "You can get skin disease due to beauty formula "

console.log(formulaBeauty);

// <--------------------JavaScript Mastery Lesson No : 16 ------------------------------>

// && and || operators

// && Thats called and and operator must works both condtions
let $genderMale = "Male";
let $genderAge = 18;

if($genderMale[0] === "M" && $genderAge>=18){
    console.log("You can take a pills")
}

else{
    console.log("Inside in else condition")
}

// || Thats called or or operator needs on condition

let $html = "Hyper text markcup language"
let $htmlTimeLine = 0;
if ($html[1] === "y" || $htmlTimeLine >=1){
    console.log("That need only one condtions")
}
else{
    console.log("Din't need a else value because its only one condition true")
}

// <--------------------JavaScript Mastery Lesson No : 17 ------------------------------>

// Nested if else

// Winner number 18

let NestedIfElse = 18;
let NestedGuess = 19;

if (NestedIfElse === NestedGuess){
    console.log("Your guess is write")
}
else{
    if(NestedIfElse > NestedGuess){
        console.log("Your guess is Low!!")
    }else{
        console.log("Your guess is High") /// Thats calles nested if else statement
    }
}



// <--------------------JavaScript Mastery Lesson No : 18 ------------------------------>

// if else-if else statement

let temperature = 0;

if (temperature < 0 ){
    console.log("Extremely cold weather out side");
}else if (temperature < 16){
    console.log("It is cold outside");
}else if (temperature < 25){
    console.log("Wheather is okay");
}else if (temperature < 35){
    console.log("Lets go for swiming");
}else if (temperature < 45){
    console.log("Turn on AC");
}else {
    console.log("Too hot stay home stay safe to heat stock");
}

// <--------------------JavaScript Mastery Lesson No : 19 ------------------------------>

// switch statement

let day = 5;

switch(day){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

// <--------------------JavaScript Mastery Lesson No : 20 ------------------------------>

// while loop

// 0 second 9
// Try don't repeat yourself

let $whileI = 0;
while($whileI<=3){
    console.log($whileI);
    $whileI++;
}
console.log(`Current value of $whileI is ${$whileI}`);

// <--------------------JavaScript Mastery Lesson No : 21 ------------------------------>

// while loop advanced

let $loopAdvanced = 100;
let $totalLoop = 0;

while($totalLoop<=100){
    $totalLoop = $totalLoop + 1
    $totalLoop++;
}
console.log($totalLoop)


// <--------------------JavaScript Mastery Lesson No : 22 ------------------------------>

// intro to for loop
// print 0 to 9

for(let i = 0; i<=2; i++){
    console.log(i)
}

// <--------------------JavaScript Mastery Lesson No : 23 ------------------------------>

// for loop example

let $numberSub = 0;
let $numTotal = 5;

for (let ivalue = 1; ivalue<=$numTotal; ivalue++){
    $numberSub = $numberSub + ivalue;
}
console.log($numberSub)

// <--------------------JavaScript Mastery Lesson No : 24 ------------------------------>

// break keywork

// continue keyword

for(let $break = 1; $break<=5; $break++){  // The value is true to its break a loop
    if($break===3){
        break;

    }
    console.log($break);
}

for(let $continue = 1; $continue<=5; $continue++){
    if($continue===4){
        continue;
    }
    console.log($continue);
}

// <--------------------JavaScript Mastery Lesson No : 25 ------------------------------>

// do while loop

let whileDo = 10;
do{
    console.log(whileDo);
    whileDo++;
}while(whileDo<=9);

console.log(`value of whileDo is ${whileDo}`);

// <--------------------JavaScript Mastery Lesson No : 26 ------------------------------>

// intro to arrays
// array calles reference types

// how to create arrays

let arrayFruit = ["apple", "bannan", "grapes", "orange", "mango"];
arrayFruit[0] = "Watermelon"
console.log(arrayFruit[0])
console.log(typeof arrayFruit); // Its shows you object
console.log(Array.isArray(arrayFruit), "That is array thats why written true"); // that way have specify way to known its array or not.

// arrays indexing

// <--------------------JavaScript Mastery Lesson No : 27 ------------------------------>

// array push pop
let $pushfruits = ["Grape", "Watermelon", "Egg"];
$pushfruits.push("Bread");
console.log($pushfruits);
// array shift unshift

$pushfruits.shift([0]);// When we use same thing like pop() its remove last string.

console.log($pushfruits);
// unshift // helps for add a string in the starting
// pop()  // helps for pop it the last string in the array

// <--------------------JavaScript Mastery Lesson No : 28 ------------------------------>

// primitive data type & reference type
console.log("That is primitive data types");
let $ptNum1 = 18;
let $ptNum2 = null;
$ptNum2 = $ptNum1
console.log(`value is ptNum1 is ${$ptNum1}`);
console.log(`value is ptNum2 is ${$ptNum2}`);
$ptNum1++;
console.log(" after value ++ num1 & num2 have different value due to primitive data types" );
console.log(`value is ptNum1 is ${$ptNum1}`);
console.log(`value is ptNum2 is ${$ptNum2}`);

console.log("That is reference data types");

let $arrayNum1 = [" items1", " items2 " ];
let $arrayNum2 = $arrayNum1;
console.log(`Array1 value ${$arrayNum1}`);
console.log(`Array2 value ${$arrayNum2}`);
$arrayNum1.push("items3"); // when we trying to push new one its also work both of them.
console.log("After pushing element to array 1 ")
console.log(`Array1 value ${$arrayNum1}`);
console.log(`Array2 value ${$arrayNum2}`);

// <--------------------JavaScript Mastery Lesson No : 29 ------------------------------>

// how to clone a array

// how to concatenate two arrays

let $arrayCon1 = [" Ali", "Khan", "Nasir "];
// let $arrayCon2 = [" Ali", "Khan", "Nasir "];
// let $arrayCon2 = $arrayCon1.slice(0);
// let $arrayCon2 = [].concat($arrayCon1);
// New way
// spread operator

let $arrayCon2 = [...$arrayCon1, "items4", "items5"];
$arrayCon1.push("Wasim ul haq");

console.log($arrayCon1===$arrayCon2);
console.log($arrayCon1);
console.log($arrayCon2);

// <--------------------JavaScript Mastery Lesson No : 30 ------------------------------>

// for loop in array
let $fruitsList = ["Mongo", "Apple", "Grapes", "Banana"];

console.log($fruitsList.length);
console.log($fruitsList[$fruitsList.length-2]);

let $fruitsList2 = [];
for(let list2 = 0; list2< $fruitsList.length; list2++){
    $fruitsList2.push($fruitsList[list2].toLocaleUpperCase());
}

console.log($fruitsList2)

