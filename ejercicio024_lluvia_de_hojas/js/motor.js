const RATIO = 0.016;
//const VELOCIDAD = 1;
let VELOCIDAD1 = 1;
let VELOCIDAD2 = 1;
var y = -50; //top
var x = 200; //left

setInterval(() => {
    y += VELOCIDAD1;
    x += VELOCIDAD2;
    document.querySelector("#gato1").style.top=`${y}px`; //document.querySelector("#gato1").style`top:${y}px`;
    document.querySelector("#gato1").style.left=`${x}px`;
    if ((y > window.innerHeight) || (y < -50)) {
        //y=-100;
        VELOCIDAD1 = VELOCIDAD1 * (-1);
        //x=Math.random()*window.innerWidth;
    }
    if ((x > window.innerWidth) || (x < 0)) {
        //y=-100;
        VELOCIDAD2 = VELOCIDAD2 * (-1);
        //x=Math.random()*window.innerWidth;
    }
}, RATIO);

document.querySelector("#bCerrar").addEventListener("click", () => {
    document.querySelector("footer").style.bottom="-100px";
    document.querySelector("footer").style.opacity="-10"; //Al cerrar el footer, se vuelve transparente.
});