
//EJERCICIOS JS NIVEL BÁSICO:

//---------------------------------------------------------------------------------

//Ejercicio N°001: suma iterativa
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

//Ejercicio N°002: uso de centinela
{
    let isCentinela = true;
    let i = 0;

    while (isCentinela) {
        i++;
        if (i >= 10) {
            isCentinela = false;
        }
        console.log(i);
    }
}

