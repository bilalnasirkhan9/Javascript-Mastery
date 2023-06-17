// <--------------------JavaScript Mastery Lesson No : 31 ------------------------------>
// const for creating array

const $constValueDintChange = 3.42;
// $constValueDintChange = 18; // const din't change
console.log($constValueDintChange);

// heap memory ["Yougurt", "Potato", "Tomoto"];
// Thats have addres like etc when to push new thing thats goes to addres without changing it we put new thing that way its din't show error !

const $homeGrocery = ["Yougurt", "Potato", "Tomoto"];
$homeGrocery.push("Mint");
console.log($homeGrocery);

// <--------------------JavaScript Mastery Lesson No : 32 ------------------------------>

// while loop in array

const $fruitConst = ["apple", "mongo", "grapes"];
const $fruitConst2 = [];
let i = 0;
while (i<$fruitConst.length){
    $fruitConst2.push($fruitConst[i].toUpperCase());
    i++;
}
console.log($fruitConst2);




// <--------------------JavaScript Mastery Lesson No : 33 ------------------------------>

// for of loop in array

const $EletricianTools = ["Wire Stripper", "Screwdriver", "Pliers", "Eletrical Tape"];
const $EletricianToolsBag = [];
for( let $Tools of $EletricianTools){
    $EletricianToolsBag.push($Tools.toUpperCase());
}
console.log($EletricianToolsBag);

// <--------------------JavaScript Mastery Lesson No : 34 ------------------------------>

const $PlumberTools = ["Plunger", "Hacksaw", "Pipe Wrench", "Pipe Cutter"];

for(let index in $PlumberTools){
    console.log($PlumberTools[index].toUpperCase()); // Need to call index in the square bracket because its shows the indexing like 0 to 3 not array.
}

// <--------------------JavaScript Mastery Lesson No : 35 ------------------------------>

// const Destructuring

const destructArray = ["desvalue1", "desvalue2", "desvalue3", "desvalue4"];

// let myconst1 = destructArray[0]; // That is the oldest way to desturcturing 2 array
// let myconst2 = destructArray[1];
// console.log(`value of myconst 1 ${myconst1}`)
// console.log(`value of myconst 2 ${myconst2}`)

// That is the shortcut of desturcuturing

// There is the latest way of it.
let [myconst1, myconst2, ...mynewconst08] = destructArray;
console.log(`value of myconst 1 ${myconst1}`)
console.log(`value of myconst 2 ${myconst2}`)
console.log(mynewconst08);

// <--------------------JavaScript Mastery Lesson No : 36 ------------------------------>

// object
// array are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// how to access data from objects

// how to add key value pair to objects

