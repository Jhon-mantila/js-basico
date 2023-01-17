var numero = 1;

switch(numero){
    case 1:
        console.log("Soy uno!!");
    break;
    case 2:
        console.log("Soy dos!!");
    break;
    case 3:
        console.log("Soy tres!!");
    break;
    default:
        console.log("No eres ni 1, 2 ni 3");
    break;
}

var article = "computadora";

function solution(article) {
    
    switch(article){
        case "computadora":
            return "Con mi " + article + " puedo programar usando JavaScript";
        break;

        case "celular":
            return "En mi " + article + " puedo aprender usando la app de Platzi";
        break;

        case "cable":
            return "¡Hay un " + article + " en mi bota!"
        break;

        default:
            return "Artículo no encontrado";
        break;
    }
  }

solution('computadora');
solution('celular');
solution('cable');
solution('ornitorrinco');