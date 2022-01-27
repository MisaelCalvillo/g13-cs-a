// Regrese la palabra más grande de una oración

function mayorLongitud(cadena){
  let arregloCadena = cadena.trim().split(" ");
  let mayorL = arregloCadena[0];

  for(let i = 0; i < arregloCadena.length; i++){
      if(mayorL.length < arregloCadena[i].length){
          mayorL = arregloCadena[i];
      }
  }

  return mayorL;
}

function mayorLongitud(cadena) {
  let arregloCadena = cadena.trim().split(" ");
  let big = arregloCadena[0];
  arregloCadena.forEach((w) => big.length < w.length ? big = w : undefined)
  
  // funtion() {}
  // true ? "algo positivo" : "algo negativo";
  // () => {}
 
 
  // [].map()
  // [].forEach()

  return big;
}

mayorLongitud(" Mi vieja mula ya no es lo que era especial");