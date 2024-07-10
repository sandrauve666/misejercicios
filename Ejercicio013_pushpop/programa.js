const DELAY = 1000;
const DELAY_CREACION = 3000;
const DELAY_CONSUMO = 5000;
//setInterval(crearTarea, DELAY, DELAY); //1 segundo
setInterval(crearTarea, DELAY_CREACION);
setInterval(consumirTarea, DELAY_CONSUMO);
let cola = [];
let contador=0;
function crearTarea() {
    console.log("Creando tarea....");
    //cola.push("Tarea" + cola.length); //Agrega las tareas al final.
    contador++;
    //cola.push(`Tarea ${cola.length}`); 
    cola.push(`Tarea ${contador}`); 
    //cola.unshift("Tarea" + cola.length); //Agrega las tareas al inicio.
    mostrarCola();
}
function consumirTarea() {
    //cola.pop(); //Obtiene el último elemento de la lista y lo elimina
    let tarea = cola.shift(); //Obtiene el primer elemento de la lista y lo elimina.
    console.log(`Realizando la tarea ${tarea}`);
    mostrarCola();
}
function mostrarCola() {
    let textoHTML = "";
    cola.map(tarea => {
        textoHTML += `<div class='tarea'>${tarea}</div>`;
    });
    document.querySelector("body").innerHTML = textoHTML;
}
