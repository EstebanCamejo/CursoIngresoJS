function mostrar()
{
/*Simil Parcial 3:
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro , pajaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato 
(siames, turco, Peterbald , generico) 
y si es de tipo "otros" o pajaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , 
para pajaro 1 de 50
nombre ( no se permite solo numero)
/*mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza */
/*
let tipo; 
let raza;
let edad;
let nombre;

let masViejoPerro = 0;
let masViejoGato = 0;
let masViejoPajaro = 0;
let masViejoOtro = 0;

let nombrePerro;
let nombreGato;
let nombrePajaro;
let nombreOtro;

let contPerro = 0;
let contGato = 0;
let contOtro = 0;
let contPajaro = 0;

let contSiames = 0;
let contTurco = 0;
let contPeterbald = 0;
let contGenerico = 0;

let acumEdadSiames = 0;
let acumEdadTruco = 0;
let acumEdadPeterbald = 0;
let acumEdadGenerico = 0;
let mayorRazaGato;
let promedioMayorGato;

let i = 0;





for(i=0;i<10;i++){

    tipo = prompt("Ingresar tipo de animal gato, perro ,pajaro u otro ");
    while (tipo!="gato" && tipo!="perro" && tipo!="pajaro" && tipo!="otro"){
        tipo = prompt ("Error. Ingresar tipo de animal gato, perro ,pajaro u otro");
    }
    if (tipo == "gato"){
        raza = prompt("Ingresar la raza correspondientre siames, turco, peterbald o generico");
        while (raza!="siames" && raza!="turco" && raza!="peterbald" && raza!="generico"){
        raza = prompt ("Error. Ingresar la raza correspondientre siames, turco, peterbald o generico");
        }
        
    }
    else if (tipo == "perro"){
        raza = prompt("Ingresar la raza correspondientre pastor, toy o callejero");
        while (raza!="pastor" && raza!="toy" && raza!="callejero"){
        raza = prompt ("Error. Ingresar la raza correspondientre pastor, toy o callejero");
        }
    }    
    else {
        raza = prompt("ingrese un tipo de raza");
        while(isNaN(raza)==false){
            raza =prompt("Error.ingrese un tipo de raza.");
        }
    }
    if(tipo == "otro"){
        edad = parseInt(prompt("ingrese la edad entre 1 y 100"));
        while(isNaN(edad)==true || edad<1 || edad>100){
        edad =parseInt(prompt("Error.ingrese la edad entre 1 y 100."));
        }           
        if (masViejoOtro<edad){
            contOtro++;
            masViejoOtro = edad;
            nombreOtro = nombre;
        } 
    }
    else if(tipo == "pajaro"){
        edad = parseInt(prompt("ingrese la edad entre 1 y 50"));
        while(isNaN(edad)==true|| edad<1 || edad>50){
            edad =parseInt(prompt("Error. ingrese la edad entre 1 y 50."));
        }
        if (masViejoPajaro<edad){
            contPajaro++;
            masViejoPajaro = edad;
            nombrePajaro = nombre;
        }          
    }
    else {               
        edad = parseInt(prompt("ingrese la edad entre 1 y 20"));
        while(isNaN(edad)==true|| edad<1 || edad>20){
            edad =parseInt(prompt("Error. ingrese la edad entre 1 y 20."));
        }
        if (tipo == "gato"){
        
            if (masViejoGato<edad){
                contGato++;
                masViejoGato = edad;
                nombreGato = nombre;
            }             
        }
        else if (tipo == "perro"){

            if (masViejoPerro<edad){
                contPerro++;
                masViejoPerro = edad;
                nombrePerro = nombre;
            } 

        }
    } 
    nombre = prompt("Ingresar el nombre.");
    while (isNaN(nombre)==false){
        nombre = prompt ("Error. Ingresar el nombre.");
    }
   

}

if(acumEdadTruco>acumEdadSiames && acumEdadTruco>acumEdadPeterbald && acumEdadTruco>acumEdadGenerico  ){
    mayorRazaGato = "Siames";
    promedioMayorGato = acumEdadSiames/contSiames;
}
else if(acumEdadSiames>acumEdadTruco && acumEdadSiames>acumEdadPeterbald && acumEdadSiames>acumEdadGenerico){
    mayorRazaGato = "Turco";
    promedioMayorGato = acumEdadTruco/contTurco;
}
else if (acumEdadPeterbald>acumEdadTruco && acumEdadPeterbald>acumEdadSiames && acumEdadPeterbald>acumEdadGenerico){
    mayorRazaGato = "Peterbald";
    promedioMayorGato = acumEdadPeterbald/contPeterbald;
}
else {
    mayorRazaGato = "Generico";
    promedioMayorGato = acumEdadGenerico/contGenerico;
}

if(contPajaro>=1){
    document.write("El nombre del mas viejo de los pajaros es  " + nombrePajaro +"<br>");
}
else{
    document.write("No hay pajaros"+"<br>"); 
}

if(contPerro>=1){
    document.write("El nombre del mas viejo de los perros es  " + nombrePerro+"<br>");
}
else{
    document.write("No hay perros"+"<br>"); 
}

if(contGato>=1){
    document.write("El nombre del mas viejo de los gatos es  " + nombreGato+"<br>");
}
else{
    document.write("No hay gatos"+"<br>"); 
}
if(contOtro>=1){

    document.write("El nombre del mas viejo de los otros es  " + nombreOtro+"<br>");
}
else{
    document.write("No hay otros"+"<br>"); 
}

document.write("La raza de gatos que mas animales tiene es " +mayorRazaGato+ "<br>" + "y el promedio de edad de esta raza es " + promedioMayorGato); 

*/
/*mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza */
//-------------------------------------------------------------------------------------------
/*Simil Parcial 4:
"Super Chino" Se pide el ingreso de mercadería de un supermercado, hasta que el usuario 
quiera, se pide:
Tipo(limpieza , comestible , otros)solo estos tres tipos - L
Nombre del producto (validar no sea número) - L
Importe del producto (no mayor a 1000 pesos) - N
Procedencia (importado, nacional, elaborado) - L
Peso (no mayor a 30 kilos) - N
informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d) el tipo de mercadería que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
 *//*
    let tipo;
    let nombre;
    let importe;
    let procedencia;
    let peso;
    let seguir;
    let flagMayorPeso = 0;
    let mayorPeso;
    let mayorPesoNombre;

    let flagPrecio = 0;
    let mayorPrecio;
    let mayorPrecioNombre;
    
    let flagMenorElaborado = 0;
    let menorElaborado;
    let nombreMenorElaborado;

    let contLimpieza = 0;
    let contComestible = 0;
    let contOtros = 0;

    let mayorTipo;
    let contElaborado = 0;
    let totalAcum = 0;

    let porcentajeElaborado;

    let acumPesosLimpieza = 0;
    let acumPesosComestible = 0;
    let acumPesosOtros = 0;
    let promedioLimpieza;
    let promedioComestible;
    let promedioOtros;

    //"Ingresar limpieza , comestible , otros 

    do {       

        tipo = prompt("Ingresar el tipo de producto: limpieza , comestible , otros ");
        while (tipo != "limpieza" && tipo != "comestible" && tipo != "otros"){
            tipo = prompt ("Error. Ingresar el tipo de producto: limpieza , comestible , otros");
        }       
      
        nombre = prompt("Ingresar el nombre del producto");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar el nombre del producto");
        }

        importe = parseInt(prompt("ingrese el importe hasta 1000"));
        while(isNaN(importe)==true ||importe<1 ||importe>1000){
            importe =parseInt(prompt("Error.ingrese XXXXX."));
        }      

        procedencia = prompt("Ingresar procedencia: importado, nacional, elaborado ");
        while (procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado"){
            procedencia = prompt ("Error. Ingresar procedencia: importado, nacional, elaborado ");
        }

        peso = parseInt(prompt("ingrese el peso hasta 30Kg"));
        while(isNaN(peso)==true ||peso>30 ||peso<1){
            peso =parseInt(prompt("Error.ingrese el peso hasta 30Kg."));
        }
        
        if (flagMayorPeso == 0 || tipo == "comestible" && mayorPeso<peso){
            mayorPeso = peso;
            mayorPesoNombre = nombre; 
            flagMayorPeso =1;
        }
        if (flagPrecio == 0 || mayorPrecio<importe){
            mayorPrecio = importe;
            mayorPrecioNombre = nombre; 
            flagPrecio = 1;
        }
        if (flagMenorElaborado == 0 || procedencia == "elaborado" && menorElaborado>importe){
            menorElaborado = importe;
            nombreMenorElaborado = nombre; 
            flagMenorElaborado =1;
        }

        switch(tipo){ 
            case "limpieza":
                contLimpieza++;
                acumPesosLimpieza+=importe; 
                break;
            case "comestible":
                contComestible++;
                acumPesosComestible+=importe;
                break;
            case "otros":
                contOtros++;
                acumPesosOtros+=importe;
                break;
        } 
        
        if (procedencia == "elaborado"){
            contElaborado++;
        }

        totalAcum = totalAcum++;

        seguir = prompt("Desea seguir ingresando productos? s/n"); 

    }while(seguir == "s");

    if(contLimpieza>contComestible && contLimpieza>contOtros ){
        mayorTipo = "limpieza";
    }
    else if(contComestible>contLimpieza && contComestible>= contOtros){
        mayorTipo = "comestible";
    }
    else {
        mayorTipo = "otros";
    }

    porcentajeElaborado = parseFloat(contElaborado*100/totalAcum); 

    promedioLimpieza = acumPesosLimpieza/contLimpieza ;
    promedioComestible = acumPesosComestible/contComestible;
    promedioOtros = acumPesosOtros/contOtros;

    if(flagMayorPeso == 1){
     document.write("a) el NOMBRE del mas pesado de los comestibles es " + mayorPesoNombre + "<br>");
    }
    else{          
        document.write("a) no hay comestibles "+ "<br>");
    }
    document.write("b) el NOMBRE del mas caro de todos los productos es " + mayorPrecioNombre + "<br>");
    document.write("c) el NOMBRE del mas barato de los elaborados es " + nombreMenorElaborado + "<br>");
    document.write("d) el tipo de mercadería que mas aparece es " + mayorTipo + "<br>");
    document.write("e) el porcentaje de productos elaborados por sobre el total es el %" + porcentajeElaborado + "<br>");
    document.write("f) el promedio de pesos por cada tipo ingresado es limpieza"+promedioLimpieza + "<br>"+ "comestible "+promedioComestible+ "<br>"+ "otros "+ promedioOtros);
    */


       /*
        a) el NOMBRE del mas pesado de los comestibles
        b) el NOMBRE del mas caro de todos los productos
        c) el NOMBRE del mas barato de los elaborados
        d) el tipo de mercadería que mas aparece
        e) el porcentaje de productos elaborados por sobre el total
        f) el promedio de pesos por cada tipo ingresado
        */
    }














}

