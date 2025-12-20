// // 1. რომ გავადიდოთ წინადადების ყოველი სიტყვის პირველი ასო

// function capWords(str) {
//     let words = str.split(' ')
//     let result = []

//     for (let i = 0; i < words.length; i++) {
//         result.push(words[i][0].toUpperCase() + words[i].slice(1))
//     }
//     return result.join(' ')
// } 

// console.log(capWords('javascript is a fun language'))



// // 2. რომ გავადიდოთ წინადადების ყოველი მეორე სიტყვის პირველი ასო

// function capWords(str) {
//     let words = str.split(' ')
//     let result = []

//     for (let i = 0; i < words.length; i++) {
//         if (i % 2 === 1){
//             result.push(words[i][0].toUpperCase() + words[i].slice(1))
//         } else {
//             result.push(words[i])
//         }
//     }

//     return result.join(' ')
// } 

// console.log(capWords('javascript and python are fun languages'))


// 2. რომ გავადიდოთ წინადადების ყოველი მეორე სიტყვის პირველი ასო (.map())

// function capWords(str) {
//     return str.split(' ').map((word, index) => index % 2 === 1 ? word[0].toUpperCase() + word.slice(1) : word).join(' ')
// } 

// console.log(capWords('javascript is a fun language'))


