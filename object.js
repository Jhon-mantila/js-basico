//objeto
var objecto = {};

//objetos son palabras claves y valores


var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.ano}`);
    }
}

// el this hace referencia a un objeto en este ejemplo a su padre que es mi Auto
console.log(miAuto.marca);

console.log(miAuto.detalleDelAuto());