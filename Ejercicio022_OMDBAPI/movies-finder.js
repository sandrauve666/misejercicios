const API_KEY="b138fa3d";
const SERVER_URL="https://www.omdbapi.com";
const SERVER_PORT=443;

document.querySelector("#bBuscar").addEventListener("click", ()=>{
    const tituloBuscado = document.querySelector("#iTitulo").value;
    doGetHTTPRequest(
        SERVER_URL, 
        SERVER_PORT, 
        `?apikey=${API_KEY}&s=${tituloBuscado}`,
        processData,
        processError)
});

function processData(data) {
    const peliculas = JSON.parse(data);
    peliculas.Search.forEach(pelicula => {
        document.querySelector("#contenedor-peliculas").innerHTML += 
            `<div class='pelicula'>
                <div class='titulo'>${pelicula.Title}</div>
                <div class='poster'><img src=${pelicula.Poster}></div>
            </div>`
        //console.log(pelicula);
    });
}

function processError(error) {
    console.log(error);
}