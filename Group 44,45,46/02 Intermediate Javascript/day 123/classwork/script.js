// const numbers = [5, 10, 15, 7]

// numbers.map(function(item) {
//     console.log(item)
// })

// numbers.map( (item, index) => {
//     console.log(item, index)
// } )


// const users = [
//     {name: 'sandro', age: 25},
//     {name: 'giorgi', age: 14},
//     {name: 'data', age: 35}
// ]


// const newUsers = users.map( user =>  {
//     return (user.age)
// })

// console.log(newUsers)




// const newUsers = users.map( user => ( {
//     ...user,
//     age: user.age + 1
// }))


// console.log(newUsers)




// const numbers = [1, 2, 3, 4]


// numbers.map(function(item) {
//     console.log(item)
// })

// numbers.map( (item, index) => {
//     console.log(item, index)
// })


// .filter()


// const numbers = [10, 5, 4, 20, 23]


// const filteredNumbers = numbers.filter( (num, index) => num %2 === 0)

// console.log(filteredNumbers)


// const names = ['Sandro', 'Giorgi', 'Luka', 'Data']
// const longNames = names.filter(name => name.length > 5)

// console.log(longNames)


const users = [
    {name: 'sandro', age: 25},
    {name: 'giorgi', age: 14},
    {name: 'data', age: 35}
]


const newUsers = users.filter( user => user.age >= 18)
console.log(newUsers)