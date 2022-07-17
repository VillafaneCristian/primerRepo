//let num=6;
//let num2=3;

/*console.log(numero+numero2);

console.log(numero);
console.log("Esta es una prueba de variables");

let cadena = "Hola como estas???";

console.log(cadena);
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());
console.log(cadena.indexOf("Mundo"));
console.log(cadena.indexOf("como"));
console.log(cadena.replace("estas","estoy"));
console.log (cadena.length);*/

/*console.log(Math.E);
console.log(Math.PI);
console.log(Math.abs(numero));
console.log(Math.ceil(numero));
console.log(Math.floor(numero));
console.log(Math.pow(numero,numero2));
console.log(Math.round(Math.random()*100));*/

/*if (num>0){ 
    console.log("El numero "+num+" es mayor que cero");
}else if (num<0){
    console.log("El numero "+num+" es menor que cero");
}else{
    console.log("El numero "+num+" es igual a cero");
}

if ((num> 0)&&(num2>0)){
    console.log(`${num} y ${num2} son mayores que cero`);
}*/

/*let vector=[1,2,3,4,5,6,7,8,9]

console.log(vector[1]);
console.log(vector[4]);
console.log(vector);
console.log(vector[1]+vector[2]);*/

/*let peliculas = ['batman','superman','montecristo','robin hood'];

console.log(peliculas);

peliculas.push('thor','spiderman');

console.log(peliculas);

let ultimo = peliculas.pop();

console.log(ultimo);

peliculas.unshift('el capitan america');

console.log(peliculas);

let primero = peliculas.shift();

console.log(peliculas);
console.log(primero);

let posicion = peliculas.lastIndexOf('thorr');

console.log(posicion);

let cadena = peliculas.join('*');

console.log (cadena);

console.log(cadena.length);
console.log(peliculas[0].length);

let tramo = cadena.slice(6,10);

console.log(tramo);

console.log (cadena.split('*'));
console.log(peliculas.length);

console.log(cadena.replace('superman','acuaman'));

let persona = {
    nombre: 'Carlos',
    edad: 35,
    altura: 1.75,
    peso: 75,
    club: 'Boca Juniors',
    saludar: function () {
        return "Hola, soy " + this.nombre;
    }
};

console.log(persona.nombre + ' tiene ' + persona.edad + ' años y es fanatico de ' + persona.club );

console.log(persona.saludar());

function Auto(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}

let auto1 = new Auto ('Nisan','alpha','azul');
let auto2 = new Auto ('Fiat','uno','negro');

console.log(auto1); 
console.log(auto2);

(10>20)?console.log("es mayor"):console.log("es menor");

let caso = 5;

switch (caso){
    case 1:
        console.log("es 1");
        break;
    case 2:
        console.log("es 2");
        break;
    default:
        console.log("no es ninguno");
}

function asientosDisponibles(disponibilidad,preferencia){
    if (disponibilidad.indexOf(preferencia)!= -1){
        return '"Felicitaciones, el asiento número' + preferencia + 'está disponible"'
    }else{
        return '"Lo sentimos, el asiento número '+ preferencia + ' está ocupado, pero aún quedan 5 asientos disponibles"'
    }
}

console.log(asientosDisponibles([3, 15, 18, 25], 78));*/

/*let respuesta = [];

function reporteDePasajeros(estacion){
    let pasajeros = 180;
    for (let i = 0; i<=estacion; i++ ){

        if (i!=5){
            pasajeros = pasajeros + 20; 
            respuesta[i] = ('En la estación ' + i + ' hay ' + pasajeros + ' pasajeros arriba del tren');           
        }else{
            pasajeros = pasajeros + 40;
            respuesta[i]= ('En la estación ' + i + ' hay ' + pasajeros + ' pasajeros arriba del tren');
        }
    }
    return respuesta;
}*/


//reporteDePasajeros(6);

//console.log(respuesta);

/*function asientosDisponibles(disponibilidad,preferencia){
    if (disponibilidad.indexOf(preferencia)!= -1){
        return '"Felicitaciones, el asiento número ' + preferencia + ' está disponible"';
    }else{
        return '"Lo sentimos, el asiento número '+ preferencia + ' está ocupado, pero aún quedan 5 asientos disponibles"';
    }
}
console.log (asientosDisponibles([3, 15, 18, 25], 18));*/
let num1, num2;

function sumar (num1,num2) {
    return num1 + num2;
}

function restar (num1, num2){
    return num1-num2;
}

let calculadora = (numero1,numero2,operacion) => operacion (numero1,numero2);

console.log(calculadora (5,6,restar));

let numeros = [5,8,9,6,4,7,8,5,11,-5,6,-2];

let valores = [10,20,30];

console.log(numeros);

let notas = numeros.map ( function (numero){
    return  numero * 10;
});

console.log(notas);

let filtro = numeros.filter(function(numero){
    return ((numero>5)||(numero<0));
});

console.log(filtro);

let sumaValores = valores.reduce(function(estado,numero){
    return estado + numero;
});

console.log(sumaValores);

console.log (filtro);

console.log("mensaje para probar el concepto de ramas"); 

console.log("nuevaRama");

