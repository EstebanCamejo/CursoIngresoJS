function mostrar()
{
 /*2)De una compra debes ingresar una cantidad indeterminada de productos, 
 validando los siguientes datos:

nombre de producto, precio, unidades, tipo(minorista o mayorista)

a)informar el precio total de la compra.

b)el nombre del producto más caro de tipo minorista

c)el nombre del producto con menos unidades

*/
let seguir;

let producto;
let precio;
let unidades;
let tipo;
let acumPrecio = 0;

let precioMasCaro = 0;

let flagMenosUnidades = 0;
let menorUnidad;
let nombreMenosUnidades;
let nombreMinoristaMasCaro;

do{
    producto = prompt("Ingresar nombre del producto ");
    while (isNaN(producto)==false ){
        producto = prompt ("Error. Ingresar nombre del producto");
    }


    precio = parseInt(prompt("ingrese el precio"));  
    while(isNaN(precio)==true){
        precio =prompt("Error, ingrese el precio.");          
    }
   
    unidades = parseInt(prompt("ingrese las unidades"));
    while(isNaN(unidades)==true){
        unidades =parseInt(prompt("Error, ingrese las unidades."));    
    }
    
    tipo = prompt("Ingresar tipo : mayorista/minorista ");
    while (tipo != "mayorista" && tipo != "minorista" ){
        tipo = prompt ("Error. Ingresar tipo : mayorista/minorista ");     
    }

    acumPrecio = acumPrecio + precio;

    if(flagMenosUnidades==0|| menorUnidad>unidades){
        menorUnidad = unidades;
        nombreMenosUnidades = producto;
        flagMenosUnidades = 1;
    }
    
    if (tipo == "minorista"&& precioMasCaro<precio){
        precioMasCaro = precio;
        nombreMinoristaMasCaro = producto;
    }
    


    seguir = prompt("Desea seguir ingresando productos? s/n");   

}while(seguir == "s");

document.write("a)precio total de la compra " + acumPrecio)+"<br>";
document.write("b)el nombre del producto más caro de tipo minorista " + nombreMinoristaMasCaro) +"<br>";
document.write("c)el nombre del producto con menos unidades "+ nombreMenosUnidades)+"<br>";


/*
a)informar el precio total de la compra.

b)el nombre del producto más caro de tipo minorista

c)el nombre del producto con menos unidades */


}
