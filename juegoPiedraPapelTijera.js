var piedra = 1;
var papel = 2;
var tijera = 3;

juego2(1, 2);

function juego2(jugador, pc){
    
    console.log("jugador: "+jugador);
    console.log("pc: "+pc);
    

    var resultado;
    var opcionJ;
    var opcionP;

    if(jugador == 1){
        opcionJ = "Piedra";
    }else if(jugador == 2){
        opcionJ = "Papel";
    }else{
        opcionJ = "Tijera";
    }

    if(pc == 1){
        opcionP = "Piedra";
    }else if(pc == 2){
        opcionP = "Papel";
    }else{
        opcionP = "Tijera";
    }

    

    if( (jugador == 2 && pc == 1) || (jugador == 1 && pc == 3) || (jugador == 3 && pc == 2)){

       resultado = "Gana jugador con: " + opcionJ;

    }else if(jugador == pc){
        
        resultado = "Empate con: " + opcionJ;

    }else{

        resultado = "Gana pc con: "+ opcionP;
    }

    return resultado;
}


juego("Piedra", "Papel");

function juego(op1, op2){

    var resultado;

    if((op1 == "Piedra" && op2 == "Papel") || (op1 == "Papel" && op2 == "Piedra")){

        resultado = "Papel";

    }else if ((op1 == "Piedra" && op2 == "Tijera") || (op1 == "Tijera" && op2 == "Piedra")){
        
        resultado = "Piedra";

    }else if ((op1 == "Papel" && op2 == "Tijera") || (op1 == "Tijera" && op2 == "Papel")){
        
        resultado = "Tijera";

    }else if (op1 == op2){
        
        resultado = "Empate";
    }

    return resultado;
}