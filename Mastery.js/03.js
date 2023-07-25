// There is the Starting of Mastering a JavaScript?

// Q:1
// Higher order function : // Aisa function jo accept karle parameter mai ek aur function ya fir wo return karde ek aur function.
// ForEach also a function accept function inside.
// There is the 3 types do this:

// Type 1
function abcd(){
    return function(){}
}
abcd()

// Type 2
function abcd2(){}
abcd2(function(){})

// Type 3
var arr = [1,2,3,4,5];
// arr.forEach(funtion(){});

// Q:2
// Constructor Function : // Normal function jismein this ka istemaal ho and aap function ko call karte waqt new keyword ka use karien.
// Use Case : // jab aapke paas aisa koi bhi mauka ho ke aapko ek jaisi properties waale bohut saare elements banaane hai us waqt aap
// consturctor function use kar sakte ho

// Type 1
class ABCD23 {
    constructor() {
        this.width = 12;
        this.height = 22;
        this.color = "brown";
        this.taste = "sugary";
    }
}

var biscuit1 = new ABCD23();
var biscuit2 = new ABCD23();
var biscuit3 = new ABCD23();

// Type 2
class remote {
    constructor(color) {
        this.radius = 50;
        this.color = color;
        this.icon = false;
        this.pressable = true;
    }
}

var redremote = new remote("red");
var greenremote = new remote("green");

// Q:3
// First Class Functions : // A language is said to have first class functions when the functions in that language are treated as normal values or like variables,
// you can save them, you can pass them as arguments to another function.

// Type 1
setTimeout(function(){}) // How is happening due to first class function.

// Q:4
// New Keyword : // Jab bhi new lagta hai humesha ek blank object apne man mein bana lo

// Type 1
function newfnc(){
    this.age = 12;
}

// make a blank object as sir sayed
// {
//     age: 12,
// };

// Q:5
// Iife : // Immediately invoked function experssion
// Iife hai function to turant chalane ki kala, is tareeka se ki hum log koi private variable bana paaye.

// Type 1
(function(){
    var privateval = 19;

    return{
        getter: function(){
            console.log(privateval);
        },
        setter: function(val){
            privateval = val;
        }
    }

})

// Q:6
// Protype : // [[Prototype]] contain many helper properties and methiods which we can use to complete our task, let's say we create an array and we want
// to know length of it, what do we do, we use .length property on array, did  we created .length on that array, no! but it still contains .length, the
// questoin is how?
// Answer : // Many properties and methods are already available to use built by javascript creators inside prototype of every object.

// Type 00
// No need to pratical

// Q:7
// Prototypal Inheritance : // Thats's exactly what we're going to talk about now, inheritance is basically passing parent's features
// properties to their childrens, to do the same thing javascirpt with the help of prototype ( one extra properties javascript always given by javascript to every
// object ) is call prototypal inheritance,

// Type 1
var human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    haveEmostions: true,
    hasFourLegs: false
}

var sheriyansStudent = {
    canMakeAmazingWebsite: true,
    canMakeOscumAnimations : true,
    canMakeWorldClassAwardedWebsite: true
}

sheriyansStudent.__proto__ = human;


// Q:8
// this call apply bind : // Jab bhi koi cheej { } brackets ke andar nahi hoti toh hum use global kahte hai
// ek function jo object ke andar ho, use method kahte hai
// global value => window
// function value => window
// method => obj
// method value => AS usually sir sayed why
// <=======================================  Important ========================================>
// In any method, "this" keyword always refers to parents object

var obj = {
    baatKaro: function(){
        console.log(this)
    }
}


var a = 12; // This called global scope variable

function abcd(){ // This called unglobal scope variable because of {} this bracket
    var b = 12;
}


// call apply bind => agar tumharrre pass koi function hai and koi abject hai and tumhe fnc chalana hai aur by default jo this ki value
//hai use window naa rakh kar point karwana hai kisi object ki taraf

function abcd4(val1, val2, val3){
    console.log(this)

}
var obj = {
    age: 24,
}

abcd4.call(obj,1,2,3)
abcd4.apply(obj,[1,2,3]) // just apply difference its wants array bracket
var bindedfuc = abcd4.bind(obj); // Need to save a sercular variable
bindedfuc();

// Q:9
// Pure function is any function which has these 2 features :
// 1/ It should always return same output for same input
// 2/ It will never change/update the value to a global variable.

// Type 1  // inpure function
function abd(val){
    return Math.random()*val;

}
var ans1 = abd(2);
var ans2 = abd(2);

// Type 2  // pure function

function fure(a,b){
    console.log(a+b);
}
var an3 = fure(1,2);
var an4 = fure(1,2);