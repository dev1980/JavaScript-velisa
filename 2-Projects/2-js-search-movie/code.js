// Your Code Here!
import {movieDetails} from "./movieDetails.js";
import {movies} from "./movies.js";

console.log(movieDetails)
console.log(movies)

let moviesData = [];

movieDetails.map((movieDetail)=>{
  
    movies.map((movie) =>{
        
        if(movieDetail.title === movie.title) {
            moviesData.push({...movieDetail, ...movie})
        }
    })
})

console.log(moviesData)

let search = document.getElementById("search");

search.addEventListener("click", searchMovies);

function searchMovies(e){
    e.preventDefault();
  
 let searchInput = document.getElementById("movie-search").value.toLowerCase();
 console.log(searchInput)
    let filteredMovies = moviesData.filter((movie)=>{
        // return movie.title.toLowerCase().includes(searchInput);
        if(movie.title.toLowerCase().includes(searchInput)) {
            return true;
        }else if(movie.cast.join(" ").toLowerCase().includes(searchInput)) {
            return true;
        }
    })

    if(filteredMovies.length > 0){
        renderMovies(filteredMovies);
    }
    document.getElementById("movie-search").value = "";
}


function renderMovies(moviesData) {
    document.getElementById("movies_render").innerHTML = "";

    moviesData.map((movie)=>{
        const{imageUrl, title, cast, year} = movie;
    
        let div = document.createElement("div");
        div.setAttribute("class", "card");

        div.innerHTML = `
            <img src= ${imageUrl} alt=${title}>
            <h2>${title}</h2>
            <p>${cast.join(" ")}</p>
            <p>${year}</p>
        `
        let movies_render = document.getElementById("movies_render");
        movies_render.append(div)
    })
}

renderMovies(moviesData);

// let movie = [{id:1, title: "3300"}, {}, {}]
// let movieDetail = [{id: 300, title: "3300" },{},{}]

// let newData = [{...movie[0], ...movieDetail[0]}]
// console.log(newData)