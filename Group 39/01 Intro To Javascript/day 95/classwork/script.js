// const person = {
//     name: 'giorgi',
//     age: 15,
//     isAdult: false,
//     isStudent: true
// } 

// console.log(person.name, person.age)

// if student -> discount, else -> regular

// if (person.isStudent === true) {
//     console.log('20% discount')
// } else {
//     console.log('regular')
// }

// person.name = 'saba'
// person.isStudent = false
// console.log(person)




// const person = {
//   name: "John", 
//   age: 42, 
//   favColor: "green"
// };



// function Person(name, surname, age) {
//   this.firstname = name
//   this.lastname = surname
//   this.year = age
// }

// const person1 = new Person('sandro', 'zabakhidze', 15)


// console.log(person1)



function Car(model, color, releaseYear, isManual) {
  this.model = model
  this.color = color
  this.releaseYear = releaseYear
  this.isManual = isManual
}


const car1 = new Car('nissan skyline', 'white', 2000, true)
const car2 = new Car('Toyota Prius', 'white', 2009, false)
const car3 = new Car('Dodge Challenger', 'red', 2009, true)

// console.log(car1, car2, car3)

// console.log(car1.model)
// console.log(car2.color)
// console.log(car3.isManual)

console.log(car1)