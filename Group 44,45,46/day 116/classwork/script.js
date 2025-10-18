// fetch('https://fakestoreapi.com/prodts/1')
//     .then(res => res.json())
//     .then(product => console.log(product))
//     .catch(error => console.log(error))

// let inp = document.getElementById('inp').value;

// const query = 'Titanic'

const movieDiv = document.getElementById("container");

fetch(`https://api.themoviedb.org/3/search/movie?api_key=
38c8a267e25940bf35aa75921cdd6af2&query=${encodeURIComponent("shrek 2")}`)
  .then((res) => res.json())
  .then((movie) => {
    results = movie.results;
    movie = results[0];


    movieDiv.innerHTML = `
            <h2>${movie.original_title} (${movie.release_date})</h2>


            <img id='img1' src="https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}" 



            <img src="https://image.tmdb.org/t/p/w400/${movie.poster_path}" alt="">
            <button>${movie.popularity}</button>
            <p>${movie.overview}</p>
        `;
  });
