function getCanciones(url, port, recurso)
{
    const client = new XMLHttpRequest();

    client.addEventListener("readystatechange", () => {
        const isDone = client.readyState === 4;
        const isOk = client.status === 200;

        if (isDone && isOk){
            mostrarDatos(client.responseText);
        } else if (isDone && !isOk){
            mostrarPaginaError(client.status)
        }
    });
    client.open("GET", `${url}:${port}/${recurso}`);
    client.send();
}

function mostrarDatos(datos)
{
    let canciones = JSON.parse(datos);
    canciones.forEach(cancion => {
        let ficha = `<div class="cancion">
            <div class="titulo">${cancion.titulo}</div>
            <div class="titulo">${cancion.cantante.nombre}</div>
            <div class="genero">${cancion.genero}</div>
            <div class="disco">${cancion.disco}</div>
            <div class="imagen">
                <img src="${cancion.portada}">
            </div>
        </div>`;
        document.querySelector("#canciones").innerHTML += ficha;
    });
}

function mostrarPaginaError(codigo)
{
    document.querySelector("#canciones").innerHTML=`<h1>Ha ocurrido un error: ${codigo}</h1>`;
}

//getVideojuegos("http://localhost",5500,"datos2.json");
getCanciones("http://localhost",5500,"datos.json");