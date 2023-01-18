var articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 1000},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 13000},
    {nombre: "Teclado", costo: 3000},
    {nombre: "Audifonos", costo: 1500}
];

//filtrar nuevo metodo

var articulosFiltrados = articulos.filter(function(articulo){
    //el parametro es el que toma el array articulos
    return articulo.costo <= 2000;
});

console.log(articulosFiltrados);

var nombreArtiuculos = articulos.map(function(articulo){
    return articulo.nombre;
});

console.log(nombreArtiuculos);