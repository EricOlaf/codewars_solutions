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

//When using a ternary you write return first then the condition. If you want two options you go with ? :, but if you want only and if you use a &&.

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
//             return 'Fail!';
//         case g< 3 :
//         return 'Publish!';
//         default:
//         return 'I smell a series!'
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

// const myFib = (n) => {
//     const fibArr = [0,1]
//     for(let i=2; i < n+1; i++){
//         fibArr.push(fibArr[i-1] + fibArr[i-2]);
//     }
//     return(fibArr[n])
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
//     let ans = [];
//     for(let i = 1; i <= 100; i++){
//         if(i%3 === 0 && i%5 === 0){
//             ans.push("fizzbuzz")
//         } else if(i%3 === 0){
//             ans.push("fizz")
//         } else if(i%5 === 0){
//             ans.push("buzz")
//         } else {
//             ans.push(i)
//         }
//     }
//     return ans
// };

// console.log(fizzBuzz());

// const fizzBuzz = (n1, n2) => {
//     //variables
//     const mult = n1*n2; multAns = "fizzbuzz"; oneAns = "fizz"; twoAns = "buzz";

//     //function to find if a is divisible by b with no remainder and returns true or false.
//     const equal = (a, b) => {
//         return a%b === 0;
//     }

//     //Shorter function for console.log and enables dry.
//     const cl = (x) => {
//         console.log(x)
//     }

//     for(let i = 1; i <=100; i++){
//         switch(true){
//             case equal(i, mult) :
//                 cl(multAns);
//                 break;
//             case equal(i, n1) :
//                 cl(oneAns);
//                 break;
//             case equal(i, n2) :
//                 cl(twoAns);
//                 break;
//             default : 
//                 cl(i);
//         }
//     }
// }

// fizzBuzz(3,5)

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

function unluckyDays(year){
    let unlucky = 0;
    for (var i = 0; i < 12; i++) {
      if(new Date(year, i, 13).getDay() === 5){
        unlucky++;
      }
    }
    return unlucky;
}

