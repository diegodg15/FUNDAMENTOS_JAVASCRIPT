"use strict";
//TIPOS DE DATOS PRIMITIVOS JS

/**Listado de datos primitivos:
 * 1. STRING
 * 2. BOOLEAN
 * 3. NUMBER
 * 4. NULL
 * 5. UNDEFINED
 * 6. BIGINT
 * 7. SYMBOL
 */
//---------------------------------------------------------------------------------
/**Los tipos de datos primitivos (atómicos) se almacenan en la memoria ram (Stack) y son muy rápidos de lectura. */
/* En JavaScript, existen seis tipos de datos primitivos (o simples): Boolean, Number, BigInt, String, Symbol y undefined . Además, el valor nulo primitivo se considera un tipo aparte. Como ya se mencionó, un tipo de dato primitivo es atómico, es decir, un elemento único e indivisible.
 */
//---------------------------------------------------------------------------------

// STRING: cadena de caracteres

{
    let textoString = "hola mundo";
    console.log(typeof textoString);//string
}
{
    let numeroNumber = 12;
    console.log(typeof numeroNumber);//number
}
{
    let isBoolean = true;
    console.log(isBoolean);//boolean
}
{
    let variableNull = null;
    console.log(typeof variableNull);//null
}
{
    let variabloNoAsignada;
    console.log(typeof variabloNoAsignada);//undefined
}
{
    let numeroGrnadeBigInt = 12n;
    console.log(typeof numeroGrnadeBigInt);
}
{
    let id = Symbol("identificador");
    let persona = {
        nombre: "Juan",
        [id]: 12345 // Propiedad con clave Symbol
    };
    console.log(typeof id); // "symbol"
    console.log(persona[id]); // 12345
}
//---------------------------------------------------------------------------------

//BOOLEAN: tipo de dato lógico ->valores: true(verdadero = 1 -> truthy) y false(falso = 0 -> falsy)
// truthy y falsy son valores que pueden ser verdaderos o falsos en un contexto boleano
{
    let isDataValid = true;
    let isStringTooLong = false;
    let isGameOver = false;
    continueLoop = true;

    console.log(false);  //  ->  false
    console.log(typeof false);  //  ->  boolean
    console.log(isDataValid);  //  ->  true
    console.log(typeof isDataValid);  //  ->  boolean
}
//FALSY:            |  TRUTHY: todos los que no sean falsy.
/**                 |  --{}; [] : son truthy por que aunque no contengan nada, representan una funcion o array existente.
 * Null             |
 * NaN              |
 * " "              |
 * 0; -0; 0n        |
 * False            |
 * Undefined        |
 */
//---------------------------------------------------------------------------------

//NUMBER: Este es el tipo numérico principal en JavaScript que representa tanto números reales (por ejemplo, fracciones) como enteros. El formato en el que se almacenan los datos de este tipo en la memoria implica que sus valores a veces son aproximados (especialmente, aunque no exclusivamente, valores muy grandes o algunas fracciones). Se asume, entre otras cosas, que para garantizar la exactitud de los cálculos, los valores enteros en JavaScript deben limitarse al rango de [0, 1] a [0, 1].-(253 – 1)a(253 – 1).
{
    const year = 1991;
    let delayInSeconds = 0.00016;
    let area = (16 * 3.14);
    let halfArea = area / 2;

    console.log(year);  //  ->  1991;
    console.log(typeof year);  //  ->  number;
}


//Ejemplo uso de symbol:
const ID_AUTO = Symbol("chl-123")
{
    let obj = {};

    obj[Symbol("a")] = "a";
    obj[Symbol.for("b")] = "b";
    obj["c"] = "c";
    obj.d = "d";

    for (let i in obj) {
        console.log(i); // imprime en registro "c" y "d"
    }
}