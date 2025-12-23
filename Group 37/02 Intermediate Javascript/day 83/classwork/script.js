// palindrome - ana, dad, level,

// დავადგინოთ სიტყვა palindrome არის თუ არა

// function palindromeChecker(word) {
//     // let revWord = word[word.length-1] + word.slice(1, -1) + word[0]
//     // return revWord
    
//     // return word.split('').reverse().join('') === word

//     // if (splittedWord === word) {
//     //     return 'palindrome'
//     // } else {
//     //     return 'false'
//     // }
// }


// console.log(palindromeChecker('helo'))


// let word = 'hello'

// let result = word.split('').reverse()

// let result2 = result.join('')

// console.log(result2)



// // დავადგინოთ სიტყვა anagram არის თუ არა

// function anagramChecker(words) {
//     return words[0].split('').sort().join('') === words[1].split('').sort().join('')
// }


// console.log(anagramChecker(['fried', 'fired']))


// let word = 'adcb'

// console.log(word.split('').sort().join(''))



// ვთქვათ ვაკონტროლებთ მარსმავალს
// x, y
// 0, 0

// UP: y + 5
// DO: y - 5
// LE: x - 5
// RI: x + 5

// function roverCommands(commands) {
//     let x = 0, y = 0

//     commands.split('-').map( char => {
//         let command = char.slice(0, 2)
//         let value = char.slice(2)

//         if (command === 'UP') {
//             y += value
//         } else if (command === 'DO') {
//             y -= value
//         } else if (command === 'LE') {
//             x -= value
//         } else if (command === 'RI') {
//             x += value
//         } else {
//             return 'Incorrect Input!'
//         }

//     })
    
//     console.log(x, y)
// }

// roverCommands('UP5-DO4-RI9-LE1')

// //          01234
// let word = 'hello'

// let result = word.slice(0, 3)

// console.log(result)



// const numbers = [10, 20, 30, 40]

// const words = ['hello', 'my', 'name']

// standart for loop - უვლის
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// .map() - უვლის და ინახავს სიაში
// let numbersList = numbers.map(num => num)


// for...of - უვლის 


// let words = 'hello'
// for (const word of words) {
//     console.log(word)
// }

// const s = 'A😂B💝'

// for (let i = 0; i < s.length; i++) {
//     console.log(s[i])
// }

// for (const word of s) {
//     console.log(word)
// }