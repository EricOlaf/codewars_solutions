// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

// /*MY ANSWER*/

// // let noSpace = (str) => {
// //     let ans = ""
// //     for(let i = 0; i < str.length; i++){
// //         if(str[i] !== " "){
// //             ans += str[i]
// //         }
// //     }
// //     return ans
// // }

// /*COOL ANSWER!!!*/

// const noSpace = (x) => x.split(' ').join('');

// console.log(noSpace("a b 1 2"))
// console.log("ab12")

///////////////////
/*NEW PROBLEM*/
///////////////////

/*MY ANSWER*/
// const sumOfDifferences = (arr) => {
//     let total = 0;

//     arr.length < 2 && 0;

//     arr.sort((a, b) => b-a);

//     for(let i = 0; i < arr.length -1; i++){
//         total += arr[i] - arr[i + 1];
//     }

//     return total;
// }

/*COOL ANSWER!!!*/

// const sumOfDifferences = arr =>
//     arr
//         .sort((a, b) => b - a)
//         .map((a, i) => a - arr[i + 1] || 0)
//         .reduce((a, b) => a + b, 0);

// function sumOfDifferences(arr) {
//     console.log(arr)
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

//Math.max and Math.min take in numbers and not arrays, that's why we use the spread operator!

//When using a ternary you write return first then the condition. If you want two options(if, else) you go with ? :, but if you want only an if statement you use a &&.

// console.log(sumOfDifferences([]), `problem []`)
// //0
// console.log(sumOfDifferences([3]), `problem [3]`)
// //0
// console.log(sumOfDifferences([1, 5, 8]), `problem [1, 5, 8]`)
// //7
// console.log(sumOfDifferences([10, 2, 7]), `problem [10, 2 7]`)
// //8

///////////////////
/*NEW PROBLEM*/
///////////////////

// let multiplyAll = (arr) => {
//     return function(num){
//       return arr.map(i => i*num)
//     }
//   }

// let newFunc = multiplyAll([1, 2, 3])

// console.log(newFunc(2))

//This is also called currying!

///////////////////
/*NEW PROBLEM*/
///////////////////

// function tickets(arr){
//   let bill25 = 0, bill50 = 0;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 25){
//             bill25++;
//         }else if(arr[i] === 50){
//             bill50++;
//             if(bill25 < 1){
//                 return "NO";
//             } else{
//                 bill25--;
//             }
//         }else{
//             if(bill50 > 0 && bill25 > 0){
//                 bill50--;
//                 bill25--;
//             }else if(bill25 > 2){
//                 bill25 -= 3;
//             }else{
//                 return "NO";
//             }
//         }
//     }
//     return "YES"
// }

// console.log(tickets([25, 25, 50]))
// console.log(tickets([25, 100]))

// /*COOL ANSWER!!!*/

// function tickets(peopleInLine){
//     let [c25,c50,c100] = [0,0,0];
//     for(let v of peopleInLine) {
//       if(v===25) c25++;
//       if(v===50) {c50++; c25--;}
//       if(v===100) {c25--; c50>0?c50--:c25-=2;}
//       if(c25<0||c50<0) return 'NO'
//     }
//     return 'YES'
//   }

///////////////////
/*NEW PROBLEM*/
///////////////////

// function addLetters(...letters) {

//     console.log(letters)//the parameters get turned into an array with the name letters.

//     let lettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
//     let total = 0;

//     if (letters.length < 1){return "z"};

//     for( let i = 0; i < letters.length; i++ ){
//         total += lettersArray.indexOf(letters[i]) + 1;
//     }

//     console.log(total);

//     if(total < 26){
//         return lettersArray[total -1]
//     } else if(total % 26 === 0){
//         return "z"
//     } else{
//         return lettersArray[total % 26 -1]
//     }

//     return "not working";

// }

// console.log(addLetters("a", "b"))
// console.log(addLetters("a", "y"))
// console.log(addLetters("b", "y"))
// console.log(addLetters("b"))

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

// /*MY ANSWER*/

