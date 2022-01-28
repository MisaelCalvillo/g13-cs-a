/*
  Uno de los más grandes problemas al declarar variables con la palabre clave 'var
  es que se puede facilmente sobre-escribir con una declaración de variable. 
*/

var alumno = "Misael";
var alumno = "Romina";
console.log(alumno);

/* 
  En el código de arriba, la variable 'camper' es originalmente declarada como 'James'
  y después es sobre-escrita para ser 'David'. La consola muestra el string 'David'.

  En aplicaciones pequeñas es dificil que llegues a tener este tipo de problemas. Pero 
  conforme tu base de código se vuelve más grande, puedes accidentalmente sobre-escribir
  una variable que no tenías la intención de cambiar. Porque este comportamiento no tira
  ningún error, buscar el error y corregirlo se vuelve muy difícil. 

  Una palabra clave llamada 'let' fue agregada en ES6, una actualización mayor a 
  JavaScript para solucionar este problema con la 'var'. 

  Si tu reemplazas 'var' con 'let' el en código de arriba, resulta en un error. 
*/

let alumno = "James";
let alumno = "David";

/*
  El error puede ser visto en la consola al momento de correr este cóidigo. Puedes comentar 
  y descomentar las lineas a tu gusto para probar. 

  Actualiza el código para solo usar 'let' !! 
*/
