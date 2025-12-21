// // გვექნება სიტყვების სია, ჩვენ კი უნდა ამოვიღოთ პალინდრომი და დავაჯგუფოთ ახალ სიაში

// function palindormeGrouper(words) {
//     const palindromes = []

//     for (let word of words) {
//         if (word === word.split('').reverse().join('')) {
//             palindromes.push(word)
//         }
//     }

//     return palindromes
// }


// console.log(palindormeGrouper(['ana', 'word', 'hello', 'dad', 'level']))


// // გვექნება ორი სიტყვის ი უნდა ამოვიღოთ ანაგრამი და დავაჯგუფოთ ახალ სიაში


// function anagramGrouper(words) {
//     let a = words[0].split('').sort().join('')
//     let b = words[1].split('').sort().join('')

//     // return a

//     return a === b
// }


// console.log(anagramGrouper(['listen', 'silent']))




// ვაკონტროლებთ მარსის რობოტს - 0, 0
// UX - up x (+10)
// DX - down x (-5)
// UY - up y (+15)
// DY - down y (-10)


// function roverNavigation(commands) {
//     let x = 0, y = 0

//     let splIttedCommands = commands.split(' ')

//     for(let command of splIttedCommands) {
//         let order = command.slice(0, 2) 
//         let value = command.slice(2)

//         if (order === 'UX') {
//             x += value
//         } else if (order === 'DX') {
//             x -= value
//         } else if (order === 'UY') {
//             y += value
//         } else if (order === 'DY') {
//             y -= value
//         }
// }
//     return [x,y]
// }


// console.log(roverNavigation('UX5 DX9 UY6 DY2'))

