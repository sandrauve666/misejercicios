function getBatmanes(url) {
    const promise = fetch(`${url}`);
    promise.then(response => response.text())
        .then(data => {
            mostrarDatos(data)
        });
}

function mostrarDatos(datos) {
    let series = JSON.parse(datos);
    series.forEach(serie => {
        let ficha = `<div class="serie">
            <div class="title">${serie.Title}</div>
            <div class="year">${serie.Year}</div>
            <div class="imagen">
                <img src="${serie.Poster}">
            </div>
        </div>`;
        document.querySelector("#series").innerHTML += ficha;
    });
}

function mostrarPaginaError(codigo) {
    document.querySelector("#series").innerHTML = `<h1>Ha ocurrido un error:${codigo}</h1>`;
}

getBatmanes("https://www.omdbapi.com/?apikey=b138fa3d&s=batman&type=series");