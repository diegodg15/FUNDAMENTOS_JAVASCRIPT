
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
    //lógica aritmética:
    {
        let a = 5;
        let b = 10;
        a = a + b;
        b = a - b;
        a = a - b
        console.log(`El valor de a ahora es a: ${a} y el de b: ${b} `);
    }

}

/**Los siguientes ejercicios fueron hechos por el agente */
//Ejercicio N°3
/**concatenación de variables */
{
    //concatenar strings con +
    let nombre = "Juan";
    let apellido = "Pérez";
    let nombreCompleto = nombre + " " + apellido;
    console.log("Nombre completo: " + nombreCompleto);

    //concatenar usando template literals
    let edad = 30;
    let mensaje = `Hola, soy ${nombre} ${apellido} y tengo ${edad} años.`;
    console.log(mensaje);

    //concatenación con números y strings
    let numero = 5;
    let texto = "El número es ";
    console.log(texto + numero); // 'El número es 5'
}

//Ejercicio N°4
/**operaciones aritméticas básicas y conversiones */
{
    let a = "10";
    let b = "2";

    //la suma con strings concatena
    console.log("a + b =", a + b); // '102'

    //convertir a número antes de operar
    let suma = Number(a) + Number(b);
    console.log("Number(a) + Number(b) =", suma); // 12

    //otros operadores
    console.log("a - b =", a - b); // 8 (JS convierte automáticamente)
    console.log("a * b =", a * b); // 20
    console.log("a / b =", a / b); // 5

    //parseInt y parseFloat
    let c = "3.14";
    console.log(parseInt(c)); // 3
    console.log(parseFloat(c)); // 3.14
}

//Ejercicio N°5
/**alcance de variables (scope) con let/const/var */
{
    if (true) {
        var x = 1; //declarada con var -> función/ global
        let y = 2; //bloque
        const z = 3; //bloque
    }
    console.log(x); //1
    //console.log(y); //ReferenceError: y no está definido
    //console.log(z); //ReferenceError: z no está definido

    //al interior de una función
    function prueba() {
        if (true) {
            var a = 5;
            let b = 6;
        }
        console.log(a); //5
        //console.log(b); //ReferenceError
    }
    prueba();
}

//Ejercicio N°6
/**intercambio de valores usando desestructuración y aritmética*/
{
    let m = 7;
    let n = 4;

    //con desestructuración
    [m, n] = [n, m];
    console.log("después del intercambio m:", m, "n:", n); //4 7

    //otra vez con aritmética
    m = 7;
    n = 4;
    m = m + n; //11
    n = m - n; //7
    m = m - n; //4
    console.log("intercambio aritmético m:", m, "n:", n);
}
