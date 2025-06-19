// function logger() {
//     console.log('hello')
//     console.log('goodbye')
// }


// setInterval()

// setInterval(logger, 1000)

// ms1000 - 1sec

// let number = 0 //1

// function countUp() {
//     number += 1
//     console.log(number)
// }

// setInterval(countUp, 1000)


// countUp()
// countUp()
// countUp()
// countUp()


// num = 0 // 1 -> 2

// function countUp() {
//     let p = document.getElementById('p')

//     num += 1
//     p.textContent = num
// }


// let interval = setInterval(countUp, 1000)


// function resetStopwatch(){
//     clearInterval(interval)
// }



let clock = document.getElementById('count')
let time = 10

let interval = setInterval(countdown, 500)

function countdown() {
    if (time < 0) {
        clearInterval(interval)
    } else {
        clock.textContent = time
        time -= 1
    }
}
