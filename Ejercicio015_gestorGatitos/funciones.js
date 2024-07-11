let gatitos = new Array();

document.querySelector("#bAgregar").addEventListener("click", (event) => {
    let raza = document.querySelector("#iRaza").value;
    let origen = document.querySelector("#iOrigen").value;
    let imagen = document.querySelector("#iImagen").value;
    let gatito = {
        razaO: raza,
        origenO: origen,
        imagenO: imagen
    }
    gatitos.push(gatito);
})

function guardarGatitos(gatitos)
{
    let htmlGatitos = "";
    gatitos.map((gatito) => {
        htmlGatitos += `<div class="kitty">
                            <div class="raza-gatito">${gatito.razaO}</div>
                            <div class="origen-gatito">${gatito.origenO}</div>
                            <div class="imagen-gatito">${gatito.imagenO}</div>
                        </div>"`

    })
    document.querySelector("#michis").innerHTML="htmlGatitos";
}