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

const $userData = {
    name: "Bilal Nasir",
    age: 19,
    hobbies: ["learning code", "Traveling world video", "driving car"]
}
console.log($userData);

// how to access data from objects
console.log($userData.name);
console.log($userData["age"]); // There is another way excutted a using string // By default obj key value is also in string
console.log($userData.hobbies);

// how to add key value pair to objects
$userData["gender"] = "Male"; // Added one more gender key value pair
$userData.City = "Karachi"; // That is the also way to add new key value
console.log($userData);

// <--------------------JavaScript Mastery Lesson No : 37 ------------------------------>

// difference between dot and bracket notaion advantage and diss advantage dot and bracket
const $userEmailData = "Email"
const $personData = {
    name: "Harshit",
    age: 28,
    "person hobbies": ["Guitar", "Sleeping", "Listening"]
}

// console.log(person["person hobbies"]); //
$personData[$userEmailData] = "bilalnasirkhan9@gmail.com"
console.log($personData);

// <--------------------JavaScript Mastery Lesson No : 38 ------------------------------>
// how to iterate object

const $peopleIterateData = {
    "Name": "Subhan",
    "Last Name": "Ali",
    age: 18,

}
// for in loop
// object.keys

for(let $peopleKey in $peopleIterateData){
    console.log(`${$peopleKey} : ${$peopleIterateData[$peopleKey]}`);
}

// <--------------------JavaScript Mastery Lesson No : 39 ------------------------------>

// computed properties

const $key1 = "objectkey1";
const $key2 = "objectkey2";

const valuekey1 = "myvaluekey1";
const valuekey2 = "myvaluekey2";

const $objSubTotal = {
    [$key1]: valuekey1,
    [$key2]: valuekey2,
}
console.log($objSubTotal);

// <--------------------JavaScript Mastery Lesson No : 40 ------------------------------>

// spred operator with array
 const arraypeople1 = [1, 2, 3,];
 const arraypeople2 = [4, 5, 6,];

 const $arraypeoplespreed = [...arraypeople1, ...arraypeople2 , 94, 429,];
 console.log($arraypeoplespreed);

 // spred operator with object

 const peoplemainobj = {
    topkey1: "value No 1",
    topkey2: "value No 2"
 }

 const peoplemainobj2 = {
    topkey3: "value No 3",
    topkey4: "value No 4",
    topkey5: "value No 5"
 }
 const newmainobj = {...peoplemainobj, ...peoplemainobj2};
 console.log(newmainobj);

 const newabcobj = {... "abcdefghijklmnopqurstuvwxyz"};
 console.log(newabcobj);

 // <--------------------JavaScript Mastery Lesson No : 41 ------------------------------>