
function mostrar()
{

// VARIABLES (SOLO SE INICIALIZAN LOS "flag","acumuladores" y "contadores")

-----------------------------------------------------------------------------

// FORMATOS ALMACENAR - DO WHILE - Formato de repeticion en el que itera minimo 1 vez
do {       
        
    seguir = prompt("Desea seguir ingresando XXXXX? s/n"); 

}while(seguir == "s");

// FORMATOS ALMACENAR - WHILE - formato de repeticon infinito hasta cumplir la condicion	
while (!(numeroIngresado>0 && numeroIngresado<10 )){//while( ! (numero>0 && numero <9));

    numeroIngresado = prompt ("Error ingrese un número entre 0 y 10.");
}
if (numeroIngresado>0 && numeroIngresado<10 ){
    alert ("numero correcto");
}

// FORMATOS ALMACENAR - FOR declaramos la variable i = 0
for(i=0;i<x;i++){//i<x = cantidad de veces q se repite;

}

-----------------------------------------------------------------------------

// VALIDACION NUMEROS
XXXXX = parseInt(prompt("ingrese XXXXX"));
while(isNaN(XXXXX)==true){
    XXXXX =parseInt(prompt("Error.ingrese XXXXX."));
}

// VALIDACION LETRAS 
XXXXX = prompt("Ingresar XXXXX ");
while (isNaN(XXXXX)==false){
    XXXXX = prompt ("Error. Ingresar XXXXX");
}

-----------------------------------------------------------------------------

// FORMATOS COMPARAR - IF 
if (XXXXX){
}

// FORMATOS COMPARAR - SWITCH
switch(XXXXX){
    case "XXXXX":
        break;
    case "XXXXX":
        break;
    case "XXXXX":
        break;
}
dale que entramos
-----------------------------------------------------------------------------

// BUSCADOR MAX - FLAG
if (flagMayorXXXXX == 0 || mayorXXXXX<cantidad){
    mayorXXXXX = cantidad;
    flagMayorXXXXX = 1;
}

// BUSCADOR MIN - FLAG
if (flagMenorXXXXX == 0 || menorXXXXX>cantidad){
    menorXXXXX = cantidad;
    flagMenorXXXXX = 1;
}

-----------------------------------------------------------------------------

// COMPARAR MAX
if(XXXXX1>XXXXX2 && XXXXX1>XXXXX3 ){
    mayorXXXXX = "XXXXX1";
}
else if(XXXXX2>XXXXX1 && XXXXX2>= XXXXX3){
    mayorXXXXX = "XXXXX2";
}
else {
    mayorXXXXX = "XXXXX3";
}

// COMPARAR MIN
if(XXXXX1<XXXXX2 && XXXXX1<XXXXX3 ){
    menorXXXXX = "XXXXX1";
}
else if(XXXXX2<XXXXX1 && XXXXX2<= XXXXX3){
    menorXXXXX = "XXXXX2";
}
else {
    menorXXXXX = "XXXXX3";
}

-----------------------------------------------------------------------------

// PROMEDIO - ACUM / CONT

-----------------------------------------------------------------------------

// MOSTRAR MSJ - 
alert("mensaje quiero aprobar");
document.write("mensaje quiero aprobar"+"<br>");
console.log("mensaje quiero aprobar");

document.write("a) "+acumPrecio+"<br>");
document.write("b) "+acumPrecio+"<br>");
document.write("c) "+acumPrecio+"<br>");    
document.write("d) "+acumPrecio+"<br>");
document.write("e) "+acumPrecio+"<br>");
document.write("f) "+acumPrecio+"<br>");
document.write("g) "+acumPrecio+"<br>");
document.write("h) "+acumPrecio+"<br>");

-----------------------------------------------------------------------------



nombre = prompt("Ingresar el nombre ");
while (isNaN(nombre)==false){
    nombre = prompt ("Error. Ingresar el nombre ");
}





sexo = prompt("Ingresar sexo m, f o nb.");
while (sexo != "m" && sexo != "f" && sexo != "nb"){
    sexo = prompt ("Error. Ingresar sexo m, f o nb.");
}



edad = parseInt(prompt("ingrese la edad entre X y X)"));
while(isNaN(edad)==true|| edad<X && edad>x){
    edad =parseInt(prompt("Error.ingrese la edad entre x y x"));//
}



temperatura = parseInt(prompt("ingrese la temperatura"));
while(isNaN(temperatura)==true){
    temperatura =parseInt(prompt("Error.ingrese la temperatura"));
}



tipo = prompt("Ingresar el tipo de producto: limpieza , comestible , otros ");
while (tipo != "limpieza" && tipo != "comestible" && tipo != "otros"){
    tipo = prompt ("Error. Ingresar el tipo de producto: limpieza , comestible , otros");
}



cantidad = parseInt(prompt("ingrese la cantidad de x"));
while(isNaN(cantidad)==true || cantidad<=0 ){
    cantidad =parseInt(prompt("Error.ingrese la cantidad de x."));
}



precio = parseInt(prompt("ingrese precio"));
while(isNaN(precio)==true || precio<=0){
    precio =parseInt(prompt("Error.ingrese precio."));
}



unidad = parseInt(prompt("ingrese la cantidad de unidades"));
while(isNaN(unidad)==true || unidad<=0){
    unidad =parseInt(prompt("Error.ingrese la cantidad de unidades."));
}

altura = parseInt(prompt("ingrese la altura en cm"));
while(isNaN(altura)==true){
    altura =parseInt(prompt("Error.ingrese la altura en cm."));
}
peso = parseInt(prompt("ingrese el peso en Kg"));
while(isNaN(peso)==true) {
    peso =parseInt(prompt("Error.ingrese el peso en Kg."));
}

// Numeros Pares 

if (numero%2 ==0){
    contNumeroPares++;
}
// Numeros Impares 

if (numero%2 !=0){
    contNumeroPares++;
}
// Precio con descuento

precioDescuento= precio - (precio * descuento / 100);