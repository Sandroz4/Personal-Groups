// function handleLog() {
//     console.log('mouse has entered the button')
// }


// function handlePrint() {
//     console.log('you clicked a button')
// }


// const btn = document.getElementById('btn')



// // btn.addEventListener('click', handleLog)


// btn.addEventListener('click', handlePrint)
// btn.addEventListener('pointerover', handleLog)


// // btn.removeEventListener('pointerover', handleLog)


let image = document.getElementById('myImage')
let caption = document.getElementById('myCaption')

image.addEventListener('pointerout', hideCaption)


function hideCaption() {
    caption.style.display = 'none'
    image.addEventListener('pointerover', showCaption)
}


function showCaption() {
    caption.style.display = 'block'
}