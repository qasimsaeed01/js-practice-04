// Assignment 3: String and Array Combination
// Write a JavaScript program that takes a string input from the user, splits it into an array of words, and performs the following operations:

// 1. Sort the array of words in alphabetical order. (sort())
let text = ["Hello i am Qasim"];
let arr = text.sort();
console.log(arr);

// 2. Remove duplicates from the array. (indexOf(), splice())
let text1 = ["Hello i am Qasim"];
let arr1 = text1.indexOf("am");
let arr2 = text1.splice(2, 1);
console.log(arr1, arr2);

// 3. Join the array back into a string with commas. (join())
let text2 = ["Hello i am Qasim"];
let arr3 = text2.join(", ");
console.log(arr3);

// 4. Check if the string includes a specific word. (includes())
let text3 = "Hello i am Qasim";
let arr4 = text3.includes("Qasim");
console.log(arr4);

// 5. Replace all occurrences of a specific word with another word. (replace())
let text4 = "Hello i am Qasim";
let arr5 = text4.replace("Qasim", "Saeed");
console.log(arr5);
