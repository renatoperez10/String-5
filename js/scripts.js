function esPalindromo(cadena) {
  let resultado;
  // Paso 1: PAsar a minúsculas
  cadena = cadena.toLowerCase();
  // Paso 2: Quitar espacios y signos de puntuación.
  cadena = cadena.replace(/[.,:;()_?¿!¡-\s]/g, "")
  // PAso 3: Cambiar las letras con acento por letras sin acento
  cadena = cadena.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  //Paso 4: Convertir string a un array
  let newCadena = cadena.split("").reverse().join("");
  if (cadena === newCadena) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
let cadena = "Dábale arroz a la zorra el abad";
let resultado = esPalindromo(cadena);
console.log(resultado);
