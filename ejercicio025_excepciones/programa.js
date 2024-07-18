const fs = require("node:fs");
function writeLog(logLine){
    fs.appendFile('./log.txt', `${logLine}\n`, err => { //fs.writeFile --> machaca.
        if (err){
            console.error(err);
        } else {
            console.log("Log escrito satisfactoriamente");
        }
    });
}

function sumar(sumando1, sumando2) {
    //1. que recibamos 2 argumentos.
    if (sumando1 === undefined || sumando2 == undefined) {
        throw new Error("Los dos sumandos son obligatorios.");
    }
    //2. Que los 2 argumentos sean números.
    if (!(typeof sumando1 == 'number') || !(typeof sumando2 === 'number')) {
        throw new Error("Los dos sumandos deben ser números.");
    }
    return sumando1 + sumando2;
}

try {
    console.log("Paso 1");
    let resultado = sumar(8);
    console.log("Paso 2");
    console.log(resultado);
    console.log("Paso 3");
} catch (e) {
    //throw(e);
    console.error(e.message);
    writeLog(e.message);
} finally { // El bloque finally siempre se ejecuta. Es opcional.
    console.log("Hemos terminado el proceso");
}