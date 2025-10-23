
//EJERCICIOS USO DE VARIABLES
//---------------------------------------------------------------------------------

//Ejercicio N°001: declaración de variables
/**declarar diferentes tipos de variables (convensiones) */
{
    let numero = 1;
    let numeroUno = 1;//camelCase
    let $numero = 1;
    let _numero = 1;
    let numeroNulo = null;

    const NUMERO_PI = Math.PI;//UPPER_SNAKE_CASE

    let isBoolean = true;
    let bigInt = 12n;
}

//Ejercicio N°002: cambio variable
/**cambiar variables de a --> b */
{
    let a = 1;
    let b = 0;
    let aux = null;
    console.log(`a tiene el varlor de: ${a}, b tiene el valor de ${b}`);

    //reasignación de variables con uso de variable auxiliar:
    aux = a;
    a = b;
    b = aux;
    console.log(`a tiene el varlor de: ${a}, b tiene el valor de ${b}`);

    //desestructuración de arrays/ intercambio de valores mediante desestructuración:
    {
        let a = 1;
        let b = 0;
        [a, b] = [b, a];
        console.log(`El valor de a es : ${a} y  \nel valor de b es: ${b}`);
    }
}


//Ejercicio N°3
/**concatenación de variables */
{

}

//Ejercicio N°4
/** */
{

}
