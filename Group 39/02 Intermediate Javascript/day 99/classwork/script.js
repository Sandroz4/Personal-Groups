// let parent = document.getElementById('main')
// // creating button element
// let element = document.createElement('button')
// // getting parent element (to put our created element in)
// let parent = document.getElementById('parent')
// parent.appendChild(element)



// function showText(){
//     let main = document.getElementById('main')
//     let element = document.createElement('button')
//     // element.textContent = 'davit devadze'
//     let text = document.createTextNode('hello')
//     element.appendChild(text)

//     main.appendChild(element)
// }


// function showText(){
//     // შევქმენით ღილაკი და შევინახეთ ცვლადში
//     let button = document.createElement('button')

//     // ვქმნით ცვლადს, სადაც ვქმნით ტექსტს
//     let text = document.createTextNode('Can you see this?')
//     button.appendChild(text)

//     // წამოვიღოთ ცარიელი მშობელი ელემენტი
//     let parent = document.getElementById('parent')

//     parent.appendChild(button)

// }


function showText(){
    let para = document.getElementById('text')
    let text = document.createTextNode('hello')

    para.appendChild(text)

}