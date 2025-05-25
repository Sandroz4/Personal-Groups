// const Person = {
//     name: 'saba',
//     lastname: 'surmanidze',
//     age: 14
// }

// console.log(Person.name, Person.lastname)
// console.log(Person)

// function Person(name, lastname) {
//     this.name = name
//     this.lastname = lastname
// }



// const person1 = new Person('saba', 'surmanidze')

// console.log(person1.name, person1.lastname)

// console.log(person1)


// function Car(brand, year) {
//     this.brand = brand
//     this.year = year
// }

// const car1 = new Car('Toyota', 2023)
// const car2 = new Car('Ferrari', 2015)

// console.log(car1.brand, car1.year)
// console.log(car2.brand, car2.year)


// function Movie(title, genre, rating) {
//     this.title = title;
//     this.genre = genre;
//     this.rating = rating;

//     this.getDetails = function() {
//         console.log(`Movie is called ${this.title}, Genre is ${this.genre}.`)
//     }
// }

// const movie1 = new Movie('Titanic', 'Romance', 4.8)

// // console.log(movie1.title, movie1.genre, movie1.rating)

// movie1.getDetails()

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function() {
//         console.log(`hi my name is ${this.name}, my age is ${this.age}`)
//     }
// };

// const person1 = new Person(prompt('Enter your name:'), Number(prompt('Enter your age:')));

// console.log(person1.name, person1.age);



// function Counter() {
//     this.count = 0

//     this.increment = function() {
//         this.count ++
//     }

//     this.getCount = function() {
//         return this.count
//     }
// }

// const counter1 = new Counter()
// counter1.increment()


// console.log(counter1.getCount())


// function Car(brand, year) {
//     this.brand = brand
//     this.year = year
// }

// const car1 = new Car('Toyota', 2023)


// rectangle area & perimetre


// function Rectangle(width, height) {
//     this.width = width
//     this.height = height

//     this.getArea = function() {
//         return this.width * this.height
//     }


//     this.getPerimeter = function() {
//         return 2 * (this.width + this.height)
//     }
// }

// const rectangle1 = new Rectangle(5, 10)

// console.log(rectangle1.getArea())
// console.log(rectangle1.getPerimeter())

// function Person(name, age) {
//     this.name = name
//     this.age = age

//     this.greet = function() {
//         return `Hi, i am ${name}, and i am ${age} years old.`
//     }
// }


// function greetUser() {
//     const person1 = new Person('sandro', 17)
    
//     document.getElementById('greeting').textContent = person1.greet()
// }