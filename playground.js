//////////////////////////////
//HOW SCOPING WORKS
//////////////////////////////

// var x = 1;
// //console.log('y = ' + y);
// //error: y is not defined, shows that if we don't use var it doesn't get hoisted.
// y = x + 2;
// console.log('y = ' + y);
// // y = 3

// var z = 0;




// var myFunc = () => {
//     console.log('z = ' + z);
//     // z = undefined, due to hoisting in the scope of this function.
//     console.log('x = ' + x);
//     // x = 1, finds the parent x because x lower in this scope isn't set with var but rather changes the value of the global x.
//     y = y + 3 + x;
//     console.log('y = ' + y);
//     //y = 7, this is due to y = 3 above and x = 1
//     x = 5;
//     var z = 10
// }

// myFunc();

// console.log("y = " +y);
// // y = 7
// console.log('x = ' +x);
// // x = 5
// console.log('z = ' + z);
// // z = 0


// console.log(x[0])

//////////////////////////////
//LEXICAL
//////////////////////////////

// let boo;

// if(boo){
//     console.log("boo is true")
// } else { console.log("boo is false") }
// //logs "boo is false"

// let foo = " ";
// //NaN doesn't equal anything if using == or ===
// //Null, undfined, 0, "", NaN are all false

// if(foo){
//     console.log("foo is true")
// } else { console.log("foo is false") }
// //logs "foo is true"

//////////////////////////////
//PARENTHESES QUESTION
//////////////////////////////

// function findPar(str) {
//     let penalty = 0, braces = 0;

//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === '(') {
//             braces ++;
//         } else if(str[i] === ')') {
//             braces --;
//         } if( braces < 0){
//             penalty ++;
//             braces ++;
//         }
//     }
//     return(penalty + braces)
// }

// let ans = findPar("((((())()()")

// console.log(ans)


// let str1 = "((()))", str2 = "(", str3 = "())", str4 ="))((", str5=")()"

// function parFinder(str) {
//     let count = 0;
//     let penalty = 0;

//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === "("){
//             count ++
//         } else if (str[i] === ")") {
//             count --
//         } if(count < 0){
//             penalty++;
//             count++;
//         }
//     }
//     console.log(penalty + count);
// }






// function parFinder(str) {
//     let parCounter = 0;
//     let penalty = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === "("){
//             parCounter++;
//         } else{
//             parCounter--;
//         } 
//         if(parCounter < 0) {
//             penalty++; 
//             parCounter++;
//         }
//         console.log(parCounter)
//     }
//     console.log(`We need ${penalty + parCounter} more parentheses`)
// }
//  parFinder(str1)
//  parFinder(str2)
//  parFinder(str3)
//  parFinder(str4)
//  parFinder(str5)

//object inherting from another object
// var obj1 = {
//     name: "eric",
//     age: 30
// }

// let obj2 = obj1
// obj1.age = 40;
// console.log(obj1.age, obj2.age)


// object inheriting from a variable
//They are different and show that when an obj inherits from a variable it apparently doesn't just point to it.

// var ageVar = 30;

// let objAge = {};
// objAge.age = ageVar;

// ageVar = 40;

// console.log(ageVar, objAge.age);

//variable inheriting from an object
//shows that the variables store info and not just point

// var obj1 = {
//     name: "eric",
//     age: 30
// }

// let varAge = obj1.age;

// obj1.age = 40;

// console.log(obj1.age, varAge)

/////////////////////////////////////////
// Lecture: Passing functions as arguments
/////////////////////////////////////////

// var years = [1990, 1988, 1993, 2000, 2007];

// function arrayCalc (arr, fn) {
//     var arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return(2019 - el)
// }

// let ages = arrayCalc(years, calcAge);
// console.log(ages);


// function isFullAge(el) {
//     return el >= 21;
// }

// var fullAges = arrayCalc(ages, isFullAge)
// console.log(fullAges)

// function maxHeartRate(el) {
//     if(el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el)) 
//     }else {
//         return -1;
//     }
    
// }

// let rates = arrayCalc(ages, maxHeartRate);
// console.log(ages)
// console.log(rates)

//////////////////////////////////////////////////
// Lecture: Functions returning another function
//////////////////////////////////////////////////

// function intQuestion(job) {
//     if (job === "designer") {
//         return function(name){
//             console.log(name + " can you please explain what UI/UX is?")
//         }
//     } else if (job === "teacher") {
//         return function(name){
//             console.log(name + ", what subject do you teach?")
//         }
//     } else {
//         return function(name){
//             console.log( "Hello " + name + " what do you do?" )
//         }
//     }
// }

// let teacherQuestion =  intQuestion('teacher');
// teacherQuestion("Abby");

