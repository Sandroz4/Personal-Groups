// let element = document.createElement('p')
// element.textContent = 'hello world'

// let text = document.createTextNode('hello world')
// element.appendChild(text)
// let main = document.getElementById('parent')
// main.appendChild(element)
// document.body.appendChild(element)


// let parent = document.getElementById('main')
// let child = document.getElementById('child')

// parent.removeChild(child)

// function remove(){
//     let parent = document.getElementById('main')
//     let child = document.getElementById('sub')

//     child.textContent = '1'

//     // parent.removeChild(child)
// }

// let parent = document.getElementById('main')
// let element1 = document.getElementById('sub1')
// let element2 = document.getElementById('sub2')

// parent.replaceChild(element2, element1)

// function sample(){
//     console.log(5)
// }

// function sample2(){
//     console.log(10)
// }

let btn = document.getElementById('btn')

btn.onmouseover = function () {
    console.log('in')
}

btn.onmouseout = function() {
    console.log('out')
}