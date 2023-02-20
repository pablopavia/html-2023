// Comentario

/*

Comentario de varias lineas 
 JS se carga en funcion de arriba a abajo
*/

// Mostrar en la consola del navegador los textos o las variables que le pongamos

console.log('Hola Mundo JS');

console.log('Segunda linea de codigo');

// Definimos una variable con la palabra let
let nombre = 'Pablo';

console.log('El valor de la variable nombre es:');
console.log(nombre);

// Modificar el valor de una variable
nombre = 'Juan';

console.log('Nombre despues despues de modificarlo');
console.log(nombre);

let edad = 10;

console.log('edad');
console.log(edad);

// BOOLEAN

let mayorEdad = true;
let otromayorEdad = false;

console.log(mayorEdad);

// Sentencia de control : IF - ELSE

if (mayorEdad === true) {
  console.log('Eres viejo');
} else {
  console.log(' Eres un niñato');
}

let precio = 20;
let gastos_envio = 0;

if (precio < 50) {
  console.log('Sumar gastos de envio');
  gastos_envio = 5;
} else {
  console.log('Gastos de envio son 0');
}

let precio_total = precio + gastos_envio;

console.log('precio_total');
console.log(precio_total);

/*

    Como cargar jquery 
    Como acceder a elementos de la web
    Como crear eventos
      - Algo que hace el usuario y quiero responder a esa accion
      - Click , Doble click, hover, scroll, keyboard, keyup, keypress, mover el raton...

      Añadir y quitar clases

*/

$(document).ready(function () {});

// Seleccionar elementos de la web

// $('h1').addClass('color-red');

//  Crear Eventos (click, scroll, algo que hace el usuario)

$('#btn1').click(function () {
  // NO SE EJECUTA AL PRINCIPIO de la carga
  // Solo se ejecuta cuando se produce el evento
  console.log('Click en el boton');
  $('h1').addClass('color-red');
});

// Añadir / quitar clases
