//CHALLENGE 1: REVERSE A STRING

//const revStr = (str) => str.split("").reverse().join("");
// const revStr = (str) => str.split("").reduce((revWord, letter)=> letter+revWord, "");
// console.log(revStr("Hello"))


//CHALLENGE 2: VALIDATE A PALINDROME

// const isPal = (str) => {
// let revStr = str.split("").reverse().join("");
// return revStr === str;
// }
// console.log(isPal('madam'));


//CHALLENGE 3: REVERSE AN INTERGER

// const revInt = (int) =>
//   parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);

// console.log(revInt(-123456));


//CHALLENGE 4: CAPITALIZE THE FIRST LETTER OF EACH WORD IN A SENTENCE

// const capSent = (sent) => 
//     sent
//         .toLowerCase()
//         .split(" ")
//         .map(w=> w.substring(0, 1).toUpperCase() + w.substring(1))
//         .join(" ");

// console.log(capSent("I REALLY love coding!"));


//CHALLENGE 5: RETURN THE MAX CHARACTER IN THE STRING

//ANSWER WITH AN OBJECT AND A FOR IN LOOP
// const maxChar = (str) => {
//     let myObj = {};
//     let total = 0;
//     let ans = "";
//     str.toLowerCase().split("").forEach(l=>{
//         if(myObj[l]){myObj[l]++;}
//         else{myObj[l] = 1}
//     })

//     for(key in myObj){
//         if(myObj[key] > total){
//             total = myObj[key];
//             ans = `${key}`;
//             console.log("hit one")
//         } else if(myObj[key] === total){
//             console.log("hit two")
//              ans += ", " + key;
//         }
//     }
//     return ans;
// }

//ANSWER WITH AN OBJECT AND REDUCE
// const maxChar = (str) => {
//     let charObj = {};
//     let total = 0;
//     return str.split("").reduce((ans, ltr)=>{
//         //setting up charObj
//         if(charObj[ltr]){
//             charObj[ltr]++ 
//         }else{
//             charObj[ltr] = 1;
//         }
//         //logic to find most occuring num
//         let num = charObj[ltr];
//         if(num > total){
//             total = num;
//             return ltr;
//         }else if(num === total){
//             return `${ans}, ${ltr}`;
//         }return ans;
//     }, "")
// }

// console.log("final ANSWER: ", maxChar("javascriptt"))

//CHALLENGE 6: FIZZBUZZ

// const fB = () => {
//     let ans = "";
//     const addWord = (word) => {
//         ans += word +'\n'
//     }
//     for(let i = 1; i <= 100; i++){
//         switch(true){
//             case i%15 === 0:
//                 addWord("FIZZ-BUZZ");
//                 break;
//             case i%5 === 0:
//                 addWord("buzz");
//                 break;
//             case i%3 === 0:
//                 addWord("fizz");
//                 break;
//             default:
//                 addWord(i);
//         }
//     }
//     return ans;
// }

// const fB = () =>{
//     for(let i=1;i<101;i++)console.log((i%3?'':'fizz')+(i%5?'':'buzz')||i)
// }

// fB();

////////////////////////////////////////////////////
/*CARDIO SESSION 2*/
////////////////////////////////////////////////////

//CHALLENGE #1 : LONGEST WORD, 
//RETURN THE LONGEST WORD OR THE LONGEST WORDS IN A STRING IN AN ARRAY(IF MULTIPLE).
// const strFunc = str => {
//     let lngWrd = 0;
//     return str.toLowerCase().match(/[a-z0-9]+/g).reduce((ans, wrd)=>{
//         const ln = wrd.length
//         if(ln > lngWrd){
//             lngWrd = ln;
//             return wrd;
//         }else if(ln === lngWrd){
//             return(`${ans}, ${wrd}`);
//         }
//     }, "")
// }
// console.log(strFunc("My name is Eric. Howdy party dudes."))



//CHALLENGE #2 : ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// const chunk = (arr, num) => {
//     let chArr = [];
//     for(let i = 0; i < arr.length; i+=num){
//         chArr.push([arr.slice(i, (i+num))]);
//     }
//     return chArr;
// }
// console.log(chunk([1,2,3,4,5,6,7], 3));

//CHALLENGE #3 : FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

//const flat = arr => arr.reduce((total, el) => [...total, ...el],[]);

// const flat = arr => [].concat(...arr);

// console.log(flat([[1, 2], [3, 4], [5, 6], [7]]));

//CHALLENGE #4 : ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// const ana = (a, b) =>{
//     //omitting the plus in the regex gave me just the letters and not the whole word. If I put an i after the g it makes it case insensitive.
//     const srt = e => e.toLowerCase().match(/[a-z]/g).sort().join("");
//     return srt(a) === srt(b);
// };

// console.log(ana('Dormitory', 'dirty room##'));

//CHALLENGE #5 : LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

// const chg = s => {
//     const ltrArr = 'abcdefghijklmnopqrstuvwxyz'.split("");
//     const vow = 'aeiou'.split("");

//     return s.toLowerCase().split("").map((e)=>{
//         const arrInd = ltrArr.findIndex(el=> el === e);
//         if(e === 'z'){
//             e = 'a';
//         }else if(ltrArr.includes(e)){
//             e = ltrArr[arrInd + 1];
//         }
//         if(vow.includes(e)){
//             e = e.toUpperCase();
//         }
//         return e;
//     }).join("");
// }

//BRAD'S ANSWER =====>

// function letterChanges(str) {
//     let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
//       if (char === 'z' || char === 'Z') {
//         return 'a';
//       } else {
//         return String.fromCharCode(char.charCodeAt() + 1);
//       }
//     });
  
//     newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
  
//     return newStr;
//   }

// console.log(letterChanges('z1z hello THEre!!!'));

////////////////////////////////////////////////////
/*CARDIO SESSION 3*/
////////////////////////////////////////////////////

//CHALLENGE #1 : ADD ALL NUMBERS PASSED IN AS PARAMETERS

// const addAll = (...args) => args.reduce((a, b)=> a+b, 0);

// console.log(addAll(12, 10, 22, 4));
//CHALLENGE #2 : SUM ALL PRIMES

// const sumPrime = num => {
//   let arr = [];
//   let primes = 0;
//   for(let i = 2; i <= num; i++){
//     if(arr.find(e=> i%e === 0)){
//       //do nothing
//     }else{primes += i;}
//     arr.push(i);
//   };
//   return primes;
// }

// console.log(sumPrime(100));

//CHALLENGE #3 : SEEK AND DESTROY
//TAKE IN AN ARRAY AND UNNUMBERED PARAMETERS. TAKE OUT THE UNNUMBERED PARAMS FROM THE ARRAY AND RETURN IT.
//([2, 3, 4, 6, 6, 'hello'], 2, 6) ==> [3, 4, 'hello']
const sAndD = (arr, ...args) => arr.filter(e => !args.includes(e))
//When only wanting to return some values, don't use map use filter!!!
console.log(sAndD([2, 3, 4, 6, 6, 'hello'], 2, 6));

//CHALLENGE #4 : 