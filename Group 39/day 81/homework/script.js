// console.log(document.title)

// document.title = 'whatever'
// console.log(document.title)

// document.getElementById('test').textContent = 'hello'

// console.log(true || false)

function operation(){
    let input1 = document.getElementById('inp1').checked
    let input2 = document.getElementById('inp2').checked
    let result = input1 && input2
    
    let text = document.querySelector('h1')
    text.textContent += {result}

}
