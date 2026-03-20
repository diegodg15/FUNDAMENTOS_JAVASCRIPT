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
    console.log(typeof numeroGrnadeBigInt);//bigInt
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

//BOOLEAN: tipo de dato lógico ->valores: true(verdadero = 1 -> truthy) y false(falso = 0 -> falsy). Este tipo de dato, es utilizado con frecuencia como una flag (bandera o centinela), para controlar estructuras de control. 
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
/**                 |  --{}; [] : aunque no contengan nada, representan una funcion o array existente.
 * Null             |
 * NaN              |
 * " "              |
 * 0; -0; 0n        |
 * False            |
 * Undefined        |
 */
//---------------------------------------------------------------------------------

//NUMBER: Este es el tipo numérico principal en JavaScript que representa tanto números reales por ejemplo, fracciones como enteros. El formato en el que se almacenan los datos de este tipo en la memoria implica que sus valores a veces son aproximados especialmente, aunque no exclusivamente valores muy grandes o algunas fracciones. Se asume, entre otras cosas, que para garantizar la exactitud de los cálculos, los valores enteros en JavaScript deben limitarse al rango de [0, 1] a [0, 1].-(253 – 1) a (253 – 1).
{
    const year = 1991;
    let delayInSeconds = 0.00016;
    let area = (16 * 3.14);
    let halfArea = area / 2;

    console.log(year);  //  ->  1991;
    console.log(typeof year);  //  ->  number;
}

//SYMBOL: Es un tipo de dato primitivo único e inmutable introducido en ES6. Cada Symbol creado es único y no puede ser recreado. Los símbolos se utilizan frecuentemente como claves de propiedades en objetos cuando se quiere evitar colisiones de nombres o crear propiedades "privadas" (no enumerables). A diferencia de los strings, los Symbols nunca son iguales, aunque tengan la misma descripción.

/**CARACTERÍSTICAS DE SYMBOL:
 * - Cada símbolo es único: Symbol("id") !== Symbol("id")
 * - No son enumerables en bucles for...in ni Object.keys()
 * - Se pueden usar como claves de objetos para crear propiedades ocultas
 * - Symbol.for() crea símbolos globales reutilizables
 * - typeof symbol devuelve "symbol"
 * - No se puede usar el operador new con Symbol
 */

// EJEMPLO 1: Símbolo único para identificador
{
    const ID_USUARIO = Symbol("idUsuario");
    const CONTADOR = Symbol("contador");
    
    console.log(typeof ID_USUARIO); // "symbol"
    console.log(ID_USUARIO.toString()); // Symbol(idUsuario)
    console.log(Symbol("id") === Symbol("id")); // false - cada uno es único
}

// EJEMPLO 2: Usar símbols como propiedades de objetos para evitar colisiones
{
    const smbUsuario = Symbol("usuario");
    const smbPassword = Symbol("password");
    
    let usuario = {
        nombre: "Juan",
        [smbUsuario]: "juan@email.com",
        [smbPassword]: "secreto123"
    };
    
    console.log(usuario.nombre); // "Juan"
    console.log(usuario[smbUsuario]); // "juan@email.com"
    console.log(Object.keys(usuario)); // ["nombre"] - los symbols NO aparecen
}

// EJEMPLO 3: Symbol.for() - Símbolos globales reutilizables
{
    const id1 = Symbol.for("app.id"); // Crea o recupera un símbolo global
    const id2 = Symbol.for("app.id"); // Recupera el mismo símbolo
    
    console.log(id1 === id2); // true - mismo símbolo global
    console.log(Symbol.keyFor(id1)); // "app.id" - obtiene la clave
}

// EJEMPLO 4: Propiedades privadas con Symbol
{
    const ID_AUTO = Symbol("chl-123");
    
    let obj = {};
    obj[Symbol("a")] = "a"; // no enumerable
    obj[Symbol.for("b")] = "b"; // no enumerable
    obj["c"] = "c"; // enumerable
    obj.d = "d"; // enumerable
    
    for (let i in obj) {
        console.log(i); // imprime solo "c" y "d" - los symbols se ignoran
    }
    
    console.log(Object.getOwnPropertySymbols(obj)); // acceder a las propiedades symbol
}