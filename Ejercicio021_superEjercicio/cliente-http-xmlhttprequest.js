function getVideojuegos(url, port, recurso) {
    const client = new XMLHttpRequest();

    client.addEventListener("readystatechange", () => {
        const isDone = client.readyState === 4;
        const isOk = client.status ===200;

        if (isDone && isOk){
            //console.log(client.responseText); //Esto es para mostrar en consola el json.
            mostrarDatos(client.responseText);
        } else if (isDone && !isOk) {
            mostrarPaginaError(client.status);
        }
    });
    client.open("GET", `${url}:${port}/${recurso}`);
    client.send();
}

function mostrarDatos(datos)
{
    let juegos = JSON.parse(datos);
    juegos.forEach(juego => {
        let ficha = `<div class="juego">
            <div class="titulo">${juego.titulo}</div>
            <div class="plataforma">${juego.plataforma}</div>
            <div class="imagen">
                <img src="${juego.caratula}">
            </div>
        </div>`;
        document.querySelector("#juegos").innerHTML += ficha;
    });
}

function mostrarPaginaError(codigo)
{
    document.querySelector("#juegos").innerHTML=`<h1>Ha ocurrido un error: ${codigo}</h1>`;
}

getVideojuegos("http://localhost",5500,"datos2.json");