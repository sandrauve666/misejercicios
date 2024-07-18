const paises=['Japón', 'China', 'EEUU', 'Narnia', 'Tatooine'];
const MINVIAJEROS = 1;
const MAXVIAJEROS = 4;
const MINDIAS = 5;
const MAXDIAS = 10;
let reservas = new Array();

document.querySelector("#bReservar").addEventListener("click", (event) => {
    let pais = document.querySelector("#iPais").value;
    let pasajeros = document.querySelector("#iPasajeros").value;
    let dias = document.querySelector("#iDias").value;
    /*let reserva = {
        pais : pais,
        pasajeros : pasajeros,
        dias : dias
    };*/
    organizarViaje(pais, pasajeros, dias);
    /*paises.forEach((apais) => {
        if (!(reserva.pais == apais)) {
            throw new Error("No existe país");
        } 
    })*/

});
function organizarViaje(pais, pasajeros, dias){
    let paisesMayusculas = paises.map(pais => pais.toUpperCase());
    let paisBuscadoMayusculas = pais.toUpperCase();
    if (!paisesMayusculas.includes(paisBuscadoMayusculas)){
        throw new Error("El país no está en el catálogo.");
    }
    else if ((pasajeros < MINVIAJEROS) || (pasajeros > MAXVIAJEROS)){
        throw new Error("El número de pasajeros debe ser entre 1 y 4");
    }
    else if (dias < MINDIAS || dias > MAXDIAS){
        throw new Error("El número de días a reservar debe estar entre 5 y 10");
    }
    return "Se ha realizado la reserva.";
}

try {
    //organizarViaje("Rumania", 10, 10);
    organizarViaje(pais, pasajeros, dias);
}

catch(e) {
    console.error(e.message);
}