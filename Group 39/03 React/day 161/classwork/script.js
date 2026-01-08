// Task Description

// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.
// Input

// Input will always be a string, e.g., "Friday May 2, 7pm". 
// Output

// Output will be the shortened string, e.g., "Friday May 2". 



// function shortenToDate(longDate) {
//     return longDate.split(',')[0];
// }



// console.log(shortenToDate("Friday May 2, 9am"))

// "Friday May 2"

// const items = ['apple', 'banana', 'kiwi', 'pear']
// const numbers = [1,2,3,4]

// // for loop 
// // map
// // for ...of

// for (let number of numbers) {
//     console.log(number)
// }


// for (const item of items) {
//     console.log(item)
// }


// reduce()

// const numbers = [1, 2, 3, 4]

// //                             0
// const total = numbers.reduce( (acc, cur) => {
//     return acc + cur
// }, 0)

// // console.log(total)
///1
// console.log(total)


// const words = ['i', 'love', 'coding']

// const sentence = words.reduce( (acc, cur) => {
//     return acc + ' ' + cur
// }, '')

// console.log(sentence.trim())


// const doubled = numbers.map(num => {
//     return num * 2 
// })

// console.log(doubled) 