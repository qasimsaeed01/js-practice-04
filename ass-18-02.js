// Assignment 2: Array Operations
// Write a JavaScript program that creates an array of numbers and performs the following operations:

// 1. Sort the array in ascending and descending order. (sort())
let numbers = [3, 8, 1, 5, 7];
let asc = numbers.sort();
console.log(asc);

// 2. Add and remove elements from the beginning and end of the array. (push(), pop(), shift(), unshift())
let eleme = ["cat", "dog", "bird", "fish"];
let eleme1 = eleme.push("rabbit");
console.log(eleme);
let eleme2=eleme.pop();
console.log(eleme);
let eleme3=eleme.shift();
console.log(eleme);
let eleme4=eleme.unshift("lion");
console.log(eleme);

// 3. Find the index of a specific element in the array. (indexOf())
let inD = ["lion", "cat", "dog", "bird", "fish"];
let index = eleme.indexOf("bird");
console.log(index);

// 4. Convert the array to a string. (join())
let arr1 = ["lion", "cat", "dog", "bird", "fish"];
let str = arr1.join();
console.log(str);

// 5. Reverse the order of the array. (reverse())
let arr2 = ["lion", "cat", "dog", "bird", "fish"];
let rev = arr2.reverse();
console.log(rev);