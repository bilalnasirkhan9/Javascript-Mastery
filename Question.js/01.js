 // Q1 - Given a string, reverse each word in the sentence?

var reverse = "Dil Dil Pakistan";
var str = reverse.split(" ").map(function(word){
    return word.split("").reverse().join("")
})

console.log(str.join(" "));

var NameSecond = "lalib";
var str2 = NameSecond.split(" ").map(function(word2){
    return word2.split("").reverse().join("")
})

console.log(str2.join(" "));

 // Q2 - How to check if an object is an array or not? Provide some code?

 function checkArray(elem){
    return Array.isArray(elem);
 }

console.log(checkArray([]));
console.log(checkArray({}));

 // Q3 - How to empty an array in Javascript?
 // Do not reset it to a new array, and do not loop through to pop each value

 var arr = [1,2,3,4,5,6];
arr.length = 0
console.log(arr);

// Q4 - How would you check if a number is an integer?

var integer = 12;
if (integer % 1 === 0){
    console.log("Integer");
}
else{
    console.log("Not !")
}

// Q5 - make this work :
// duplicate([1,2,3,4,5]);  [1,2,3,4,5]

function duplicate(arr){
 return arr.concat(arr);
}
console.log(duplicate([1,2,3,4,5]));

// Q6 - Write a JavaScript function that reverse a number?

function reverseKaro(num){
   return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseKaro(12))

// Q7 - Write a JavaScript function that checks whether a passed string is palindrome or not?

function stringPalChecker(str){
    var reversed = str.split("").reverse().join("");
    return reversed === str;
}

console.log(stringPalChecker("poop"));
console.log(stringPalChecker("loop"));