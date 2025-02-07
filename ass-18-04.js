// Assignment 4: Array Methods
// Write a JavaScript program that creates an array and performs the following operations:

// 1. Add elements to the end of the array. (push())

let myArray = [1, 2, 3, 4];
myArray.push(5, 6, 7);
console.log(myArray);

// 2. Remove elements from the end of the array. (pop())

myArray.pop();
console.log(myArray);

// 3. Add elements to the beginning of the array. (unshift())

myArray.unshift(0);
console.log(myArray);

// 4. Remove elements from the beginning of the array. (shift())

myArray.shift();
console.log(myArray);

// 5. Find the index of a specific element in the array. (indexOf())

let index = myArray.indexOf(5);
console.log(index);