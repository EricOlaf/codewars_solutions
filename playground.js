//////////////////////////////
//HOW SCOPING WORKS
//////////////////////////////

// var x = 1;
// console.log('y = ' + y);//error: y is not defined, shows that if we don't use var it doesn't get hoisted.
// y = x + 2;
// console.log('y = ' + y);// y = 3

// let z = 1; //Cannot access variable before it's declared.

// var myFunc = () => {
//     console.log('z = ' + z);// z = undefined, due to hoisting in the scope of this function.
//     console.log('x = ' + x);// x = 1, finds the parent x because x lower in this scope isn't set with var so no hoisting but rather changes the value of the global x once it runs.
//     y = y + 3 + x;
//     console.log('y = ' + y);//y = 7, this is due to y = 3 above and x = 1
//     x = 5;
//     var z = 10;
//     w = 100;//where w is not instantiated with var, let, const it is put on the global context we can avoid this error with useStrict.
// }

// myFunc();
// console.log("y = " +y); // y = 7
// console.log('x = ' +x);// x = 5
// console.log('z = ' + z);// z = 1
// console.log('w = ' + w);// w = 100

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
//Good programmers recognize patterns.

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

//object inherting from another object. When this occurs the second object is just a reference pointer.
// var obj1 = {
//     name: "eric",
//     age: 30
// }

// let obj2 = obj1
// obj1.age = 40; //You could set obj2.age = 40 and it would have the same affect.
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
// Lecture: Passing functions as arguments ie CALLBACKS
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
// Lecture: Functions returning another function; ie CLOSURE
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

// function bankOfEric(balance, name) {
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
// ericAccount.takeOut(50)

// console.log(abbyAccount)
// console.log(ericAccount)

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
//         }else{return("you didn't enter in any params");}
//     }
// }

// var emily = {
//     name : "emily",
//     age : 35,
//     job : "programmer"
// }

// emily.presentation = john.presentation;
// //to steal John's identity we could set emily.presentation = john.presentation.bind(john)

// emily.presentation("formal", "morning");

// john.presentation("formal", "morning");

// john.presentation.call(emily, 'friendly', 'afternoon');
// //The above is called method borrowing. We use it with the call method.

// john.presentation.apply(emily, ['friendly', 'evening']);
// //This would not work in our case because our function is not expecting an array as the input.
// //BUT IT DOES WORK!!! WHAAAAAA...

// let johnFriendly = john.presentation.bind(john, 'friendly');
// //Doesn't automatically call a function, instead it returns a function that binds the function to the first parameter. As well we can pass more parameters to preset the function.

// //carrying/currying is when we have a function based on another function but has some preset parameters.

// johnFriendly('morning');

// let emilyFormal = john.presentation.bind(emily, "formal");

// emilyFormal("evening");
// //The above is known as "Partial Application" where we make a function that returns another function with less parameters.

//////////////////////////////////////////////

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

// let num = 'five'

// console.log(typeof(+num))
// //Makes the string above into a number.

// setTimeout(()=>{
//     console.log("Hit inside the timeout")
// }, 2000)

// console.log("Hit outside");

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
//Not a very pratical purpose...
//arr.reduce((a,b)=>a+b)

// var initialValue = 0;
// var sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue.x;
// },initialValue)

// console.log(sum) // logs 6

// const foodVar = ["fruit", 'notFruit', 'cheese', ch1 = 'y', ch2 = 'w']

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

// console.log(food.good.notFruit.good.pizza[1].w);// WORKS: provolone
// console.log(food['good']['notFruit'].good.pizza[1]['y']);//WORKS: cheddar
// console.log(food.good[foodVar[1]]['good'].pizza[1][foodVar[4]]);//WORKS: provolone

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

//Cache the dom🤘🏻
// var input = document.querySelector("input")

// const debounce = (func, timer) => {
//     let timeID = null;
//     return (...args) => {
//         if(timeID){
//             clearTimeout(timeID)
//         }
//         timeID = setTimeout(()=>{
//             func(...args);
//         }, timer)
//     }
// }

// input.addEventListener('keyup', debounce((e)=>{
//     console.log(input.value)
// }, 1000));

// const input = document.querySelector('input')

// const debounce = (func) =>{
//  let timer = null;
//  return function(e){
//     clearTimeout(timer);
//     timer = setTimeout(()=>{func(e)}, 2000)
//  }
// }

// input.addEventListener('keyup', debounce(()=>{
//     console.log(input.value);
// }));

// input.addEventListener('keyup', (e)=>{keyFunc(e)})

