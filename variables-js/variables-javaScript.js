"use strict";//Define que el código JavaScript debe ejecutarse en "modo estricto", es una expresion literal.

//LITERAL: valor en sí mismo; escribir directamente un valor fijo en el código.
{
    43;
    "hola";
    true;
}

//EXPRESIÓN REGULAR (regex/RegExp): Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda .
{
    // /\d{3}/        // cualquier número de 3 dígitos
    //    /^ Hola /        // cadenas que comiencen con "Hola"
    //    /abc/          // busca la secuencia "abc" en un texto
}

//VARIABLE: contenedor para guardar valores/datos. (declaración = asignación/inicialización)
{
    var texto = "hola";
    let numero = 12;
    const VALOR_PI = 3.14;
}


//---------------------------------------------------------------------------------

//VARIABLES JAVASCRIPT

/*
    Reglas para declarar variables:
    1. letra
    2. $
    3. _

    Convensiones variables:
    1. camelCase = variables en general.
    2. UPPER_SNAKE_CASE = variables globales y constantes (const).
    3. PascalCase = clases y constructores.
{
    let colorAuto = "rojo";
    const VALOR_NUMERO_PI = 3.14;

    class TrianguloRecto{
        constructor (alto, ancho){
            this.alto = alto;
            this.ancho = ancho;
        }
    }
}

    Tipos:      Alcance (scope):
    - VAR       |->Scope function (Alcance a nivel de funcion) function scopeFunction(){}
    - LET       |->Scope block (alcance a nivel de bloque) {}
    - CONST     |->Scope block

    --Nota: recomendable no usar var; let solo si la variable debe cambiary usar const por defecto.--
*/

{
    var scopeFunction = "variable var";
    let scopeBlock = "variable let global";//queda como variable global.
    console.log(scopeBlock);
    {
        console.log(scopeFunction);
        console.log(scopeBlock);

        let scopeBlock2 = "variable let local"
        console.log(scopeBlock2);
    }
    console.log(scopeBlock2);//error.
}

//---------------------------------------------------------------------------------























