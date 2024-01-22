
function findMovie(title) {
    const API_KEY = "f9cc6e4";
    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                processResponse(JSON.parse(xmlHttp.responseText));
            } else {
                console.log("Ha ocurrido un error:" + xmlHttp.status);
                throw "Ha ocurrido un error " + xmlHttp.status;
            }
        }
    }
    xmlHttp.open("GET", encodeURI(URL), true);
    xmlHttp.send();
}

document.querySelector("#buscar").addEventListener("click",() =>{
    let peli_buscada = document.querySelector("#buscador").value;
    findMovie(peli_buscada);
});

function processResponse(movie) {
    document.querySelector("#img-peli").style.display="block";
    console.log(movie);

    document.querySelector("#titulo").innerHTML = movie.Title + " - " + movie.Year;
    document.querySelector("#puntuacion").innerHTML = "Puntuación Imdb " + movie.imdbRating;
    //document.querySelector("#duracion").innerHTML = movie.Runtime;
    document.querySelector("#img-peli").setAttribute("src", movie.Poster);
    document.querySelector("#duracion").innerHTML = "Duración: " + movie.Runtime;
    
    
    
}




