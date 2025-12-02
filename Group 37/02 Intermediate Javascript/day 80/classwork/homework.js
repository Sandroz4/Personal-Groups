// let p = document.createElement('p')
// let img = document.querySelector('img')

// fetch('https://fakestoreapi.com/products/1')
//     .then(response => response.json())
//     .then(res => {

//         p.textContent = res.price
//         img.src = res.image
//         console.log(res)
//     })


let h1 = document.querySelector('h1')
let img = document.getElementById('img1')
let img2 = document.getElementById('img2')
let p = document.querySelector('p')



let movie = 'shrek'
let apiKey = "38c8a267e25940bf35aa75921cdd6af2"

fetch(`https://api.themoviedb.org/3/search/movie?api_key=
${apiKey}&query=${encodeURIComponent(movie)}`)
.then(res => res.json())
.then(response => {
    let film = response.results[0]
    
    h1.textContent = film.title
    img.src = 'https://image.tmdb.org/t/p/w400/' + film.poster_path
    img2.src = 'https://image.tmdb.org/t/p/w500/' + film.backdrop_path
    
    p.textContent = film.release_date
})