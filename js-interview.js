
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