// let designerQuestion = intQuestion('designer');
// designerQuestion("Eric"); 
// designerQuestion("Brandon");

// intQuestion("nada")("Sean");
//The above way is another way to call a function right after the wrapper function has been called.


////////////////////////////////////////////////////////////
// Lecture: Immediately invoked function expression (IIFE)
////////////////////////////////////////////////////////////
//if score is greater than 5 it's a win, if less than 5 it's a loss.

// function game() {
//     var score = Math.random() * 10
//     console.log(score >= 5)
// }

// game()

//IIFE will make the above easier

// (function () {
//     var score = Math.random() * 10
//     console.log(score >= 5)
// })();

//What's in () cannot be a statement, so essentially we trick the computer into thinking it's a function expression, otherwise a anonomyous function declaration would throw an error.

////////////////////////////////////////////////////////////
// OBJECTS - 
////////////////////////////////////////////////////////////


// var obj1 = {
//     func1: function() {
//         return this
        
//     }
// }

// console.log(obj1.func1())


// var john = {
//     name : "john",
//     yearOfBirth : 1988,
//     job : "programmer"
// }

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// var eric = new Person("Eric", 1988, "Programmer")
//The above is called instantiation!
//When we use the new kw a new empty object is created. The new kw as well makes it so the this kw is tied to the new empty object.
// console.log(eric);

//To add a method onto the person constructor would be acceptable but if you want to save space in memory you should use a prototype on the constructor so that the method is stored once in code but can be accessed by all instances.

// Inheritance is when we add things into the constructor's prototype prpoerty.

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.yearOfBirth);
// }

// Again what we did above is prototype inheritance which allows us to store info once on the prototype property of the constructor but lets all instances use the the method.

// Person.prototype.lastName = "Olaveson";

// console.log(eric.lastName)

///////////////////////
//CONSTRUCTOR FUNCTION
///////////////////////

// var Person = function(name, yob, job){
//     this.name = name;
//     this.yob = yob;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     console.log(2019 - this.yob)
// }

// // Person.prototype.lastName = this.lastName

// var john = new Person('John', 1990, 'teacher');
// var eric = new Person('Eric', 1988, 'SOFTWARE ENGINEER')
// var abby = new Person('Abby', 1993, 'nurse')

// eric.lastName = 'olaveson'

// console.log(eric.lastName)

//////////////////////////////
//OBJECT.CREATE
//////////////////////////////
//in this way we do not capitalize the variable

/*
var personProto = {
    calculateAge: function() {
        console.log(2019-this.yob)
    }
}

var eric = Object.create(personProto);
eric.name = 'Eric';
eric.yob = 1988;
eric.job = 'programmer';

var abby = Object.create(personProto, 
    {
        name: {value: 'Abby'},
        yob: {value: 1993},
        job: {value: 'nurse'}
    });
*/


// //PRIMITIVES
// var a = 23;
// var b = a;
// a = 12;
// console.log(a, b)
// // a = 12 while b = 23

// //OBJECTS
// var obj1 = { 
//     name: 'Eric',
//     age: 25
// }
// var obj2 = obj1
// obj1.age = 30;
// console.log(obj1)
// console.log(obj2)
// // Both objects have the age = 30

// //FUNCTIONS
// var age = 30;
// var obj = {
//     name : 'Eric',
//     city : 'Dallas'
// }
// function change(a, b){
//     a = 27;
//     b.city = 'Rigby'
// }
// change(age, obj)
// console.log(age, obj)


////////////////////////////////////////////////////////////
//CLOSURES
////////////////////////////////////////////////////////////

// function retire(retAge) {
//     let a = " years left until retirement";
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retAge - age) + a);
//     }
// }

// let usaRetire = retire(66)
// let canadaRetire = retire(70)
// usaRetire(1988)
// canadaRetire(1993)

// retire(60)(1988)

//inner functions will always have access to the variables and parameters of the outer function.

// function interviewQuestion(job) {
//     return function(name) {
//         if (job === "designer") {
//             console.log(name + " can you please explain what UI/UX is?")
//         } else if (job === "teacher") {
//             console.log(name + ", what subject do you teach?")
//         } else if (job === "programmer") {
//             console.log(`Wow, ${name} I've always wanted to meet a programmer`)
//         }else {
//             console.log( "Hello " + name + " what do you do?" )
//         }
//     }
// }

// let programmerQuestion = interviewQuestion("programmer")
// programmerQuestion("Eric")
// interviewQuestion("teacher")("Jeri")

//ERIC'S BANK

// function bankOfEric(initialBalance, name) {
//     let balance = initialBalance;
    
