var a = 4 + "7";
typeof a;

var b = 4 * "7";
typeof b;

var d = 20;
var r = d + "";
console.log(r);
typeof r;

var c = String(d);
console.log(c);
typeof c;

var n = Number(c);
typeof n;

// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true