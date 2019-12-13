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


console.log("final ANSWER: ", maxChar("javascriptjptt"))


// return Object.keys(myObj).reduce((ans, letter)=>{
    //     console.log(ans, letter);
    //     if(myObj[letter] > total){
    //         total = myObj[letter];
    //         console.log("first hit")
    //         return ans = `${letter}`;
    //     }
    //     else if(myObj[letter] === total){
    //         console.log("second hit")
    //         return ans +", " + letter;
    //     }
    //         return ans;
    // }, "")

//CHALLENGE 6: 

//const revStr = () => {}