// fetch('https://fakestoreapi.com/products/6')
//     .then(res => res.json())
//     .then(function(data) {
//         const titleElement = document.getElementById('title')
//         const img = document.getElementById('img')
//         const price = document.getElementById('price')


//         titleElement.textContent = data.title
//         img.src = data.image
//         price.textContent = data.price 

//         console.log(data)

//     })

// const productBox = document.getElementById('productBox')

// fetch('https://fakestoreapi.com/products/6')
//     .then(res => res.json())
//     .then(function(product) {
//         productBox.innerHTML = `
//             <div>
//                 <img src="${product.image}" alt="${product.title}">
//                 <h2>${product.title}</h2>
//                 <p>${product.description}</p>
//                 <p>${product.price}$</p>
//             </div>

//         `
//     })



// let name = 'sandro'
// // let message = 'hello ' + name + '!'

// let message = `hello ${name}`
// console.log(message)




// const numbers = [1, 2, 3, 4, 5]

// numbers.map(function(item) {
//     console.log(item)
// })


// fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(function(products) {
        const container = document.getElementById('productContainer')

        const imagesHtml = products.map(function(product) {
            return `
            <div>


            <img src="${product.image}"



            
            </div<
            `
        })


        container.innerHTML = imagesHtml
        




    })














// const cars = [
//   {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   },
//   {
//     "id": 2,
//     "title": "Mens Casual Premium Slim Fit T-Shirts ",
//     "price": 22.3,
//     "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
//     "rating": {
//       "rate": 4.1,
//       "count": 259
//     }
//   },
 
// ]


// cars.map((car) => console.log(car))













// const numbers = [1, 2, 3, 4, 5]

// numbers.map((item, index) => console.log(item, index))

// numbers.map(function(item, index) {
//     console.log(item, index)
// })

// numbers.map((item, index) => console.log(item, index))

// function(){

// }