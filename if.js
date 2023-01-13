//condicional if

var edad = 18;

if(edad === 18){
    console.log("Puedes votar, por primera vez");
}else if(edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar");
}

//operador ternario
//condición ? true : false

var resultado = (edad === 18) ? "Puedes votar, por primera vez": "Aun no puedes votar";
console.log(resultado);