"use strict";
//TIPOS DE DATOS PRIMITIVOS JS

/**Listado de datos primitivos:
 * 1. STRING
 * 2. NUMBER
 * 3. BOOLEAN
 * 4. NULL
 * 5. UNDEFINED
 * 6. BIGINT
 * 7. SYMBOL
 */
//-----------------------------------------------------

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
