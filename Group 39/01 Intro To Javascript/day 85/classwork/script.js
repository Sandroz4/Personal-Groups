// let age = prompt('Enter your age: ')

// if (age >= 18) {
//     alert('you are an adult!')
// }
// else {
//     alert('you are underage.')
// }





// function calculate(){
//     let x = document.getElementById('price')

//     let over18 = confirm('press OK if under 18') 

//     if (over18 === true){
//        x.textContent = 'Discount: 10$'
//     }
//     else {
//         x.textContent = 'Regular price: 50$'
//     }
// }

// calculate()



// let over18 = confirm('press OK if under 18')
// console.log(over18)


// function calculate() {
//     let choice = document.getElementById('choice').checked 
    
//     if (choice === true) {
//         document.getElementById('totalprice').textContent = '25 dollars'
//     }
//     else {
//         document.getElementById('totalprice').textContent = '20 dollars'
//     }
// }


let count = 0

function counter1(){
    count += 5
    document.getElementById('count').textContent = count
}


function counter2(){
    count -= 5
    document.getElementById('count').textContent = count
}