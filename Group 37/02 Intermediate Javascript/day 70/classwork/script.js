// const heading = document.getElementById('heading')

// console.log(heading)

// heading.textContent = 'i am visible now'

// heading.align = 'center'

// heading.style.color  = 'green'
// heading.style.border = '2px solid red'



// let button = document.createElement('button')
// button.textContent = 'click'

// let main = document.getElementById('main')

// main.appendChild(button)

// function addBtn() {
//     let button = document.createElement('button')
//     button.textContent = 'btn'

//     let main = document.getElementById('main')
//     main.appendChild(button)

// }


let main = document.getElementById('main')

let h1 = document.createElement('h1')

// h1.textContent = 'hello world'

let text = document.createTextNode('hello world')

h1.appendChild(text)

main.appendChild(h1)