// JavaScript have main liye two version ECMA-5 ECMA-6 ES-5 have a only var but developers added a let const into ES-6
// var let const

// var
// var function scoped hota hai => var apne parent function mein kahi bhi use ho sakta hai
// var adds itself to the window object

// let
// let const braces scoped hota hai
// let const does't adds in window

// window object
// JS mein kai saare features hai par kuch features jo hum use karte hai wo features wo nahi hai par fir bhi use kar paare hai kyoki wo features
JS language use kar leti hai window se, aur window hai ek box of features given by browzer to use with JS .

// stack
// one container have 4 block store that called stack

// heap memory
// jitne bhi variables ya data hum baanaate hai unhe store kahi to karna padta hai unhe store kahi to karna padta hai uske liye
hota hai heap memory

// Execution context
// Matlab jab bhi hum function chalaayege fnc apna ek khudka ek imaginary container bana lega jismein uski 3 cheeje hogi:
// 1) variables
// 2) functions inside that parent fuc
// 3) lexical enviroment

// lexical enviroment
// hota hai ek chart jisme ye likha hota hai ke aapka particular function ki cheejo ko access kar sakta hai and kinko nahi, matlab ki it holds it's scope and scope chain

// refference values
 let a = [1,2,3,4,5];
 let b = [...a];
// that same works for obj thats return refference value

// truthy  falsy
// js mein kuch bhi likho wo mainly do prakar mein se kisi ek prakaar ko belong karti hai truthy and falsy value
// falsy values ye hai = 0 false undefined null NaN document.all
// truthy value are all

// forEach loop
// forEach loop srif array pe chalta hai matlab ki jab bhi tumhaare paas ek array ho, tab use mein kaun aata hai foreach loop
// forEach does'nt change the value of array its copy a array and modify it

var a = [1,2,3,4,5,];
a.forEach(function(val){
    console.log(val+2)
})

// forIn
// object par loop karne ke liye hota hai forin loop

// var obj = {
    name: bilal,
    age: 19,
    city, karachi
}
for (var key in obj){
    console.log(key, obj[key]);
}

// callback function
// aisa code jo baad me chalta hai use hum ek function dedete hai ke bhaiya job complete hojaana to ye function chala dena,
// aur wo function jo hum dete hai wo ek normal fnc hi hota hai aur kahte hai callback function

setTimeout(function(){
    console.log("3 second ka bath")

}, 3000)

// first class function
// js mein ek concept hai jiska matlab hota hai ki app function ko use kar sakte ho as a value

// function abcd(a){
    a()
}
abcd(fuction(){console.log("hello");})

// delete object prop
// var a = {
    name: "billa",
    age: 19
}
delete a.age;
delete a.name;