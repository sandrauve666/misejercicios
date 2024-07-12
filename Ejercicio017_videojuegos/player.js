class Player {
    constructor(sprite, x, y, speed)
    {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.speed = speed;

        console.log("Paso 1");
        let imagen = new Image(); //creando un objeto imagen de la clase Image. Image es una clase de JS.
        console.log("Paso 2");
        img1.onload = function(){
            console.log("Paso 3");
            console.log("Imagen cargada");
            let c=document.querySelector("#myCanvas");
            let ctx = c.getContext("2d");
        };
        imagen.src = `images/{sprite}`;
    }

    
} 