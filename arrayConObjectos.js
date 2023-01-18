var articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 1000},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 13000},
    {nombre: "Teclado", costo: 3000},
    {nombre: "Audifonos", costo: 1500}
];

//filter trae todo el objeto

var articulosFiltrados = articulos.filter(function(articulo){
    //el parametro es el que toma el array articulos
    return articulo.costo <= 2000;
});

console.log(articulosFiltrados);

// map trae solo los objeto mensionado
var nombreArtiuculos = articulos.map(function(articulo){
    return articulo.nombre;
});

console.log(nombreArtiuculos);

//.find solo encuentra uno solo
var encuentraObjecto = articulos.find(function(articulo){
    return articulo.nombre === "Tv";
});

console.log(encuentraObjecto);

//forEach es un metodo y te trae cada objeto

articulos.forEach(function(articulo){
    console.log(articulo.nombre + " " + articulo.costo);
});

//some() solo devuelve true o false

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 3000;
});

console.log(articulosBaratos);