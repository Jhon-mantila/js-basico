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


//función contructora, crear una clase(objeto) luego se llaman su atributos
function auto(marca, modelo, annio){
    
    this.marca = marca;
    this.modelo = modelo;
    this.ano = annio;

}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Modelo X", 2019);
var autoNuevo3 = new auto("Tesla", "Modelo 2", 2018);
new auto("Toyota", "Corolla", 2019);


var autos = [];

for(var i = 0; i < 2; i++){

    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var ano = prompt("Ingresa el año del auto");

    autos.push(new auto(marca, modelo, ano));
}

console.log(autos);

var car = {
    color: "Rojo",
    brand: "Kia"
    
}

    
function solution(car) {
        //console.log(car);
        //console.log("license: "+ car.licensePlate);

            if(car.licensePlate != undefined){
               //console.log("Tiene Licencia");
               car.drivingLicense = true;
            }else{
                //console.log("No Tiene Licencia");
                car.drivingLicense = false;
            }

            return car;
          
    
}
solution(car);

for (var property in car) {
    console.log(`${property}: ${car[property]}`);
}