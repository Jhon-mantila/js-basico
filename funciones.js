//Funciones declarativas
function miFuncion(){ return 3; }
miFuncion();
//Funciones de Expresión
var miFuncion = function(a,b){ return a + b; }
miFuncion(2,4);

function saludar(nombre){
    console.log(nombre);
}

saludar("Jhon");

function saludar2(nom){
    console.log(`hola ${nom}`);
}

function suma(a,b){
    var resultado = a + b;
    return resultado;
}

suma(5+2);