// var button = document.querySelector("button");
// function debounce (func, delay){
//     let debounceTimer
//     console.log('outer '+ this)
//     return function(a) {
//         console.log("inner " + this)
//         console.log("args " + arguments)
//         console.log(a)
//         const context = this
//         const args = arguments
//             clearTimeout(debounceTimer)
//                 debounceTimer
//             = setTimeout(() => func.apply(context, args), delay)
//     }
// }
// button.addEventListener('click', debounce(function() {
//     console.log("evList " + this)
//         alert("Hello\nNo matter how many times you" +
//             "click the debounce button, I get " +
//             "executed once every 3 seconds!!")
//                         }, 3000));

///////////////////
/*NEW PROBLEM TIC-TAC-TOE*/
///////////////////

// Setup the HTML and CSS to accomodate a basic game. Use semantic HTML, CSS3 variables, grid.

// 1. cache the dom.

// 2. set up startup variables and data structures. init function

// 3. be able to reflect the changes a user makes. Player 1 and 2

// 4. be

///////////////////
/*CALL BACKS/PROMISES/ASYNC AWAIT*/
///////////////////

// function myFunky(){
//     console.log('1')
//     setTimeout(()=>{
//         console.log('2')
//     }, 2000);
//     (()=>console.log('3'))();
//     setTimeout(()=>{
//         console.log('4')
//         myCB();
//     }, 2000);
//     console.log('5')

// }

// const myCB =()=>{
//     console.log('this is the cb');
// }

// setTimeout(()=>{
//     console.log('one');
//     setTimeout(()=>{
//         console.log('two')
//     }, 2000);
//     (()=>{
//         console.log('three');
//     })()
//     setTimeout(()=>{
//         console.log('four')
//         myCB();
//     }, 2000);

// }, 2000)

// myFunky();

// const three = "three";

// const myArr = [1, "2", three, "four", "five5"]

// const myObj = {
//     1: "one",
//     "2": "two",
//     three: "three",
//     "four": "four",
//     five5: 5
// };

// myArr.forEach(e=>{
//     console.log(e, myObj[e]);
// })

// for(let i = 0; i < myArr.length; i++){
//     console.log(myObj[myArr[i]])
// }

//DOT NOTATION

//console.log(myObj.1); DOESN'T WORK, JS VARIABLES DON'T START W NUMBERS.
//console.log(myObj."2"); DOESN'T WORK
//console.log(myObj.three); WORKS
//console.log(myObj.four); POSSIBLE WITHOUT QUOTES, CAN REFERENCE A VARIABLE WITH QUOTES BUT CAN'T HAVE QUOTES AFTER THE DOT.
//console.log(myObj.five5); WORKS

//BRACKET NOTATION

// console.log(myObj[1]); WORKS
// console.log(myObj["2"]); WORKS
// console.log(myObj["three"]); POSSIBLE WITH QUOTES
// console.log(myObj["four"]);
// console.log(myObj["five5"]);

// let num = 0;

// async function myF(){
//   num += 1;
//   console.log(num);
//   num += 5;
//   console.log(num);
// }

// console.log(num);

// myF();
// num+=10;
// console.log(num);

//OUTPUT IS ORDER IS 0, 1, 11, 6
//WO AWAIT (w or wo async doesnt matter) THE ORDER IS 0, 1, 6, 16

///////////////////////////
//REVEALING MODULE PATTERN
///////////////////////////

//TURN THE CODE BELOW INTO A REVEALING MODULE PATTERN!

// let myModule = {
//     data:[1, 2, 3],
//     render: function(){
//         console.log(this.data)
//         console.log("render")
//     },
//     add: function(){
//         console.log(this.data)
//         console.log("add")
//     },
//     remove: function(){
//         console.log(this.data)
//         console.log("remove")
//     },
// }

//MY ANSWER

// const myFuncHey = (function(){
//     const data=[1, 2, 3];

//    function add(){
//         let num = 0;
//         console.log("add")
//         num = data[0] + data[2];
//         console.log(num);
//     };
//     function remove(){
//         console.log(data)
//         console.log("remove")
//     };
//     return{
//         render: function(){
//             console.log(data)
//             console.log("render")
//             add();
//         },
//     }
// })();

// myFuncHey.render();

/////////////////////////
//MAKE SURE NUMBER OF ARGS IS TWO

//MY ANSWER
// const f = (...args) => {
//     if(args.length === 2){
//         return `carry on with ${args[0]} + ${args[1]}`;
//     }else{
//         return "nope!!!";
//     }
// }

