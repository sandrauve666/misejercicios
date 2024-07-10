class Pelicula {
    constructor(titulo, duracion, genero, clasificacion){
        this.titulo = titulo;
        this.duracion = duracion;
        this.genero = genero;
        this.clasificacion = clasificacion;
    }
}

let peli1 = new Pelicula("Titanic", "3", "Drama", "5");
let peli2 = new Pelicula("Parasite", "2", "Terror", "4");
let peli3 = new Pelicula("Chucky", "2", "Terror", "2");

let pelis = [];

pelis.push(peli1);
pelis.push(peli2);
pelis.push(peli3);

//Otra: let pelis = [peli1, peli2, peli3];

console.log(pelis);

let pelis2 = pelis.filter(p=>p.genero==='Terror').sort((p1,p2)=>p1.clasificacion-p2.clasificacion);
console.log(pelis2);