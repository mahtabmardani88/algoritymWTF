
// // =====================================================================================================================================================
// Factorialize!
// // =====================================================================================================================================================
// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Example Outputs:

// factorialize(0) should return 1.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.

// function factorializ(n){
//     if(n == 0 || n == 1){
//         return 1
//     }else{
//         return n * factorializ(n -1);
//     }
// } 
// console.log(factorializ(0));
// console.log(factorializ(10));
// console.log(factorializ(20));
// // =====================================================================================================================================================
// Palindrome Checker
// // =====================================================================================================================================================
// Declare a function isPalindrome(str) that takes a string as an input.
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// let checkPlindrom = function(word){
//     let inputWord = word;
//     let checkString =inputWord.split("").join("").toLowerCase();
//     for(let i = 0 ; i < checkString.length / 2 ; i++){
//         if(checkString[i]!= checkString[checkString.length-i-1]){
//             return false;
//         }
//     }
//     return true;
// }
// let outPut = checkPlindrom("rasecar");
// console.log(outPut);

// // =====================================================================================================================================================
// Palindrome Checker
// // =====================================================================================================================================================
// 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).
// Example:
// //Using the array 
// const arr = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]
// //The correct answer is : 11

// function highestNumber(sum){
// let first=0;
// let second=0;
// let third =0;
// for(let i =0; i<sum.length ;i++){
//     if(sum[i]> first){
//        third= second;
//        second= first;
//        first=sum[i];
//     }
//     else if(sum[i]>second){
//         third=second;
//         second=sum[i];
//     }
//     else if(sum[i]> third){
//         third=sum[i]
//     }
// }
// return third;
// }
// let arr=[5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
// console.log(highestNumber(arr));