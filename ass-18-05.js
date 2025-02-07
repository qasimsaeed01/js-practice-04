// Assignment 5: String Methods
// Write a JavaScript program that takes a string input from the user and performs the following operations

// 1. Convert the string to uppercase. (toUpperCase())
let text = "hello i am qasim";
let upper = text.toUpperCase();
console.log(upper);

// 2. Convert the string to lowercase. (toLowerCase())

let lower = text.toLowerCase();
console.log(lower);

// 3. Remove leading and trailing whitespaces. (trim())

let text1 = "    hello    i    am   qasim    ";
let trim = text1.trim();
console.log(trim);

// 4. Replace all occurrences of a specific word with another word. (replace())

let replace = text.replace("hello", "hi");
console.log(replace);

// 5. Check if the string includes a specific substring. (includes())

let includes = text.includes("qasim");
console.log(includes);