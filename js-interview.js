
///////////////////STEVE GRIFFITH #1
/*NEW PROBLEM*/ 
///////////////////ASYNC TIMING

// console.log('a');

// setTimeout(function(){
//     console.log('b')
// }, 1);

// setTimeout(function(){
//     console.log('c')
// }, 10);

// setTimeout(function(){
//     console.log('d')
// }, 0);

// console.log('e')

//a, e, b, d, c

///////////////////STEVE GRIFFITH #2
/*NEW PROBLEM*/ 
///////////////////HOW ASYNC WORKS AND THE EVENT LOOP

// let num = 0;

// async function inc(){
//     num += await 2;
//     console.log(num);

// }
// inc();
// num += 1;
// console.log(num);

//Output will be 1, 2

///////////////////STEVE GRIFFITH #3
/*NEW PROBLEM*/ 
///////////////////REVEALING MODULE PATTERN

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

///////////////////STEVE GRIFFITH #4
/*NEW PROBLEM*/ 
///////////////////

//Make sure the number of params is two.

//MY ANSWER
// const f = (...args) => {
//     if(args.length === 2){
//         return `carry on with ${args[0]} + ${args[1]}`;
//     }else{
//         return "nope!!!";
//     }
// }
// console.log(f(1, 2))
// console.log(f(1, 2, 3))

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

///////////////////STEVE GRIFFITH #5
/*NEW PROBLEM*/ 
///////////////////

//ASI = automatic semicolon injection, object literals, square bracket syntax and hoisting.
//We are putting the obj a into an array and looping over the array. This won't work because there is no semicolon after the object. JS thinks that we are trying to call a variable called a inside of the object, but you would have to write it with quotes, ['a']. So it hoists it as undefined. To fix this we need to add a semicolon.
// const a = {
//     a: 123
// }

// [a].forEach(function(x){
//     console.log(x)
// })

// for(const k in a){
//     console.log(a[k]);
// }

// const a = {
//     a: 123
// };

// [a].forEach(function(x){
//     console.log(x)
// })

///////////////////STEVE GRIFFITH #6
/*NEW PROBLEM*/ 
///////////////////SINGLETON

//Uses a closure to make it so that no matter how many instances we make they all refer to the same instance object. If you change one object you change them all.

// const Singleton = (function(){
//     let objInstance = null;
//     function createInstance(){
//         let _isRunning = false;
//         function start(){
//             _isRunning = true;
//         }
//         function stop(){
//             _isRunning = false;
//         }
//         function currentState(){
//             return _isRunning;
//         }
//         return{
//             start,
//             stop,
//             currentState
//         };
//     }
//     return{
//         getInstance:function(){
//             if(!objInstance){
//                 objInstance = createInstance();
//             }
//             return objInstance;
//         }
//     }
// })()

// let s1 = Singleton.getInstance();
// let s2 = Singleton.getInstance();
// console.log(s1.currentState(), s2.currentState())
// s1.start();
// console.log(s1.currentState(), s2.currentState())
// console.log(s1 === s2);

///////////////////STEVE GRIFFITH #7
/*NEW PROBLEM*/ 
///////////////////FIX THE CODE

// //SIMPLE CLOSURE, NO PROBLEM
// // function f1(a){
// //     let b = 2;
// //     setTimeout(()=>{
// //         console.log(a, b)
// //     }, 1000);
// // }

// //THIS ONE HAS A PROBLEM... SETTIMEOUT KNOWS IT CAN USE THE VARIABLE AFTER THE LOOP SO IT DOESN'T TAKE THE VALUE ALONG WITH IT. THE VARIABLE i IS SCOPED TO THE FUNCTION NOT THE LOOP.
// function f2(){
//     for(var i = 0; i < 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000*i);
//     }
// }

// //SOLUTION #1
// //THIS WORKS BECAUSE IT USES BLOCK SCOPING WITH LET WHICH MAKES THE SETTIMEOUT TAKE THE VARIABLE I WITH IT BECAUSE IT KNOWS IT CAN'T USE IT AFTER THE LOOP HAS FINISHED.
// function f3(){
//     for(let i = 0; i < 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000*i);
//     }
// }

// //SOLUTION #2
// //THIS WORKS BECAUSE IT BINDS THE VARIABLE i TO THE SETTIMEOUT. YOU CAN BIND IT TO 'THIS' TOO.
// function f4(){
//     for(var i = 0; i < 5; i++){
//         setTimeout( (function(x){
//             console.log(x);
//         }).bind(null, i), 1000 * i);
//     }
// }

// f2();

///////////////////STEVE GRIFFITH #8
/*NEW PROBLEM*/ 
///////////////////CREATE AN ARRAY THAT'S PREPOPULATED WITH 5 RANDOM NUMBERS.

// //MY ANSWER
// const arrMaker = (x) => {
//     const arr = []
//     for(let i = 0; i < x; i++){
//         arr.push(Math.floor(Math.random() * 20));
//     }
//     return arr;
// }
// let a1 = arrMaker(5);
// console.log('1', a1);

// //STEVE'S ANSWERS, ARRAY.FROM() AND NEW ARRAY()
// let a2 = Array.from({length: 5}, () => Math.floor(Math.random() * 20));
// console.log('2', a2);

// let a3 = new Array(5).fill(null).map(() => Math.floor(Math.random() * 20));
// console.log('3', a3);

