let salario = 10_000;

if (salario < 20_000) {
    console.log("Salario insuficiente");
}
else if (salario < 30_000) {
    console.log("No está mal");
}
else {
    console.log("Está bien");
}

/*=============================================================*/
/*=============================================================*/

let edad=50;
let estadoCivil="Soltero";
let idiomas=["Inglés", "Español", "Francés", "Chino"];
let permisoConducir=true;
let movilidadGeografica=false;

// Se puede mover permisoConducir == true, permisoConducir === true o solo permisoConducir.
if ((edad >= 18) && (estadoCivil === "Soltero") && (idiomas.includes("Inglés")) && (permisoConducir) && (movilidadGeografica )) {
    console.log("¡¡¡¡Cumples todo!!!!");
}
else {
    console.log("No cumples.")
}

/*****************/
/* VARIANTE COOL */
/*****************/
let esMayorEdad = edad>=18;
let esSoltero = estadoCivil==="Soltero";
let sabeIngles = idiomas.includes("Inglés");

if (esMayorEdad && esSoltero && sabeIngles && permisoConducir && movilidadGeografica){
    console.log("Adelante.");
}
else {
    console.log("Descartado.");
}

/* SWITCH */

let tipoContrato = 2;

switch(tipoContrato){
    case 1:
        console.log("Tipo 1");
        break;
    case 2:
        console.log("Tipo 2");
        break;
    case 3:
        console.log("Tipo 3");
        break;
    default:
        console.log("No sé el tipo de contrato");
}