var estudiantes = ["Jessika", "Daniela", "Zhoe", "Laura"];

function saludarEstudiantes(estudiante){

    console.log(`Hola, ${estudiante}`);

}

//for tradicional

for(var i = 0; i < estudiantes.length ; i++){
    saludarEstudiantes(estudiantes[i]);
}

//for each

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}


while(estudiantes.length > 0){

    var estudiante = estudiantes.shift();

    saludarEstudiantes(estudiante);
}

function solution(estudiantes, deathCount, nuevo) {
    
    var estudiantes;

    if(deathCount == 0){
        
        estudiantes.push(nuevo);
    
    }else if(deathCount > 0){

        for(var i = 0; i < deathCount ; i++){
            estudiantes.pop();
        }
        
        estudiantes.push(nuevo);

    }


    return estudiantes;

  }

solution(["Nico", "Zule"], 0, "Santi")
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
solution(["Nath", "Luisa", "Noru"], 2, "Cami")