///////////////////STEVE GRIFFITH #9
/*NEW PROBLEM*/ 
///////////////////VAR VS LET HOISTING

// //WHAT WILL THE OUTCOME BE?
// function f(){
//     //area = undefined;
//     //name; not defined, not assigned a value.
//     console.log('var', area);
//     console.log('let', name);
//     //name = "Abby"// will throw a reference error as well. Assign let and const at the top of your scope.
//     let name = "Eric";
//     var area = "Software Engineer";
// };
// f();
// //VAR WILL BE UNDEFINED DUE TO HOISTING.
// //LET WILL BE HOISTED AND GET A REFERENCE ERROR DUE TO TEMPORAL DEAD ZONE.

///////////////////STEVE GRIFFITH #10
/*NEW PROBLEM*/ 
///////////////////GENERATE A RANDOM HEX COLOR, 6 NUMS, IN ONE LINE.
// //HINT: TO USE A HEX NUMBER WITH LETTERS PASS IN 16 AS THE RADIX TO toString().
// //MY ANSWER!!! ENDED UP BEING THE SAME AS STEVES'
// const color1 = () =>'#'+ Math.random().toString(16).substring(2, 8);

// console.log(color1());
// //console.log('#'+ Math.random().toString(16))

///////////////////STEVE GRIFFITH #11
/*NEW PROBLEM*/ 
///////////////////MAP AND PARSEINT
// //WHY ARE WE GETTING THIS WEIRD RESULT?

// //WHEN USING THE MAP FUNCTION BELOW WE ARE PASSING IN THE INDEX AS THE RADIX (THE BASE FOR THE NUMBER, DEFAULT IS BASE 10, BUT THIS IS CHANGED WITH EACH VALUE).
// let ans = ['1', '7', '11'].map(parseInt);
// console.log(ans); //returns [1, NaN, 3]; 'O' INDEX = BASE 10, '1'= BASE 1, '2'=BASE 2 OR BINARY.

// //MY ANSWER
// let ans2 = ['1', '7', '11'].map(x=>parseInt(x, 10));
// console.log(ans2); //returns [1, NaN, 3];

///////////////////STEVE GRIFFITH #12
/*NEW PROBLEM*/ 
///////////////////DOT NOTATION VS SQUARE BRACKET
//WHAT'S INSIDE OF SQUARE BRACKETS IS READ FIRST, WHILE DOT READS LEFT FROM RIGHT.

// let sam = {
//     castiel: "mary"
// }
// let dean = {
//     john: "crowley",
//     mary: "chuck"
// }

// console.log(dean[sam.castiel]);
// console.log(dean.sam.castiel);
// console.log(dean[sam['castiel']]);
// console.log(dean[sam[castiel]]);

/*
GUESSES/ANSWERS: 
1. 'chuck'
2. TypeError: Cannot read property 'castiel' of undefined; this is looking for a sam property inside of dean
3. 'chuck'
4. ReferenceError: castiel is not defined; because castiel isn't in "".
*/

///////////////////STEVE GRIFFITH #13
/*NEW PROBLEM*/ 
///////////////////USING "THIS" IN OBJECT METHODS
//WHAT WILL THE RETURN STATMENTS BE???


// const circle = {
//     radius: 10,
//     circumfrence: function(){
//         //console.log(this);
//         return(2 * Math.PI * this.radius);
//     },
//     diameter(){
//         //console.log(this);
//         return( this.radius * 2); 
//     },
//     area: ()=>{
//         //console.log(this);
//         return(Math.PI * this.radius * this.radius)
//     }
// }

// console.log(circle.circumfrence());//62.83
// console.log(circle.diameter());//20 shorthand synrtax
// console.log(circle.area());//NaN arrow, lexical scoping
// //In lexical scoping inner functions use creation context. The context of the circle object is the window so it goes to the window to find the variable radius.

///////////////////STEVE GRIFFITH #14
/*NEW PROBLEM*/ 
///////////////////IS THIS NUMBER AN INTEGER?
//WRITE A FUNCTION TO DETERMINE IF A NUMBER IS AN INTEGER.

//MY ANSWER
// const isInt = (num) => {
//     const numArr = num.toString().split(".");
//     return numArr.length < 2;
// }

//STEVE'S ANSWER
// const isInt = (num) => {
//     return(!isNaN(num) && parseInt(num) === num);
// }

// console.log(isInt(3.5));
// console.log(isInt(42));
// console.log(isInt(1.0000000));

///////////////////STEVE GRIFFITH #15
/*NEW PROBLEM*/ 
///////////////////CASE INSENSITIVE ANAGRAM
//(AN ANGRAM HAS TWO DIFFERENT WORDS THAT HAVE THE SAME LETTERS WITH A DIFFERENT ORDER)

// const isAnagram = (s1, s2) => {
//     const s1Sorted = s1.split("").sort().join("").toLowerCase();
//     const s2Sorted = s2.split("").sort().join("").toLowerCase();
    
//     return s1Sorted === s2Sorted;
// }

// console.log(isAnagram("hello", "jello"));
// console.log(isAnagram("hello", "loleh"));

///////////////////STEVE GRIFFITH #16
/*NEW PROBLEM*/ 
///////////////////CALCULATE THE BIGGEST DIFFERENCE
//HINT: max and min only take in numbers not an array of numbers.
// const diff = (arr) => {
//    return Math.max(...arr) - Math.min(...arr);
// }

// console.log(diff([10, 5, 7, 4, 2, 8, 4]));