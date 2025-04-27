// let weight = Number(prompt('Enter your weight (in kg): '))
// let height = Number(prompt('Enter your height (in cm): '))
// height = height / 100
// let bmi = weight / (height * height)
// if (bmi < 18.5) {
//     console.log('Underweight')
// } else if (bmi >= 18.5 && bmi < 24.9) {
//     console.log('Normal')
// } else if (bmi >= 25 && bmi < 29.9) {
//     console.log('Overweight')
// } else if (bmi >= 30 && bmi < 34.9) {
//     console.log('Obese')
// } else {
//     console.log('Extremely Obese')
// }

function calculateBMI() {
    
let weight = document.getElementById('weight').value
let height = document.getElementById('height').value
let result = document.getElementById('bmi') 

weight = parseFloat(weight)
height = parseFloat(height)

height = height / 100
let bmi = weight / (height * height)



if (bmi < 18.5) {
    result.textContent += 'underweight (' + bmi.toFixed(1) + ')'

} else if (bmi >= 18.5 && bmi < 24.9) {
    result.textContent += 'normal (' + bmi.toFixed(1) + ')'

} else if (bmi >= 25 && bmi < 29.9) {
    result.textContent += 'overweight (' + bmi.toFixed(1) + ')'

} else if (bmi >= 30 && bmi < 34.9) {
    result.textContent += 'obese (' + bmi.toFixed(1) + ')'

} else if (bmi > 34.9) {
    result.textContent += 'extremely obese (' + bmi.toFixed(1) + ')'
} else { 
    alert('input data!')
}
}

