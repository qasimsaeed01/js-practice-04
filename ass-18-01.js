// Assignment 1: String Manipulation
// Write a JavaScript program that takes a string input from the user and performs the following operations:

// 1. Convert the string to uppercase and lowercase. (toUpperCase(), toLowerCase())
let firstName = "Qasim Saeed";
let upper1 = firstName.toUpperCase();
console.log(upper1);

let lower1 = firstName.toLowerCase();
console.log(lower1);

// 2. Remove leading and trailing whitespaces. (trim())

let tri = "Hello    i    am    Qasim";
let rear = tri.trim()
console.log(rear);

// 3. Replace all occurrences of a specific word with another word. (replace())
let lirstName = "qasim";
let replace = firstName.replace("qasim","saeed");
console.log(replace);

// 4. Check if the string includes a specific substring. (includes())
let text = "Hello i am Qasim";
let check = text.includes("Qasim");
console.log(check);

// 5. Split the string into an array of words. (split())
let text1 = "Hello i am Qasim";
let arr = text1.split(" ");
console.log(arr);



