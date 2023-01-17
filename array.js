//crear array js

var frutas = ["Manzana", "Banano", "Mango", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas[0]);
console.log(frutas.length);

//agregar o quitar elementos

var masFrutas = frutas.push("Moras"); //agrega elementos al final del arrays

var ultimo = frutas.pop(); // elimina el último elemento del array

var frutaInicial = frutas.unshift("Tomate de arbol");  //agregar un nuevo valor al array pero al inicio

var eliminarFrutaInicial = frutas.shift(); // borra el que esta al inicio de la posición del array

var posicionElementoFrutas = frutas.indexOf("Mango"); // Muestra la posición del elemento en el array.