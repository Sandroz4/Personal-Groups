// let number
//  = 59

// while (number > 0) [
//     console.log('Countdown: ' + number)
// ]

let password = 'goa'
let attempt = '' // მცდელობა

// სანამ მცდელობა არუდრის პაროლს, მანამდე ცადოს

while (password != attempt) {
    attempt = prompt('Enter the secret password: ')
}

alert('Access granted')