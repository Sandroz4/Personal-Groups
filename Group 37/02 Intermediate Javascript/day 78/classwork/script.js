// =============================================
//  EXERCISE 1 – Double all numbers
// =============================================
// Take an array of numbers and return a new array
// where every number is doubled.
// Example: [1, 2, 3] → [2, 4, 6]


// const numbers1 = [4, 8, 15, 16, 23, 42]
// const tripled = numbers1.map(function(item) {
//     return item
// });


// console.log(tripled)



// const numbers1 = [4, 8, 15, 16, 23, 42];
// const doubled = numbers1.map(function(item) {
//     return item * 2
// });
// console.log(doubled); // → [8, 16, 30, 32, 46, 84]



// =============================================
// //  EXERCISE 2 – Convert to strings
// // =============================================
// // Convert every number in the array to a string.
// // Example: [10, 20, 30] → ["10", "20", "30"]

// const numbers2 = [5, 12, 0, -3, 99];
// const strings = numbers2.map(/* YOUR CODE HERE */);
// console.log(strings); // → ["5", "12", "0", "-3", "99"]



// // =============================================
// //  EXERCISE 3 – Uppercase names
// // =============================================
// // Transform each name in the array to uppercase.
// // Example: ["alice", "bob"] → ["ALICE", "BOB"]

// const names = ["maria", "john", "emma", "liam"];
// const upperNames = names.map(/* YOUR CODE HERE */);
// console.log(upperNames); // → ["MARIA", "JOHN", "EMMA", "LIAM"]



// // =============================================
// //  EXERCISE 4 – Add exclamation mark!
// // =============================================
// // Add "!" to the end of every string.
// // Example: ["hello", "world"] → ["hello!", "world!"]

// const words = ["yes", "awesome", "coding", "fun"];
// const excited = words.map( word => word + '!');
// console.log(excited); // → ["yes!", "awesome!", "coding!", "fun!"]



// // =============================================
// //  EXERCISE 5 – Get lengths of words
// // =============================================
// // Return an array with the length of each word.
// // Example: ["cat", "giraffe", "dog"] → [3, 7, 3]

// const animals = ["elephant", "ant", "dolphin", "lion"];
// const lengths = animals.map( animal => animal.length);
// console.log(lengths); // → [8, 3, 7, 4]



// // =============================================
// //  EXERCISE 6 – Create greeting messages
// // =============================================
// // Turn each name into "Hello, <Name>!"
// // Example: ["Ana", "Bob"] → ["Hello, Ana!", "Hello, Bob!"]

// const guests = ["Sofia", "Mateo", "Isabella", "Lucas"];
// const greetings = guests.map(/* YOUR CODE HERE */);
// console.log(greetings);
// // → ["Hello, Sofia!", "Hello, Mateo!", "Hello, Isabella!", "Hello, Lucas!"]



// // =============================================
// //  EXERCISE 7 – Extract a property from objects
// // =============================================
// // Given an array of user objects, return an array of just their ages.

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Cara", age: 22 },
//   { name: "Dave", age: 35 }
// ];
// const ages = users.map( user => user.age);
// console.log(ages); // → [25, 30, 22, 35]



// // =============================================
// //  EXERCISE 8 – Transform objects (create new objects)
// // =============================================
// // For each product, return a new object with only name and priceWithTax
// // (price + 20% tax).

// const products = [
//   { id: 1, name: "Laptop", price: 999 },
//   { id: 2, name: "Mouse", price: 25 },
//   { id: 3, name: "Keyboard", price: 75 }
// ];

// const productsWithTax = products.map( product => {
//     return {
//         name: product.name,
//         priceWithTax: (product.price * 1.2)
//     }
// });
// console.log(productsWithTax);
/* Expected:
[
  { name: "Laptop", priceWithTax: 1198.80 },
  { name: "Mouse", priceWithTax: 30.00 },
  { name: "Keyboard", priceWithTax: 90.00 }
]
*/



// // =============================================
// //  EXERCISE 9 – Conditional transformation
// // =============================================
// // If the number is even → make it "Even", if odd → make it "Odd"
// // Example: [2, 5, 8, 9] → ["Even", "Odd", "Even", "Odd"]

// const nums = [10, 3, 44, 17, 8, 21];
// const evenOrOdd = nums.map(/* YOUR CODE HERE */);
// console.log(evenOrOdd); // → ["Even", "Odd", "Even", "Odd", "Even", "Odd"]



// // =============================================
// //  EXERCISE 10 – Index-based transformation (HARD)
// // =============================================
// // Create a new array where each element is:
// // "Item <index+1>: <original value * (index+1)>"
// // Example with [5, 10, 15]:
// // → ["Item 1: 5", "Item 2: 20", "Item 3: 45"]

// const values = [2, 7, 1, 9, 4];
// const indexedItems = values.map((value, index) => {
//     return ( 
//         `Item ${index + 1}: ${value * (index + 1)}`
//     )
// });
// console.log(indexedItems);

/* Expected:
[
  "Item 1: 2",
  "Item 2: 14",
  "Item 3: 3",
  "Item 4: 36",
  "Item 5: 20"
]
*/