/*
  En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se 
  pasa una función como argumento a otra función. En su lugar, creamos funciones inline 
  (en línea). 
  
  No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.

  Para lograr esto, por lo general se usa la siguiente sintaxis:
*/

const myFunc = function() {
  const myVar = "value";
  return myVar;
}

/*
  ES6 nos proporciona el azúcar sintáctico, para no tener que escribir funciones anónimas 
  de este modo. En su lugar, puedes usar la sintaxis de función flecha:
*/

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

/*
Cuando la función no posee cuerpo y sólo tiene un valor de retorno, la sintaxis de
 "función de flecha", te permite omitir la palabra clave return, así como los 
 corchetes que rodean el código. 
 
 Esto ayuda a simplificar las funciones más pequeñas en sentencias de una sola línea:
*/

const myFunc = () => "value";

// Este código todavía devolverá la cadena value por defecto.


/*
  Ejercicio: 
  Reescribe la función asignada a la variable magic, la cual devuelve una new Date(), 
  utilizando la sintaxis de función flecha. 
  
  Además, asegúrate de que nada esté definido usando la palabra clave var.
*/

var magic = function() {
  return new Date();
};

// Al igual que una función regular, puedes pasar argumentos a una función flecha.

const doubler = (item) => item * 2;
doubler(4);

/*
  doubler(4) devolvería el valor 8.

  Si una función flecha tiene un solo parámetro, los paréntesis que encierran el 
  parámetro pueden ser omitidos.
*/

const doubler = item => item * 2;

/* Es posible pasar más de un argumento a una función flecha. */

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

// multiplier(4, 2) devolverá el valor 8.

/*
  Ejercicio: 
  Reescribe la función myConcat que añade el contenido de arr2 a arr1 para que la 
  función use la sintaxis de función flecha.
*/

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));