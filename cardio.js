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
const strFunc = str => {
    let lngWrd = 0;
    return str.split(" ").reduce((ans, wrd)=>{
        const ln = wrd.length
        if(ln > lngWrd){
            lngWrd = ln;
            return wrd;
        }else if(ln === lngWrd){
            return(`${ans}, ${wrd}`);
        }
    }, "")
}
console.log(strFunc("My name is Eric. howdy party dudes"))



//CHALLENGE #2


//CHALLENGE #3


//CHALLENGE #4