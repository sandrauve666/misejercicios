const RATIO = 0.016;
const VELOCIDAD = 1;
var y = -50; //top
var x = 200; //left

setInterval(() => {
    y += VELOCIDAD;
    document.querySelector("#gato1").style.top=`${y}px`; //document.querySelector("#gato1").style`top:${y}px`;
    document.querySelector("#gato1").style.left=`${x}px`;
    if (y > window.innerHeight) {
        y=-100;
        x=Math.random()*window.innerWidth;
    }
}, RATIO);