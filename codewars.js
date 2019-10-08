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

// let sumOfDifferences = (arr) => {
//     return arr.length > 1 ?
//     Math.max(...arr) - Math.min(...arr) :
//     0
// }

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


//Testing, 123