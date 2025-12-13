let even = [2, 4, 6, 8]

// map, callback function
// let evenNumbers = even.map(function (item) {
//     return item + 1
// })

// console.log(evenNumbers)

// let evenNumbers = even.filter(item => item > 4)

// console.log(evenNumbers)

// Map()
// filter()


// const evenNumbers = (item) => {
//     console.log(item)
// }

// evenNumbers('hello')



// let result = 5 < 3 ? 'passed' : 'failed'

// console.log(result)

// console.log(Math.random())



// console.log(result)

// true, false


let img = document.querySelector('img')
let btn = document.querySelector('button')

btn.addEventListener('click', function() {
    let randomBool = Math.random() < 0.5 ? true : false

    if (randomBool === true) {
        img.src = 'js.png'
    } else {
        img.src = 'react.jpg'
        img.style.width = '250px'
    }
})



