// Ejemplos de Expresiones Regulares en JavaScript

// Las expresiones regulares (regex) son patrones utilizados para buscar y manipular texto.
// En JavaScript, se crean con /patron/flags o con new RegExp('patron', 'flags').

// Ejemplo 1: Coincidir con un patrón simple
// Buscar la palabra "hola" en una cadena
const regex1 = /hola/;
const cadena1 = "Hola mundo, hola a todos";
console.log("Ejemplo 1 - test():", regex1.test(cadena1)); // true
console.log("Ejemplo 1 - match():", cadena1.match(regex1)); // ['hola']

// Ejemplo 2: Usando flags
// Flag 'i' para ignorar mayúsculas/minúsculas
const regex2 = /hola/i;
const cadena2 = "Hola Mundo";
console.log("Ejemplo 2 - test():", regex2.test(cadena2)); // true

// Ejemplo 3: Coincidir con dígitos
// \d coincide con cualquier dígito
const regex3 = /\d+/;
const cadena3 = "Tengo 25 años";
console.log("Ejemplo 3 - match():", cadena3.match(regex3)); // ['25']

// Ejemplo 4: Coincidir con letras
// [a-z] coincide con letras minúsculas
const regex4 = /[a-z]+/;
const cadena4 = "Hola123";
console.log("Ejemplo 4 - match():", cadena4.match(regex4)); // ['ola']

// Ejemplo 5: Coincidir con espacios en blanco
// \s coincide con espacios, tabuladores, etc.
const regex5 = /\s+/;
const cadena5 = "Hola mundo";
console.log("Ejemplo 5 - match():", cadena5.match(regex5)); // [' ']

// Ejemplo 6: Coincidir con el inicio y fin de cadena
// ^ para inicio, $ para fin
const regex6 = /^Hola/;
const cadena6 = "Hola mundo";
console.log("Ejemplo 6 - test():", regex6.test(cadena6)); // true

const regex7 = /mundo$/;
console.log("Ejemplo 7 - test():", regex7.test(cadena6)); // true

// Ejemplo 8: Coincidir con cero o más ocurrencias
// * para cero o más
const regex8 = /ab*c/;
const cadena8 = "ac, abc, abbc";
console.log("Ejemplo 8 - match():", cadena8.match(regex8)); // ['ac']

// Ejemplo 9: Coincidir con uno o más ocurrencias
// + para uno o más
const regex9 = /ab+c/;
const cadena9 = "ac, abc, abbc";
console.log("Ejemplo 9 - match():", cadena9.match(regex9)); // ['abc']

// Ejemplo 10: Coincidir con cero o una ocurrencia
// ? para cero o una
const regex10 = /ab?c/;
const cadena10 = "ac, abc";
console.log("Ejemplo 10 - match():", cadena10.match(regex10)); // ['ac']

// Ejemplo 11: Grupos de captura
// () para capturar grupos
const regex11 = /(\w+) (\w+)/;
const cadena11 = "Juan Perez";
const match11 = cadena11.match(regex11);
console.log("Ejemplo 11 - match():", match11); // ['Juan Perez', 'Juan', 'Perez']

// Ejemplo 12: Reemplazar con regex
// Usando replace()
const regex12 = /mundo/;
const cadena12 = "Hola mundo";
const nuevaCadena = cadena12.replace(regex12, "universo");
console.log("Ejemplo 12 - replace():", nuevaCadena); // "Hola universo"

// Ejemplo 13: Usando new RegExp
// Crear regex dinámicamente
const patron = "hola";
const regex13 = new RegExp(patron, "i");
console.log("Ejemplo 13 - test():", regex13.test("Hola")); // true

// Ejemplo 14: Coincidir con correos electrónicos simples
// Patrón básico para email
const regex14 = /\w+@\w+\.\w+/;
const cadena14 = "miemail@example.com";
console.log("Ejemplo 14 - test():", regex14.test(cadena14)); // true

// Ejemplo 15: Coincidir con números de teléfono (formato simple)
// Patrón para números como 123-456-7890
const regex15 = /\d{3}-\d{3}-\d{4}/;
const cadena15 = "Mi número es 123-456-7890";
console.log("Ejemplo 15 - match():", cadena15.match(regex15)); // ['123-456-7890']

// Nota: Estos son ejemplos básicos. Las expresiones regulares pueden ser muy complejas.
// Para probar estos ejemplos, ejecuta este archivo con Node.js o en la consola del navegador.