//STEVE'S ANSWER

// const f2 = function(a, b){
//     if(arguments.length === f2.length){
//         return `carry on with ${a} + ${b}`;
//     } else {
//         return "nope!!!";
//     }
// }
//The length property of a function is the length of the number of arguments actually passed in.

// console.log(f2(2, 3))
// console.log(f2(1, 2, 4))

////////////////PRACTICE

// const funcMaker = (a) => {
//     const add = (a, b) =>{
//         return a + b;
//     };
//     return function(b){
//         return add(a, b);
//     };
// }

// const add10 = funcMaker(10);
// const add20 = funcMaker(20);

// console.log(add10(5));
// console.log(add20(5));

//This concept of having a function with multiple parameters return a new function with fewer parameters is called “Partial Application” and it’s a functional programming technique. JavaScript’s “.bind” method is a common example of this.

// const arr = [1, 2, 3, 4];

//     for(var i = 0; i < arr.length; i++){
//         (function(cli){setTimeout(function(){
//             console.log("Here i am,", cli)
//         }, 3000)})(i);
//     }

// const myFib = (n) => {
// const myArr = [0, 1]
// for(let i = 2; i < n; i++){
//     myArr.push(myArr[i-1] + myArr[i-2]);
// }

// return (n >= 2 ? myArr : n === 1 ? [0] : []);
// }

// console.log(myFib(5));
// console.log(myFib(2));
// console.log(myFib(1));
// console.log(myFib(0));

// const mask = num => {
//     const numArr = num.toString().split("");
//     const startNum = numArr.length -4;
//     return numArr
//         .map((x, i) => {
//         if(i < startNum){
//             return 'x'
//         }else{
//             return x
//         }
//     }).join("")
// }

// const mask = (str, maskChar = "#") =>
//   str.slice(-4).padStart(str.length, maskChar)

// // console.log(mask("2345234"));
// // console.log(mask("2345239727523945674"));
// function myNum(str){
// str.slice(-4);
// return str.length
// }
// const fullNumber = '2034399002125581';

// console.log(myNum(fullNumber));
// // const last4Digits = fullNumber.slice(-4);

// // console.log(last4Digits);

// function inchesToCm(inches) {
//         return inches * 2.54;
// }

// // console.log(inches)

// const lengthInches = 3;
// const lengthCm = inchesToCm(lengthInches);
// console.log(lengthCm);

// let fullNameMJ = getFullName('Michael', 'Jordan');

//    console.log(fullNameMJ);

// const getFullName = function (firstName, lastName) {
//         return `${firstName} MiddleName ${lastName}`;
//     };

// const getFullName = (firstName, lastName) => {
//     let fullName = `${firstName} MiddleName ${lastName}`;
//     if(fullName === "Karl Malone"){return "Mailman"}
//     else{return "Air Jordan"}
// }

// const vOne = 'One'
// let vTwo = 'Two'

// vTwo = 2;
// vOne = '1';

// console.log(vOne, vTwo);

// const myCoolArr = [1,2,3,4];

// myCoolArr.push(5,6,7,8,9,892137592745);

// myCoolArr = [6,7,8,9];

// console.log(myCoolArr);

//PRACTICING CLOSURES, BANK APP

// const bank = deposit => {
//   let amount = deposit || 0;
//   return {
//     addFunds: num => {
//       return (amount += num);
//     },
//     subtractFunds: num => {
//       return (amount -= num);
//     },
//     lottery: num => {
//       return (amount *= num);
//     },
//     total: () => {
//       return amount;
//     },
//     bankRobbery: () => {
//       return (amount = 0);
//     }
//   };
// };

// const ericAccount = bank(100);

// console.log(ericAccount.total());
// console.log(ericAccount.addFunds(100));
// console.log(ericAccount.subtractFunds(50));
// console.log(ericAccount.lottery(1000));
// console.log(ericAccount.bankRobbery());
// console.log(ericAccount.total());

// const abbyAccount = bank(500);
// console.log(abbyAccount.addFunds(1000));

//////////////////////
//NEW PLAYGROUND
//////////////////////
// const parens = s => {
//   let counter = 0,
//     ans = 0;
//   s.split("").forEach(x => {
//     if (x === "(") {
//       counter++;
//     } else {
//       counter--;
//     }
//     if (counter < 0) {
//       ans++;
//       counter = 0;
//     }
//   });
//   return ans + counter;
// };

// console.log(parens("(()")); //1
// console.log(parens("(())")); //0
// console.log(parens("()()(()))")); //1
// console.log(parens("))(())(")); //3
