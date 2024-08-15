const books = ["Kigogo", "Kidagaa", "Caucasian"]; 
// delete books[0];
const person = ["John", "Doe", 46]; // Arrays are a special type of objects. The typeof operator in JS returns"objects" for arrays
const fruits = ["Banana", "Orange", "Apple", "Mango"]; // The length property of an array returns the length of an array (the number of array elements)
let length = fruits.length;
let length_a = fruits[fruits.length - 1]; // Accessing the last array element

document.getElementById("test").innerHTML = books; 
document.getElementById("test_1").innerHTML = person[0]; 
document.getElementById("test_2").innerHTML = length
document.getElementById("test_3").innerHTML = length_a;











