
    // let data = new Promise((resolve, reject)=>{
    //     let value = false;
    //     if(value){
    //         resolve("The data is received").then((result)=>{
    //             return result;
    //         })
    //     }else {
    //         reject("Sorry Data is not received").catch((error)=>{
    //            return error
    //         })
    //     }
    // })



const API_KEY = "80068fbfc8f92310ac9ea24006b4d8f7";

const API_URL = `https://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&q=london`

const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let  getData = async(APIURL) => {
    let response =await fetch(APIURL);
    console.log(response)
    let data =  await response.json()
    console.log(data.results)
   
    

    // console.log(data)
}


// getData(APIURL);


async function getMovieData(){
    let movies = await fetch(APIURL);
    let data = await movies.json();
    console.log(movies)
    console.log(data.results)

    // data.results.map((movie)=>{
}

// getMovieData();


let weatherAPI = async() =>{
let response = await fetch(API_URL);
console.log(response)
let data = await response.json();
console.log(data.main)
}

weatherAPI();