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