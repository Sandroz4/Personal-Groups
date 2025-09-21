// let mood = 'hungry'
// let snack = mood === 'hungry' ? '🍕' : 'air';

// console.log(snack)

// let weekend = 3
// //          if true => 
// let plans = weekend > 2 && '🎉 party time'

// console.log(plans)


// let user = {
//     name: 'saba',
//     isLoggedIn: true
// }

// let greeting = user.isLoggedIn ? `Welcome back, ${user.name}` : 'please log in'

// console.log(greeting)

// //            0        1       2         3
// let cart = ['milk', 'cola', 'water', 'cocoa'];

// // i = 0, 1, 2, 3

// for (let i = 0; i < cart.length; i++) {
//     console.log(cart[i])
// }

// // push
// let arr = [1, 2]
// arr.push(4)
// console.log(arr)

// // pop
// let arr = [1, 2, 3]
// arr.pop()
// console.log(arr)

// // shift
// let arr = [1, 2, 3]
// arr.shift()
// console.log(arr)

// //unshift
// let arr = [1,2,3]
// arr.unshift(10)
// console.log(arr)

// // slice

// let arr = [1,   2,3,4,    5,6,7,8]
// let result = arr.slice(1, 4)
// console.log(result)

// let numbers = [1, 2, 3, 4, 5, 6]

// let doubled = numbers.map(i => i)


// console.log(doubled)

// let numbers = [1, 2, 6, 7, 3, 8, 10]

// let result = numbers.map(function(number) {
//     if (number > 5) {
//         return 'big'
//     } else {
//         return number
//     }
// })



// console.log(result)


// let fruits = ['apple', 'cherry', 'banana']

// let result = fruits.map(function(fruit, index){
//     return fruit.toUpperCase() + ': ' + (index +1000)
// })


// console.log(result)



// [1: 'apple', 2: 'cherry', 3: 'banana']


// let tripled = numbers.map(function(number){
//     return number * 3
// })

// console.log(tripled)


// let users = [
//     {name: 'luka', role: 'engineer'},
//     {name: 'mariami', role: 'dev'}
// ]
//  //                            {name: 'luka', role: 'engineer'}
// let result = users.map(function(person) {
//     return person.name
// })

// console.log(result)

// let products = [
//     {name: 'cheese', price: 20},
//     {name: 'meat', price: 40}
// ]

// let result = products.map(
//     function(product) {
//         return {
//             name: product.name,
//             price: product.price,

//             status: product.price > 20 ? 'expensive' : 'affordable'
//         }
//     }
// )

// console.log(result)