//     return {
//         deposit: function(amount){
//             balance += amount;
//             console.log(`Hi ${name} you have $${balance} in your account`);
//         },
//         takeOut: function(amount) {
//             balance -= amount;
//             console.log(`Hi ${name} you have $${balance} in your account`);
//         }
//     }
// }


// let ericAccount = bankOfEric(5, "Eric");
// ericAccount.deposit(20)
// let abbyAccount = bankOfEric(10000000, "Abby")
// abbyAccount.takeOut(1)

// console.log(abbyAccount)

////////////////////////////////////////////////////////////
//BIND, CALL, APPLY
////////////////////////////////////////////////////////////

// var john = {
//     name: 'John',
//     age: 29,
//     job: "teacher",
//     presentation: function(style, timeOfDay){
//         if(style === "formal"){
//             console.log(`Good ${timeOfDay}, ladies and gentlemen. I'm ${this.name}, I'm ${this.age}, and I am a ${this.job}.`)
//         }else if(style === "friendly"){
//             console.log(`What's good?! I'm ${this.name}, I'm ${this.age}, and I am a ${this.job}. I hope you're having a great ${timeOfDay}!`)
//         }
//     }
// }

// var emily = {
//     name : "emily",
//     age : 35,
//     job : "programmer"
// }

// john.presentation("formal", "morning")

// john.presentation.call(emily, 'friendly', 'afternoon')
//The above is called method borrowing. We use it with the call method.

// john.presentation.apply(emily, ['friendly', 'evening'])
//This would not work in our case because our function is not expecting an array as the input.

// let johnFriendly = john.presentation.bind(john, 'friendly')
//Doesn't automatically call a function, instead it returns a function that binds the function to the first parameter. As well we can pass more parameters to preset the function. 

//carrying/currying is when we have a function based on another function but has some preset parameters.

// johnFriendly('morning')

// let emilyFormal = john.presentation.bind(emily, "formal")

// emilyFormal("evening")

// let numsArr = [1990, 1988, 1999, 2000, 2005, 1959]

// function arrayCalc (arr, fn) {
//     var arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return(2019 - el)
// }

// let ages = arrayCalc(numsArr, calcAge);
// console.log(ages);


// function isFullAge(limit, el) {
//     return el >= limit;
// }

// console.log(arrayCalc(ages, isFullAge))
//the above worked before I changes the isFullAge to have two parameters instead of just the one el.

// var japanFullAge = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(japanFullAge);

// let num = '8'

// console.log(typeof(+num))


// setTimeout(()=>{
//     console.log("Hit inside the timeout")
// }, 2000)

// console.log("Hit outside")

// console.log(a, b, c)

// var a = 1;
// let b = 2;
// const c = 3;

////////////////////////////////////
//Checking for an empty object
////////////////////////////////////

// Object.prototype.isEmpty = function() {
//     for(var key in this) {
//         if(this.hasOwnProperty(key))
//             return false;
//     }
//     return true;
// }

// let myObj = {}

// console.log(myObj.isEmpty())

////////////////////////////////////
//How to use reduce on an object
////////////////////////////////////

// var initialValue = 0;
// var sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x;
// },initialValue)

// console.log(sum) // logs 6

// const food = {
//     good: {
//         fruit: {},
//         notFruit: {
//             good:{
//                 pizza:["pepperoni", cheese = {y: "cheddar", w: "provolone"}]
//             },
//             bad:{}
//         }
//     },
//     bad:{}
// }

// console.log(food.good.notFruit.good.pizza[1].w)

// function pen(){
//     let shh = 0;
//     return function(){
//         return shh++
//     }
// }

// let pen1 = pen()
// pen1()
// console.log(pen1())


// let pen2 = pen()
// pen2()
// pen2()
// pen2()
// pen2()
// console.log(pen2())
//Not sure why the console.log isn't counted in the numbers but it's not.

// function myFunc(v){
//     if(v){return true;}
//     else{return false;}
// }

// console.log(myFunc(-Infinity))

////////////////////////////////////
//How to copy an object
////////////////////////////////////

//let newObj = JSON.parse(JSON.stringify(obj));

////////////////////////////////////
//DEBOUNCE!!!
////////////////////////////////////
//Know this for interview questions!

// var input = document.querySelector("input")

// const debounce = (func, timer) => {
//     let timeID = null;
//     return (...args) => {
//         if(timeID){
//             clearTimeout(timeID);
//         }
//         timeID = setTimeout(()=>{
//             func(...args);
//         }, timer)
//     }
// }

// input.addEventListener('keyup', debounce((e)=>{
//     console.log(input.value)
// }, 1000));

let input = document.querySelector("input");

input.addEventListener('keyup', debounce((e)=>{
    console.log(input.value)
}, 2000))

function debounce (func, time) {
    let timer = null;
    return function(...args){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            func(...args)
        }, time)
    }
}