// let noSpace = (str) => {
//     let ans = ""
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== " "){
//             ans += str[i]
//         }
//     }
//     return ans
// }

// console.log(noSpace("a b 1 2"))
// console.log("ab12")

// /*COOL ANSWER!!!*/

// function noSpace(x){return x.split(' ').join('')}

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

// function calculate(str) {
//     const newStr = str.split("")
//     let sum = 0;
//     let currentNum = 1;

//     newStr.forEach((s)=>{

//         if (isNaN(parseInt(s))){
//             if( s === "p"){
//                 currentNum = 1
//             }
//             if(s === "m"){
//                 currentNum = -1
//             }
//         } else {
//             sum += s * currentNum
//         }
//     })
//     return sum;
// }

//     console.log(calculate("1plus2plus3plus4"))

/*COOL ANSWER!!!*/

//  function calculate(str) {
//     return eval(str.split("plus").join("+").split("minus").join("-")).toString();
//   }

//   console.log(calculate("1plus2plus3plus4"))

//   console.log(eval("2+2"))

//eval() is a global function in JavaScript that evaluates a specified string as JavaScript code and executes it.

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

// function well(x){
//     let g = 0;

//     x.forEach(e=>{
//         if(e === 'good'){
//             g++
//         }
//     });

//     switch(true){
//         case g< 1 :
//            return 'Fail!';
//         case g< 3 :
//            return 'Publish!';
//         default:
//            return 'I smell a series!'
//     }

//   }

//   console.log(well(['bad', 'bad', 'bad']))
//   console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))
//   console.log(well([]))

//const well = x => {
//   const good_count = x.filter(x => x == 'good').length;
//   return good_count < 1 ? 'Fail!' :
//          good_count < 3 ? 'Publish!' : 'I smell a series!';
// }

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

//Good question!!!

// function squaresNeeded(grains){
//   let amount = 1, i = 1;
//   if(!grains){return 0;}
//   while(amount < grains){
//       grains -= amount;
//       amount *= 2;
//       i++
//   }
//   return i;
// }

// console.log(squaresNeeded(9))

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

// function firstNSmallest(array, n){
//     let finalArr = [], sortedArr, origArr = [...array];
//     sortedArr = array.sort((a, b)=> a-b).slice(0, n);
//     origArr.forEach((e,i)=>{
//         if(sortedArr.includes(e)){
//             let ind = sortedArr.indexOf(e);
//             sortedArr.splice(ind, 1);
//             finalArr.push(e)
//         }
//     })
//     return finalArr
// }

//   console.log(firstNSmallest([1,2,3,1,2],3))

//   function firstNSmallest(array, n){
//     while(array.length != n) {
//       array.splice(array.lastIndexOf(Math.max(...array)), 1)
//       }
//       return array
//     }

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

//Takes in a string of letters and returns a string of sorted letters. No need to put in a sort equation as this is only needed for numbers.

// function sortGiftCode(code){
//     return code.split('').sort().join('');
//   }

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

/*REVIEW*/

//This one was tricky and I couldn't figure it out on my own. If we add the same string together twice and it has a repeating pattern than the index of the next copy of the string starting at the index one won't be the same as the length. If it is the same as the length it shows there is no repeating pattern because we just pick up the second string passed in.

//EXAMPLE: s = "abab" if we add (s+s) we get "abababab" if we try to find the index of the first case of s while starting at index one, we would get two because "ab[abab]ab" I added in the brackets to show where s is. In other words if there is a repeating pattern then there would be at least one instance of s before the start of the second s.

// function hasSubpattern(s){
//     console.log((s + s))
//     console.log((s + s).indexOf(s, 0))
//     console.log((s + s).indexOf(s, 1))
//     return (s + s).indexOf(s, 1) != s.length
// }

// console.log(hasSubpattern("abcabc"))

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

/*REVIEW*/

//On this kata I was supposed to take in a string that could have a repeating pattern but that the letters were possibly scrambled. The pattern that I saw was that if there were some type of repeating pattern than all letters must have at least one shared denominator greater than one. I made an obj that contained the charaters as keys and the amount of occurences as the values. I check to make sure that each character occured at least twice and calculated the max number of occurences, because that would be the starting point for my loop in the next phase. Then I looped over numbers starting at the max occurences and decremented after each loop until 2. If all characters shared the same denominator than it could be a scrambled pattern and I returned true. if I went through the loop and didn't find any shared denominator than I return a false.

// function hasSubpattern(string){
//     let lettersObj = {};
//     let strArr = string.split("");
//     let maxNumOfLetters = 0;

//     strArr.forEach((a)=>{
//         if(lettersObj.hasOwnProperty(a)){
//             lettersObj[a]++
//         }
//         else{
//             lettersObj[a] = 1
//         }
//     })

//     for(key in lettersObj){
//         if(lettersObj[key] === 1 ){
//             return false;
//         }
//         if(lettersObj[key] > maxNumOfLetters){
//             maxNumOfLetters = lettersObj[key];
//         }
//     }

//     for(let i = maxNumOfLetters; i > 1; i--){
//         let trigger = null;
//         for(key in lettersObj){
//             if(trigger === null || trigger === true){
//                 if(lettersObj[key]%i === 0){
//                     trigger = true;
//                 }else{
//                     trigger = false;
//                 }
//             }
//         }
//         if(trigger === true){
//             return true;
//         }
//     }
//     return false;
//   }

//   console.log(hasSubpattern('ab12a1b2'))

///////////////////
/*NEW PROBLEM*/
///////////////////

// function firstNonRepeated(s) {
//     let myObj = {};
//   for(let i = 0; i < s.length; i++){
//       if(myObj.hasOwnProperty(s[i])){
//           myObj[s[i]]++;
//       }else{
//         myObj[s[i]] = 1;
//       }
//   }

//   for(let i = 0; i < s.length; i++){
//     if(myObj[s[i]] === 1){
//         return s[i];
//     }
// }
//   return null;
// }

// console.log(firstNonRepeated("bab"))
// console.log(firstNonRepeated("abaababcaba"))
// console.log(firstNonRepeated("abcbc1"))
// console.log(firstNonRepeated("abab"))

///////////////////
/*NEW PROBLEM*/
///////////////////

// evens in ascending order and than odds in descending
// function menFromBoys(arr){
//     let men = [], boys = [];
//     arr.forEach(x=>{
//         if(x%2 === 0 && !men.includes(x)){
//             men.push(x);
//         }else if (x%2 !== 0 && !boys.includes(x)){
//             boys.push(x);
//         }
//     })
//     men.sort((a,b)=> a-b)
//     boys.sort((a,b)=> b-a)

//     return([...men, ...boys])
// }

// console.log(menFromBoys([20,33,50,20,34,43,46,100]))

///////////////////
/*NEW PROBLEM*/
///////////////////

// FIBONACCI

// function myFib(n){
//     let prev1=0, prev2=1, curr=0, i=1;
//     if(n === 1){console.log(1)}
//     else{
//         while(i < n){
//             curr = prev1 + prev2;
//             prev1 = prev2;
//             prev2 = curr;
//             i++;
//         }
//         console.log(`current: ${curr}`)
//     }
// }

// const myFib = x => {
//     const fibArr = [0,1]
//     for(let i = 2; i < x+1; i++){
//         fibArr[i] = fibArr[i-1] + fibArr[i-2]
//     }
//     return fibArr[x];
// }

// const myFib = x => {
//     const fibArr = [0,1];
//     for(let i = 2; i < x+1; i++){
//         fibArr[i] = fibArr[i-1] + fibArr[i-2];
//     }
//     return fibArr[x];
// }

// console.log(myFib(6))

// const myFib = x => {
//     let fibArr = [0, 1]
//     for(let i = 2; i < x; i++){
//         fibArr.push(fibArr[i-1] + fibArr[i-2])
//     }
//     return fibArr[x-1]
// }

// const myFib = (n) => {
//     while(n < 2){
//         return n
//     }
//     return myFib(n-1) + myFib(n-2);
// }
// console.log(myFib(0))
// console.log(myFib(1))
// console.log(myFib(2))
// console.log(myFib(3))
// console.log(myFib(7))
// console.log(myFib(9))

///////////////////
/*NEW PROBLEM*/
///////////////////

// FIZZ BUZZ

// const fizzBuzz = () => {
//     for(let i = 1; i <= 100; i++){
//         if(i%3 === 0 && i%5 === 0){
//             console.log("fizzbuzz")
//         } else if(i%3 === 0){
//             console.log("fizz")
//         } else if(i%5 === 0){
//             console.log("buzz")
//         } else {
//             console.log(i)
//         }
//     }
// };

// fizzBuzz();

// const fizzBuzz = (num) =>{
//     const num1 = 3, num2 = 5, num3 = num1 * num2, wrd1 = 'Fizz', wrd2 = 'Buzz', wrd3 = wrd1 + wrd2;
//     let ans = ""
//     const checkTrue = (a, b) =>{
//         return a%b === 0;
//     }
//     const retFunc = (x) => {
//         ans += x + "\n";
//     }
//     for(let i = 1; i <= num; i++){
//         switch(true){
//             case checkTrue(i, num3):
//                 retFunc(wrd3)
//                 break;
//             case checkTrue(i, num2):
//                 retFunc(wrd2)
//                 break;
//             case checkTrue(i, num1):
//                 retFunc(wrd1)
//                 break;
//             default:
//                 retFunc(i);
//         }
//     }
//     console.log(ans)
// }

// fizzBuzz(100)

///////////////////
/*NEW PROBLEM*/
///////////////////

//PALINDROME

// const myPalindrome = (str) => {
//     let  newStr = str.toLowerCase().split(" ").join("");
//     return  newStr.split("").reverse().join("") ===  newStr;
// }

// console.log(myPalindrome("Race car"))
// console.log(myPalindrome("eric"))

///////////////////
/*NEW PROBLEM*/
///////////////////

//Find the sum of the row on a pyramid of negative that starts at one
//ex:
// 1,
// 3, 5
// 7, 9, 11,
// 13, 15, 17, 19

// const rowSumOddNumbers = n => n**3
//Notice how they show exponentts with a double **, you could use a Math.pow(n, 3) as well.

///////////////////
/*NEW PROBLEM*/
///////////////////

//Return all of the friday the 13th in a given year.

//In we can use let sec = new Date().getSeconds() to to get the seconds .getMinutes(), .getHours()
//In this example we use .getDay which returns 0-6 where 5 equals Friday.

// function unluckyDays(year){
//     let unlucky = 0;
//     for (var i = 0; i < 12; i++) {
//       if(new Date(year, i, 13).getDay() === 5){
//         unlucky++;
//       }
//     }
//     return unlucky;
// }

///////////////////
/*NEW PROBLEM*/
///////////////////

//add the outer right number of nums increasing by one in a pyramid pattern.

// [1]
// 2,[3]
// 4,5,[6]
// 7,8,9,[10]

// const sumTriangularNumbers = (n) => {
//     let num = 1, incNum = 2, total = 1;

//     if(n<1)return 0;

//     for(let i = 1; i < n; i++){
//         num += incNum;
//         total += num;
//         incNum ++;
//     }

//     return total;
// }

/*COOL ANSWER*/

// function sumTriangularNumbers(n) {
//     return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
//   }

// console.log(sumTriangularNumbers(2))
// console.log(sumTriangularNumbers(3))
// console.log(sumTriangularNumbers(4))
// console.log(sumTriangularNumbers(-1))

///////////////////
/*NEW PROBLEM*/
///////////////////

// String.prototype.toAlternatingCase = function () {
//     let newWord = ""
//     for(let i = 0; i < this.length; i++){
//         if(this[i]=== this[i].toLowerCase()){
//             newWord += this[i].toUpperCase()
//         } else if(this[i]=== this[i].toUpperCase()){
//             newWord += this[i].toLowerCase()
//         } else {
//             newWord += this[i]
//         }
//     }
//     return newWord
//   }

// console.log('EricO'.toAlternatingCase())

///////////////////
/*NEW PROBLEM*/
///////////////////

//Logrithmic problem!

// function largestPower(n){
//     const logFunc = () => Math.log(n)/Math.log(3)
//     switch(true){
//     case n ===1:
//         return -1;
//     case n <= 3:
//         return 0;
//     case 3**logFunc().toFixed(5) === n:
//         return(Math.floor(logFunc()) -1)
//     default:
//         return Math.floor(logFunc());
//     }
// }

//   console.log("0 " + largestPower(0))
//   console.log("3 " + largestPower(3))
//   console.log("5 " + largestPower(5))
//   console.log("81 " + largestPower( 81))
//   console.log("82 " + largestPower( 82))

///////////////////
/*NEW PROBLEM*/
///////////////////

// const solution = (str) => str.split("").reverse().join("");

///////////////////
/*NEW PROBLEM*/
///////////////////

//reverse a sentence while the words maintain their order.

// function myRevSent(s){
//     return s.split("").reverse().join("").split(" ").reverse().join(" ")
// }

// console.log(myRevSent("Hi fam"))

///////////////////
/*NEW PROBLEM*/
///////////////////

// function distinctDigitYear(year) {
//     let newArr = []
//     for(let i = year; newArr.length < 4; i++){
//         let yStr = i + ""
//         if(!newArr.includes(yStr[0])){
//             newArr.push(yStr[0])
//             console.log("push 0 " + newArr + " " + i)
//             if(!newArr.includes(yStr[1])){

//                 newArr.push(yStr[1])
//                 console.log("push 1 " + newArr + " " + i)
//                 if(!newArr.includes(yStr[2])){

//                     newArr.push(yStr[2])
//                     console.log("push 2 " + newArr + " " + i)
//                     if(!newArr.includes(yStr[3])){
//                         console.log("final " + i)
//                         return i
//                     }
//                 }
//             }
//         }
//         newArr = [];
//     }
// }

// function distinctDigitYear(year) {
//     do{year++}while(new Set(year.toString()).size < 4);
//     return year;
//   }

//The Set object lets you store unique values of any type, whether primitive values or object references.

//   const newSet = new Set ("12");
// for(i of newSet){
//     console.log(i)
// }

///////////////////
/*NEW PROBLEM*/
///////////////////

//How to remove the first and last char of a string.

// function removeChar(str) {
//     return str.slice(1, -1);
//   }

//   console.log(removeChar("olaveson"))

///////////////////
/*NEW PROBLEM*/
///////////////////

// function getSize(w, h, d){
//     let ans = []
//     ans.push(w*h*2 + w*d*2 + h*d*2)
//     ans.push(w*h*d)
//     return(ans)
//   }

//   getSize(2, 2, 2)

///////////////////
/*NEW PROBLEM*/
///////////////////

// function inviteMoreWomen(L) {
//     let num = L.length
//     return(L.filter(e=> e === -1).length/num < 0.5 )
// }

//   console.log(inviteMoreWomen([1, -1, 1, 1, -1, 1]))
//   console.log(inviteMoreWomen([1, -1, -1]))

///////////////////
/*NEW PROBLEM*/
///////////////////

// function wordsToMarks(string){
//     let ltrArr = "0abcdefghijklmnopqrstuvwxyz".split(""), score = 0;
//     string.split("").forEach(e => {
//         score += ltrArr.indexOf(e)
//     });
//     return(score)
// }

// console.log(wordsToMarks("attitude"))

///////////////////
/*NEW PROBLEM*/
///////////////////

//Reverse a string, reverse is a prototype of an array, not a string.

// var str = "eric"

// str = str.reverse()
// console.log(str)

///////////////////
/*NEW PROBLEM*/
///////////////////
// new debounce

// const dbController = (()=>{
//     //define variables
//     const ts = 2000;

//     //cache the dom/dom strings
//     const input = document.querySelector('.debounce');

//     //debounce closure
//     const debounce = (cb) => {
//         let timer = null;
//         return function(e){
//             const thisDB = this
//             clearTimeout(timer)
//             timer = setTimeout(
//                 ()=> cb(e), ts
//             );
//         };
//     };

//     const setup = () => {
//         //event listener
//         input.addEventListener('keyup', debounce((e)=>{
//             console.log(input.value, e.key, this);
//         }));
//     };
//     return setup
// })()

// const timeSeconds = 2000;

// const input = document.querySelector(".debounce");

// const debounce = cb => {
//     let timer = null;
//     return function (e){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             cb(e)
//         }, timeSeconds)
//     }

// }

// input.addEventListener('keyup', debounce(e=>console.log(input.value)))

// dbController()

///////////////////
/*NEW PROBLEM*/
///////////////////

//Capitalize the first letter of each word in a string
//Go over .substring() / .substr() is depricated...

// const caps = str =>{
//     strArr = str.toLowerCase().split(" ");

//     let capStr = strArr.map(e=>{
//         return e.substring(0, 1).toUpperCase() + e.substring(1);
//     })

//     return capStr.join(" ");
// }

// const caps = str =>
//     str
//         .toLowerCase()
//         .split(' ')
//         .map(word=> word[0].toUpperCase() + word.substring(1))
//         .join(' ')

// console.log(caps("hello my namE is ERIC and I am a PROgrammer"))

///////////////////
/*NEW PROBLEM*/
///////////////////

//given the argument n find out what layer n is in in a continuous spiral square.

// 05 04 03
// 06 01 02
// 07 08 09

// const spiralNum = (n) => {
//     let total = 1, layer = 1, incNum = 0;
//     while(n > total){
//         incNum += 8;
//         total += incNum;
//         layer++;
//     }
//     return layer
// }

// console.log(spiralNum(1))
// console.log(spiralNum(5))
// console.log(spiralNum(9))
// console.log(spiralNum(10))
// console.log(spiralNum(15))
// console.log(spiralNum(25))

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

//find the first non-consecutive number

// function firstNonConsecutive (arr) {
//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i] !== arr[i+1] - 1 ){
//             return arr[i+1]
//         }
//     }
//     // arr.forEach((e, i, arr)=>{
//     //     if(e !== arr[i+1]-1){
//     //         return arr[i+1]
//     //     }
//     // })
//     return null
// }

/*COOL ANSWER*/

//I love how this answer thinks differently about how to arrive at a particular answer. It starts off at

// function firstNonConsecutive (arr) {
//     let result = arr.find((val, index) => val !== index + arr[0]);

//     return (isNaN(result)) ? null : result;
// }

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
// console.log(firstNonConsecutive([1,2,3]))

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

//convert a number to binary and find the longest string of zeros with ones on each end.

//we can use the toString(2) to make a number binary or use a base of whatever we would like. The two in the parens is what binary uses.

// function gap(num) {
//     let counter = 0, max = 0, oneStart = false;
//     num.toString(2).split("").forEach(e => {
//         if(!oneStart){
//             if(e === "1"){
//                 oneStart = true;
//             }
//         }else if(oneStart){
//             if(e === "0"){
//                 counter++;
//             }else if(e === "1"){
//                 if(counter > max){
//                     max = counter;
//                 }
//                 counter = 0;
//             }
//         }
//     });
//     return max;
// }

// console.log(gap(9))
// console.log(gap(529));
// // console.log((3).toString(2))

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

// const number = arr => arr.map((e, i)=> `${++i}: ${e}`)

//Refactored into smaller code and made into an arrow function.

///////////////////
/*NEW PROBLEM*/
///////////////////

// const twoSort = (s) =>  s.sort().shift().split('').join("***");

// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));

///////////////////
/*NEW PROBLEM*/
///////////////////

// function bmi(weight, height) {
//     let val = (weight/(height*height))
//     if(val <= 18.5){return 'Underweight'}
//     else if(val <= 25.0){return "Normal"}
//     else if(val <= 30.0){return "Overweight"}
//     else{return "Obese"};
//   }

//   console.log(bmi(80, 1.80))

///////////////////
/*NEW PROBLEM*/
///////////////////

// const maxLetter = arr => {
//     let maxNumOccurence = 0, ans = "";
//     const letterObj = {};
//     arr.forEach(letter => {
//         console.log(letter)
//         let objVal = letterObj[letter];
//         if(letterObj.hasOwnProperty(letter)){
//             objVal++;
//         }else{
//             objVal = 1;
//         }
//         console.log(objVal)
//     });
//     console.log(letterObj)
//     for(const objKey in letterObj){
//         const objVal = letterObj.objKey;
//         if(objVal > maxNumOccurence){
//           ans = objKey;
//           maxNumOccurence = objVal;
//         }else if(objVal === maxNumOccurence){
//             ans += `, ${obj}`;
//         }
//     }
//     return ans;
// }

// const maxLetter = arr =>{
//     let max = 0, ans ='';
//     const myObj = {};
//     arr.forEach(e=>{
//         if(myObj[e]){
//             myObj[e]++;
//         }else{
//             myObj[e] = 1;
//         }
//     })
//     Object.keys(myObj).forEach(key=>{
//         let num = myObj[key];
//         if(num > max){
//             ans = key;
//             max = num;
//         }else if(num === max){
//             ans += `, ${key}`
//         }
//     })
//     return ans;
// }

// const maxLetter = arr =>{
//     let max = 0;
//     const myObj = {};
//     return arr.reduce((total, letter)=>{
//         if(myObj[letter]){
//             myObj[letter]++;
//         }else{
//             myObj[letter] = 1;
//         }if(myObj[letter] === max){
//             total += `, ${letter}`
//         }if(myObj[letter] > max){
//             total = letter;
//             max = myObj[letter];
//         }
//         return total;
//     }, "")
// }

// console.log(maxLetter(['a', 'b', 'c', 'a']))
// console.log(maxLetter(['a', 'b', 'c', 'c', 'a']))

// Hey Kekoa,
//  I want to thank you for taking the time to interview/get to know me. It was a pleasure talking with you and the team. Our conversation made me even more excited to potentially work at TradeSation. If you have time please check out:
// https://codepen.io/ericolaf/pen/RwNboGx

// Thank you,
// Eric

///////////////////
/*NEW PROBLEM*/
///////////////////

// const testit = (a, b) =>{
//     const myObj = {}
//     const ans = [...a, ...b].sort((a, b)=> a-b);
//     const finalAns = [];
//     ans.forEach(e=>{
//         if(myObj[e]){
//             myObj[e]++
//         }else{
//             myObj[e] = 1;
//         }
//     })
//     for(const key in myObj){
//         if(myObj[key]%2 === 0){
//             finalAns.push(parseInt(key), parseInt(key));
//         }else{
//             finalAns.push(parseInt(key))
//         }
//     }
//     return finalAns;
// };

// const testit = (a, b) =>{
//      const a2 = new Set(a), b2 = new Set(b);
//      return [...a2, ...b2].sort((a,b)=>a-b);
// };

// console.log(testit([1,2,2,2],[5,3,4,2]));

///////////////////
/*NEW PROBLEM*/
///////////////////

// var countDeafRats = function(town) {
//     const townArr = town.split("")
//     let foundP = false;
//     let deafRats = 0;
//     let beforeTail = 0;
//     let beforeBody = 0;
//     let afterTail = 0;
//     let afterBody = 0;
//     townArr.forEach(e=>{
//         if(!foundP){
//             if(e==="P")foundP = true;
//             if(e==="~")beforeTail +=1;
//             if(e==="O")beforeBody +=1;
//             if(beforeBody > beforeTail)deafRats +=1;
//         }else{
//             if(e==="~")afterTail +=1;
//             if(e==="O")afterBody +=1;
//             if(afterTail > afterBody)deafRats +=1;
//         }
//     })
//     return deafRats;
//   }

//   console.log(countDeafRats("~O~O~O~O P"));

// const myObj = {
//     one: 1,
//     two: 2,
//     three: 'three'
// }

// for(const key in myObj){
//     console.log(myObj[key]);
// }

// for(const key in myObj){
//     console.log("again, " + myObj[key]);
// }

// console.log(key)

///////////////////
/*NEW PROBLEM*/
///////////////////

// const generateRange = (min, max, step) => {
//     const arr = [];
//       for(let i = min; i <= max; i+= step){
//           arr.push(i);
//       }
//       return arr;
// }

// console.log(generateRange(2, 10, 2))

///////////////////
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

///////////////////
/*NEW PROBLEM*/
///////////////////

//FIND ALL OCCURENCES OF THE LETTER IN THE STRING AND RETURN THE NUMBER
//Another good answer could have been done with filter.

//MY ANSWER
// const strCount = (str, ltr) =>
//   str
//   .split("")
//   .reduce((acc, el)=>{
//     if(el === ltr){
//       acc++
//     } return acc}, 0);

// OTHER ANSWER
// const strCount = (str, ltr) =>
//     str.split(ltr).length - 1

///////////////////
/*NEW PROBLEM*/
///////////////////

//SUM UP TWO PPG KEYS IN NBA PLAYER OBJECTS
// const sumPPG = (pOne, pTwo, key='ppg')=> pOne[key] + pTwo[key]

///////////////////
/*NEW PROBLEM*/
///////////////////

//////
// a >>= 1;
//This is a right shift operator where we shift the binary number the amount of bits(digits) to the right as the specified number.

// function testit(n) {
//     var s = 0;
//     while (n) {
//       s += n & 1;
//       n >>= 1;
//     }
//     return s;
// }

///////////////////
/*NEW PROBLEM*/
///////////////////

//MY ANSWER
// function top3(products, amounts, prices) {
//     let total = [];
//     products.forEach((el, ind)=>{
//         let totalPrice = prices[ind] * amounts[ind];
//         total.push([totalPrice, el])
//     })
//     total.sort((a, b)=>{
//         return b[0] - a[0];
//     })
//     let final = total.map(el=> el.pop());
//     return final.slice(0, 3);
//   }

//ANOTHER ANSWER

// const top3 = (products, amounts, prices) =>
//   products
//     .map((name, index) => ({ name, index, revenue: amounts[index] * prices[index] }))
//     .sort((a, b) => b.revenue - a.revenue || a.index - b.index)
//     .slice(0, 3)
//     .map(product => product.name)

//   console.log(top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399]))

//   console.log(top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]))

///////////////////
/*NEW PROBLEM*/
///////////////////
//Find all occurences of n and return an array of their index.

//MY ANSWER
// const findAll = (a, n) => {
//     const newArr = [];
//     a.forEach((x,i)=>{if(x===n){newArr.push(i)}});
//     return newArr
//   }

//MY NEW ANSWER
// const findAll = (a, n) => a.reduce((acc, x, i)=>{
//     if(x === n){acc.push(i)}
//     return acc;
//   },[])

//MY NEW NEW ANSWER
// const findAll = (arr, n) => arr
//   .reduce((acc, x, i)=> x === n ? [...acc, i] : acc,[])

///////////////////
/*NEW PROBLEM*/
///////////////////
//From an array of ages find the oldest, youngest, and the difference and return them in an array.

//MY ANSWER
// const differenceInAges = a => [Math.min(...a), Math.max(...a), (Math.max(...a) - Math.min(...a))]

//ANOTHER ANSWER
// const differenceInAges = a => (min = Math.min(...a),max = Math.max(...a),[min,max,max-min])

///////////////////
/*NEW PROBLEM*/
///////////////////
//Genetic crossover at a certain given point.

//MY ANSWER
// const crossover = (c1, c2, i) => {
//     let t1 = c1.slice(i, c1.length);
//     let t2 = c2.slice(i, c2.length);
//     c1 = c1.slice(0, i);
//     c2 = c2.slice(0, i);
//     let a1 = c1 + t2;
//     let a2 = c2 + t1;
//     return [a1, a2];
// }

//ANOTHER ANSWER
// const crossover = (chromosome1, chromosome2, index) => {
//     return [
//       chromosome1.substring(0, index) + chromosome2.substring(index),
//       chromosome2.substring(0, index) + chromosome1.substring(index)
//     ]
//   };

// console.log(crossover('010', '101', 1))

///////////////////
/*NEW PROBLEM*/
///////////////////
//RETURN TRUE IF THERE IS ONLY ONE TRUE THAT RETURNS WHEN EACH ITEM IN THE ARRAY IS RAN THROUGH THE GIVEN FUNCTION.

//MY ANSWER
// function one(arr, fun){
//     let times = 0;
//     arr.forEach(x=>{
//       if(fun(x)){
//         times++
//       }
//     })
//     return times === 1;
//   }

//ANOTHER ANSWER
// const one = (arr, fun) => arr.filter(fun).length === 1;

///////////////////
/*NEW PROBLEM*/
///////////////////
//FIND THE MINIMUM OF EACH SUB ARRAY AND RETURN THE SUM OF MINIMUMS.

//MY ANSWER
// const sumOfMinimums = arr => arr
//   .reduce((acc, el)=>
//     acc += Math.min(...el), 0);

//ANOTHER ANSWER
//COULDN'T FIND ONE BETTER :)

// Vanguard - Mutual fund vs Index Fund

// Buy and sell

// ETF

// merrylledge.com

// Zell

///////////////////
/*NEW PROBLEM*/
///////////////////
//DELETE ALL TEXT ON THAT LINE THAT COMES AFTER THE MARKER.

//MY ANSWER
// function solution(input, markers) {
//     let arr = input.split("\n");

//     let ans1 = arr.map(x=>{
//         let ind = [];
//         markers.forEach(y=>{
//             let i = x.indexOf(y);
//             if( i !== -1) ind.push(i)
//         })
//         let min = Math.min(ind);
//         console.log(min);
//         if(min)return x.substring(0, min).trim();
//         return x.trim();
//     })

//     return ans1.join('\n');
// }

//ANOTHER SOLUTION
// function solution(input, markers){
//     return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
//   }

// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))

///////////////////
/*NEW PROBLEM*/
///////////////////

//HARD PROBLEM!!!
// function balancedParens(n) {
//     let all = [];
//     let iteration = 0;
//     function parens(left, right, str) {

//         console.log('iteration ' + (iteration +=1), '   left ' + left, 'right ' + right, 'str ' + str)

//         // if no more brackets can be added then add the final balanced string
//         if (left === 0 && right === 0) {
//             all.push(str);
//             console.log('HIIIIITTTT')
//         }

//         // if we have a left bracket left we add it
//         if (left > 0) {
//             console.log('Before, Left', '   left ' + left, 'right ' + right, 'str ' + str)
//             parens(left - 1, right + 1, str + "(");
//             console.log("After, Left", '   left ' + left, 'right ' + right, 'str ' + str)
//         }
//         console.log('MIDDLE')
//         // if we have a right bracket left we add it
//         if (right > 0) {
//             console.log('before, Right', '   left ' + left, 'right ' + right, 'str ' + str)
//             parens(left, right - 1, str + ")");
//             console.log("After, Right", '   left ' + left, 'right ' + right, 'str ' + str)
//         }
//         console.log("END!!!")

//     };
//     parens(n, 0, "");
//     return all;
// }

// console.log(balancedParens(2));

///////////////////
/*NEW PROBLEM*/
///////////////////

// conversionRates = {
//     "Argentinian Peso": 10,
//     "Armenian Dram": 478,
//     "Bangladeshi Taka": 1010010,
//     "Croatian Kuna": 110,
//     "Czech Koruna": 10101,
//     "Dominican Peso": 110000,
//     "Egyptian Pound": 18,
//     "Guatemalan Quetzal": 111,
//     "Haitian Gourde": 1000000,
//     "Indian Rupee": 63,
//     "Japanese Yen": 1101111,
//     "Kenyan Shilling": 1100110,
//     "Nicaraguan Cordoba": 11111,
//     "Norwegian Krone": 1000,
//     "Philippine Piso": 110010,
//     "Romanian Leu": 100,
//     "Samoan Tala": 11,
//     "South Korean Won": 10000100011,
//     "Thai Baht": 100000,
//     "Uzbekistani Som": 8333,
//     "Venezuelan Bolivar": 1010,
//     "Vietnamese Dong": 101100000101101
//   }

// function convertMyDollars(usd, currency) {
//     const vowels = ["A", "E", "I", "O", "U", "Y"],
//         s = currency[0].toUpperCase(),
//         c = conversionRates[currency];
//     let moneyFinal;

//     !vowels.includes(s) ?
//         moneyFinal = parseInt(c, 2) * usd :
//         moneyFinal = usd * c;

//     return `You now have ${moneyFinal} of ${currency}.`;
// }

// console.log(convertMyDollars(7, "Armenian Dram"))
// console.log(convertMyDollars(25, "Bangladeshi Taka"))

///////////////////
/*NEW PROBLEM*/
///////////////////

// function moreZeros(s){
//   const s2 = s.split("");
//   const final = [];
//   const s3 = s2.map(x=> x.charCodeAt(0).toString(2));
//   s3.forEach((a, i) => {
//     let count = 0;
//     a.split("")
//     .forEach(b=>{
//         b === "0" ? count++ : count--;
//     })
//     if(count > 0){
//         final.push(s2[i])
//     }
// })
//   return [...new Set(final)];
// }

// console.log(moreZeros('abcdeaaa'))
// console.log(moreZeros('Great job!'))

///////////////////
/*NEW PROBLEM*/
///////////////////

//NOT FINISHED
// function next(n) {
//     const s2 = n.toString().split("");
//     let nums = '';//1
//     s2.forEach((x, i)=>{
//         if( i === s2.length -1 && i !== 0){
//             i++;
//         }
//         i++;
//         nums += x;
//         nums = parseInt(nums);
//         while(nums % i !== 0){nums++}
//         nums.toString();
//     })
//     return parseInt(nums);
//   }

//   console.log(next(10));

///////////////////
/*NEW PROBLEM*/
///////////////////

// const sakuraFall = v => (v >= 0 ? 400 / v : 0);

///////////////////
/*NEW PROBLEM*/
///////////////////
//Make a polyfill for obectIs

// const coolestObjectIs = (x, y) => {
//   function shallowEqual(object1, object2) {
//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);

//     if (keys1.length !== keys2.length) {
//       return false;
//     }

//     for (let key of keys1) {
//       if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
//     console.log(object1, object2);
//     return true;
//   }
//   console.log("test = 0", x === 0);
//   if (x === 0) {
//     return 1 / x === 1 / y;
//   }
//   if (typeof x === "object") {
//     shallowEqual(x, y);
//   }
//   return x + "" === y + "";
// };

// console.log("TRUE===========");
// console.log(coolestObjectIs(NaN, NaN));
// console.log(coolestObjectIs(-0, -0));
// console.log(coolestObjectIs(true, true));
// console.log(coolestObjectIs(3, 3));
// console.log(coolestObjectIs({ prop: "string" }, { prop: "string" }));

// console.log("FALSE==========");
// console.log(coolestObjectIs(NaN, null));
// console.log(coolestObjectIs(0, -0));
// console.log(coolestObjectIs("0", "-0"));
// console.log(coolestObjectIs(true, "me"));
// console.log(coolestObjectIs(3, true));
// console.log(coolestObjectIs({ prop: "string" }, { prop: "string2" }));
// console.log(coolestObjectIs({ prop: "string" }, "hey"));

///////////////////
/*NEW PROBLEM*/
///////////////////
//Different neighbors

// const solve = str => {
//   const ans = str
//     .split("")
//     .reduce(
//       (a, b) =>
//         a.x[a.x.length - 1] === b ? { ...a, y: a.y + 1 } : { ...a, x: a.x + b },
//       { x: "0", y: 0 }
//     );
//   return ans.y;
// };

// console.log(solve("RRGGBB"));
// console.log(solve("RGBRGB"));
// console.log(solve("BGRBBGGBRRR"));

///////////////////
/*NEW PROBLEM*/
///////////////////
//Mirror function

// const mirror = data => {
//   data.sort((a, b) => a - b);
//   const highNum = data.pop();
//   return [...data, highNum, ...data.reverse()];
// };

// console.log(mirror([1, 3, 2]));

///////////////////
/*NEW PROBLEM*/
///////////////////
//consecutive pairs

// const pairs = arr => {
//   let numPairs = 0;
//   for (let i = 0; i < arr.length; i += 2) {
//     if (Math.abs(arr[i] - arr[i + 1]) === 1) {
//       numPairs++;
//     }
//   }
//   return numPairs;
// };
// console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));
// console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));
// console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]));

///////////////////
/*NEW PROBLEM*/
///////////////////
//String Matching

// const solve = (a, b) => {
//   console.log(a,b)
//   if(!a.split("").includes('*')){
//     return a === b;
//   }
//   let a2 = a.split("*");

//   let b2 = b.split(a2[0]);
//   let b3 = '';
//    a2[1] = a2[1] || '';
//   if(b2[1]){
//     b3 = b2[1].split(a2[1])[0];
//   }
//   if (a2[0] + b3 + a2[1] === b) {
//     return true;
//   }
//   return false;
// };

//OTHERS ANSWERS
// solve=(a,b)=>new RegExp('^'+a.replace('*','.*')+'$').test(b)

// console.log(solve("code*s", "codewars"));
// console.log(solve("codewar*s", "codewars"));
// console.log(solve("*s", "codewars"));
// console.log(solve("aa", "aaa"));

///////////////////
/*NEW PROBLEM*/
///////////////////
// const fix = p =>
//   !p
//     ? p
//     : p
//         .split(". ")
//         .map(x => x[0].toUpperCase() + x.slice(1))
//         .join(". ");

// console.log(fix("hello. my name is inigo montoya."));

///////////////////
/*NEW PROBLEM*/
///////////////////
//Least Larger

// const leastLarger = (a, i) => {
//   const target = a[i];
//   let diff = Infinity;
//   let ans = null;
//   a.forEach(e => {
//     if (e > target && e - target < diff) {
//       ans = e;
//       diff = e - target;
//     }
//   });
//   return ans === null ? -1 : a.indexOf(ans);
// };

// console.log(leastLarger([4, 1, 3, 5, 6], 0));
// console.log(leastLarger([4, 1, 3, 5, 6], 4));

// ANOTHER ANSWER

// function leastLarger(a, i) {
//     const targetVal = a[i]
//     const largerVals = a.filter(num => num > targetVal)
//     const leastLargeVal = Math.min(...largerVals)

//     return a.findIndex(num => num === leastLargeVal)
// }

///////////////////
/*NEW PROBLEM*/
///////////////////

// const repeats = arr => {
//   let obj = {};
//   arr.forEach(x => {
//     if (obj[x]) {
//       obj[x] += 1;
//     } else {
//       obj[x] = 1;
//     }
//   });
//   let final = 0;
//   for (key in obj) {
//     if (obj[key] === 1) {
//       final += parseInt(key);
//     }
//   }
//   return final;
// };

// console.log(repeats([4, 5, 7, 5, 4, 8]));

// ANOTHER ANSWER

// function repeats(arr){
//     return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
//   };

///////////////////
/*NEW PROBLEM*/
///////////////////
//Square each number in the array and add it to the total. Use Reduce!

// const squareSum = a => a.reduce((t, x) => (t += x * x));

// console.log(squareSum([1, 2]));
// console.log(squareSum([0, 3, 4, 5]));

// ANOTHER ANSWER

///////////////////
/*NEW PROBLEM*/
///////////////////
//

// const flip = (d, a) => {
//   if (d === "R") {
//     return a.sort((a, b) => a - b);
//   }
//   return a.sort((a, b) => b - a);
// };

// console.log(flip("R", [3, 2, 1, 2]));

// // ANOTHER ANSWER
// const flip = (d, a) => a.sort((x, y) => (d === "R" ? x - y : y - x));

///////////////////
/*NEW PROBLEM*/
///////////////////
//HARD PROBLEM!!!
//REDO

// const kochCurve = n => {
//     const single = [60, -120, 60]
//     const ans = []
//     if(n === 0){
//         return []
//     }
//     for(let i = 0; i <= n; i++){
//         ans =
//     }
// }

// function kochCurve(n) {
//   let x = [];
//   while (n--) {
//     console.log("n= ", n, " 1) x ===>\n", x);
//     x = [...x, 60, ...x, -120, ...x, 60, ...x];
//     console.log("2) x ===>\n", x);
//   }
//   return x;
// }

// console.log(kochCurve(2));

///////////////////
/*NEW PROBLEM*/
///////////////////
//Total sum of two arrays

// const arrayPlusArray = (a, b) => [...a, ...b].reduce((t, x) => (t += x));

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

///////////////////
/*NEW PROBLEM*/
///////////////////

// const oddOrEven = arr => {
//   if (arr.length === 0) {
//     return "even";
//   } else if (arr.length === 1 && arr[0] === 0) {
//     return "even";
//   }
//   const x = arr.reduce((a, b) => a + b);
//   return x % 2 ? "odd" : "even";
// };

// console.log(oddOrEven([1, 2, 3]));

///////////////////
/*NEW PROBLEM*/
///////////////////

// const fizzBuzz = () => {
//   for (let i = 0; i < 101; )
//     console.log((i++ % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
// };

// fizzBuzz();

///////////////////
/*NEW PROBLEM*/
///////////////////

// const kochCurve = n => {
//   let x = [];
//   while (n--) {
//     x = [...x, 60, ...x, -120, ...x, 60, ...x];
//   }
//   return x;
// };

// console.log(kochCurve(2));

///////////////////
/*NEW PROBLEM*/
///////////////////
//Alpabet symetry

// const solve = arr => {
//   const al = "abcdefghijklmnopqrstuvwxyz".split("");
//   const ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     const numAns = arr[i]
//       .toLowerCase()
//       .split("")
//       .reduce((t, x, j) => {
//         console.log(al[j], x);
//         if (al[j] === x) {
//           t++;
//         }
//         return t;
//       }, 0);
//     ans.push(numAns);
//   }
//   return ans;
// };

// const solve = arr => {
//   const al = "abcdefghijklmnopqrstuvwxyz".split("");
//   const ans = [];
//   arr.forEach(word => {
//     const numAns = word
//       .toLowerCase()
//       .split("")
//       .reduce((t, x, j) => {
//         console.log(al[j], x);
//         if (al[j] === x) {
//           t++;
//         }
//         return t;
//       }, 0);
//     ans.push(numAns);
//   });
//   return ans;
// };

// console.log(solve(["abode", "ABd"]));

///////////////////
/*NEW PROBLEM*/
///////////////////
//ONE LINE FIZZ BUZZ

// const fizzBuzz = () => {
//   for (let i = 0; i < 101; ) {
//     console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "BUZZ") || i);
//   }
// };

// fizzBuzz();

///////////////////
/*NEW PROBLEM*/
///////////////////

// const minValue = arr => {
//   const arr2 = new Set(arr);
//   return [...arr2].sort((a, b) => a - b);
// };

//EVEN SHORTER
// const minValue = arr =>
//   parseInt([...new Set(arr)].sort((a, b) => a - b).join(""));

// console.log(minValue([1, 3, 1]));

///////////////////
/*NEW PROBLEM*/
///////////////////
//PRODUCT OF ALL NUMBERS BESIDES ARR[I].

// const productArray = a =>
//   a.map((x, i) => a.reduce((t, n, j) => (i !== j ? (t *= n) : t), 1));

// console.log(productArray([12, 20]));
// console.log(productArray([3, 27, 4, 2]));

///////////////////
/*NEW PROBLEM*/
///////////////////
//Is the num automorphic??

// const auromorphic = n => {
//   return n == (n*n).toString().split().splice(-n.length) ?
// }

// const automorphic = n => {
//   const sq = n * n;
//   n = n.toString();
//   const end = sq
//     .toString()
//     .split("")
//     .slice(-n.length);

//   return n === end.join("") ? "Automorphic" : "Not!!";
// };

//ANOTHER ANSWER THAT IS SHORTER
// const automorphic = n => (`${n ** 2}`.endsWith(n) ? `Automorphic` : `Not!!`);

// console.log(automorphic(6));
// console.log(automorphic(1));
// console.log(automorphic(22));

///////////////////
/*NEW PROBLEM*/
///////////////////

// const arrayLeaders = nums => {
//   const obj = nums.reverse().reduce(
//     (t, x) => {
//       if (x > t.sum) {
//         console.log(x);
//         t.arr.unshift(x);
//       }
//       t.sum += x;
//       return t;
//     },
//     { sum: 0, arr: [] }
//   );
//   return obj.arr;
// };

// console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));

///////////////////
/*NEW PROBLEM*/
///////////////////
//REVERSED PARENTHESIS

// const solve = s => {
//   s = s.split("");
//   let count = 0;
//   let errors = 0;
//   if (s.length % 2) {
//     return -1;
//   }
//   s.forEach(p => {
//     if (p == "(") {
//       count += 1;
//     } else {
//       count -= 1;
//     }
//     if (count < 0) {
//       errors += 1;
//     }
//   });
// };

// function solve(s) {
//   if (s.length % 2) return -1;
//   var t = 0,
//     d = 0;
//   for (let c of s) {
//     if (c === "(") d++;
//     else if (d) d--;
//     else {
//       t++;
//       d++;
//     }
//   }
//   return t + d / 2;
// }

// console.log(solve("(()"));
// console.log(solve("())((("));

///////////////////
/*NEW PROBLEM*/
///////////////////
//FIZZZZZ
// const fb = () => {
//   for (let i = 0; i < 101; ) {
//     console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "BUZZ") || i);
//   }
// };
// fb();

///////////////////
/*NEW PROBLEM*/
///////////////////
//Reverse the words

// const reverseWords = s => {
//   return s
//     .split(" ")
//     .reverse()
//     .join(" ");
// };

// const reverseWords = s =>
//   s
//     .split(" ")
//     .reverse()
//     .join(" ");

// console.log(reverseWords("yoda doesn't speak like this"));

///////////////////
/*NEW PROBLEM*/
///////////////////

// const minSum = arr => {
//   arr.sort((a, b) => a - b);
//   let ans = 0;
//   while (arr.length > 0) {
//     ans += arr.pop() * arr.shift();
//   }
//   return ans;
// };

// const minSum = arr =>
//   arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

// console.log(minSum([5, 4, 2, 3]));
// console.log(minSum([12, 6, 10, 26, 3, 24]));

///////////////////
/*NEW PROBLEM*/
///////////////////
//Two Programmers and gold

// const distributionOf = g => {
//   const ans = [0, 0];
//   let change = true;
//   while (g.length > 0) {
//     let first = g[0],
//       last = g[g.length - 1];
//     if (first > last) {
//       if (change) {
//         ans[0] += first;
//       } else {
//         ans[1] += first;
//       }
//       g.shift();
//     } else if (first < last) {
//       if (change) {
//         ans[0] += last;
//       } else {
//         ans[1] += last;
//       }
//       g.pop();
//     } else {
//       let firstNext = g[1],
//         lastNext = g[g.length - 2];
//       if (firstNext > lastNext) {
//         if (change) {
//           ans[0] += last;
//         } else {
//           ans[1] += last;
//         }
//         g.pop();
//       } else {
//         if (change) {
//           ans[0] += first;
//         } else {
//           ans[1] += first;
//         }
//         g.shift();
//       }
//     }
//     change = !change;
//   }
//   return ans;
// };

function distributionOf(gold) {
  let pot = [...gold];
  console.log({ pot });
  for (let i = 1; i < gold.length; i++) {
    for (let j = 0; j < gold.length - i; j++) {
      pot[j] = Math.max(gold[j] - pot[j + 1], gold[j + i] - pot[j]);
    }
  }
  let sum = gold.reduce((x, y) => x + y, 0);
  let a = (sum + pot[0]) / 2;
  console.log({ sum });
  console.log({ a });
  return [a, sum - a];
}

console.log(distributionOf([4, 7, 2, 9, 5, 2]));
