
//EJERCICIOS JS NIVEL BÁSICO:


//---------------------------------------------------------------------------------

//Ejercicio N°001: cambio de variables
{
    {
        //uso de variable auxiliar
        let a = 10;
        let b = 9;
        let auxiliar;

        auxiliar = a;
        a = b;
        b = auxiliar;
        console.log(a, b);//9, 10
    }

    {
        //uso de comprobación de operaciones + y -
        let a = 10;
        let b = 9;

        a = a + b;
        b = a - b;
        a = a - b;
        console.log(a, b);//9, 10
    }

    {//uso de desestructuración de arrays
        let a = 10;
        let b = 9;
        [a, b] = [b, a];
        console.log(a, b);//9, 10
    }
}

//---------------------------------------------------------------------------------
//Ejercicio N°002: suma iterativa
{
    {
        const numeroTotal = 10;//la suma debe dar 55 =>(1+2+3+4+5+6+7+8+9+10 = 55)
        let sumaIterativa = 0;

        for (let i = 1; i <= n; i++) {
            sumaIterativa = sumaIterativa + i;
        }
        console.log(sumaIterativa);//55
    }
    {
        //otra forma: uso de fórmula de la sumatoria.
        const numeroTotal = 10;
        const formulaSumarotia = (numeroTotal * (numeroTotal + 1)) / 2;
        console.log(formulaSumarotia);//55
    }
}

//---------------------------------------------------------------------------------
//Ejercicio N°003: uso de centinela
{
    let isCentinela = true;//booleano
    let i = 0;

    while (isCentinela) {
        i++;
        if (i >= 10) {
            isCentinela = false;
        }
        console.log(i);
    }
}

//---------------------------------------------------------------------------------
//Ejercicio N°004 bucle infinito con cancelación en coincidencia
{
    let isCentinela = true;

    let i = 0;
    while (isCentinela) {
        i++;
        if (i === 5) {
            isCentinela = false;
        }
        console.log(i);
    }
}