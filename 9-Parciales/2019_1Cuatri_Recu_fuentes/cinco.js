function mostrar()
{

/* 
Ejercicio 3

Nos ingresan una cantidad indeterminada de préstamos otorgados 
por las distintas sucursales de una Entidad Financiera, validando los datos ingresados:
nombre del titular, sucursal( “CABA”, “BS.AS.” o “INTERIOR”), 
tipo(“grande”,”mediana”,“chica”), monto del prestamo en Pesos.
informar:
a)el nombre del titular al que se le prestó el menor monto de préstamo.
b)el promedio del monto prestado por las sucursales del tipo chica.
c)la sucursal con mas cantidad de préstamos.




*/ 
  let nombre;
  let sucursal;
  let tipo;
  let monto;
  let seguir;
  let flagMenorPrestamo = 0;
  let menorPrestamo;
  let nombreMenorPrestamo
  let contChicaCaba = 0;
  let acumChicaCaba = 0;
  let promedioChicaCaba;
  let contChicaBsas = 0;
  let acumChicaBsas = 0;
  let promedioChicaBsas;
  let contChicaInterior = 0;
  let acumChicaInterior = 0;
  let promedioChicaInterior;
   
  do {       
        nombre = prompt("Ingresar el nombre ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar el nombre ");
        }

        sucursal = prompt("Ingresar el tipo de sucursal: caba, bsas o interior ");
        while (sucursal != "caba" && sucursal != "bsas" && sucursal != "interior"){
            sucursal = prompt ("Error. Ingresar el tipo de sucursal: caba, bsas o interior");
        }

        tipo = prompt("Ingresar el tipo: grande, mediana o chica ");
        while (tipo != "grande" && tipo != "mediana" && tipo != "chica"){
            tipo = prompt ("Error. Ingresar el tipo: grande, mediana o chica");
        }

        monto = parseInt(prompt("ingrese el monto del prestamo en pesos"));
        while(isNaN(monto)==true || monto<=0){
            monto =parseInt(prompt("Error.ingrese el monto del prestamo en pesos."));
        }

        if (flagMenorPrestamo == 0 || menorPrestamo>monto){
            menorPrestamo = monto;
            nombreMenorPrestamo = nombre;
            flagMenorPrestamo = 1;
        }
        switch(sucursal){
            case "caba":
                if(tipo == "chica"){
                    contChicaCaba++;
                    acumChicaCaba+=monto;
                }
                break;
            case "bsas":
                if(tipo == "chica"){
                    contChicaBsas++;
                    acumChicaBsas+=monto;
                }
                break;
            case "interior":
                if(tipo == "chica"){
                    contChicaInterior++;
                    acumChicaInterior+=monto;
                }
                break;
        }

        seguir = prompt("Desea seguir ingresando prestamos? s/n"); 

    }while(seguir == "s");

    promedioChicaCaba = acumChicaCaba/contChicaCaba;
    promedioChicaBsas = acumChicaBsas/contChicaBsas;
    promedioChicaInterior = acumChicaInterior/contChicaInterior;

    if(contChicaCaba>contChicaBsas && contChicaCaba>contChicaInterior ){
        mayorSucursal = "CABA";
    }
    else if(contChicaBsas>contChicaCaba && contChicaBsas>= contChicaInterior){
        mayorSucursal = "BSAS";
    }
    else {
        mayorSucursal = "INTERIOR";
    }
    document.write("a) el nombre del titular al que se le prestó el menor monto de préstamo es "+ nombreMenorPrestamo+"<br>");
    document.write("b) el promedio del monto prestado por las sucursales del tipo chica es "+"<br>"+"promedio caba" + promedioChicaCaba+"<br>"+"promedio BsAs" + promedioChicaBsas+"<br>"+"promedio Interior" + promedioChicaInterior+"<br>");
    document.write("c) la sucursal con mas cantidad de préstamos."+mayorSucursal+"<br>");

}
/*  
    a)el nombre del titular al que se le prestó el menor monto de préstamo.
    b)el promedio del monto prestado por las sucursales del tipo chica.
    c)la sucursal con mas cantidad de préstamos.
*/