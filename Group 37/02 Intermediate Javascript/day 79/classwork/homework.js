// let heading = document.getElementById('heading')
// let image = document.querySelector('img')
// let p = document.querySelector('p')

// fetch('https://fakestoreapi.com/products/1')
//     .then(res => res.json() )
//     .then(product => {
//         heading.textContent = product.title
//         image.src = product.image
//         p.textContent = product.price + '$'
//     })

let header = document.getElementById('header1');

fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(res => {

        header.textContent = res.title;
    })