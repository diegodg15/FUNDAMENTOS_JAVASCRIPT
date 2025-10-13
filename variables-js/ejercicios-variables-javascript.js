
//EJERCICIOS USO DE VARIABLES
//---------------------------------------------------------------------------------

//Ejercicio N°1
/**cambiar variables de a --> b */
{
    let a = 1;
    let b = 0;
    let aux = null;
    console.log(`a tiene el varlor de: ${a}, b tiene el valor de ${b}`);

    //reasignación de variables:
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
