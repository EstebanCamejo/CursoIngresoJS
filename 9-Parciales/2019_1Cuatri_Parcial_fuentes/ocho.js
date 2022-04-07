 function mostrar()
{
    /*2)De una compra debes ingresar una cantidad indeterminada de productos, 
    validando los siguientes datos:
    nombre de producto, precio, unidades, tipo(minorista o mayorista)
    a)informar el precio total de la compra.
    b)el nombre del producto más caro de tipo minorista
    c)el nombre del producto con menos unidades
    

    let nombre;
    let precio;
    let unidades;
    let tipo;
    let acumPrecio = 0;
    let precioMasCaro;
    let nombreMasCaro;
    let flagMenorUnidad = 0;
    let menorUnidad;
    let menorUnidadNombre;
    let subTotal;


    do {   

        // VALIDACION LETRAS 
        nombre = prompt("Ingresar nombre del producto ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar nombre del producto");
        }
        
        // VALIDACION NUMEROS
        precio = parseInt(prompt("ingrese el precio"));
        while(isNaN(precio)==true || precio <= 0){
            precio =parseInt(prompt("Error.ingrese el precio."));
        }

        // VALIDACION NUMEROS
        unidades = parseInt(prompt("ingrese las unidades"));
        while(isNaN(unidades)==true|| unidades <= 0){
            unidades =parseInt(prompt("Error.ingrese las unidades."));
        }

        // VALIDACION LETRAS 
        tipo = prompt("Ingresar el tipo : minorista o mayorista ");
        while (tipo!="minorista" && tipo!="mayorista" ){
            tipo = prompt ("Error. Ingresar el tipo : minorista o mayorista");
        }

        subTotal = precio * unidades;
        acumPrecio = acumPrecio + subTotal;

        if (tipo == "minorista" && precioMasCaro<precio){

            precioMasCaro = precio;
            nombreMasCaro = nombre;

        }
        if (flagMenorUnidad == 0 || menorUnidad>unidades){
            menorUnidad = unidades;
            menorUnidadNombre = nombre;
            flagMenorUnidad = 1;
        }

        seguir = prompt("Desea seguir ingresando productos? s/n"); 
    
    }while(seguir == "s");

    document.write("El precio total de la compra es $"+acumPrecio+ "<br>");
    document.write("El nombre del producto más caro de tipo minorista es "+ nombreMasCaro +"<br>");
    document.write("El nombre del producto con menos unidades es "+ menorUnidadNombre +"<br>");
    */

    /*2)De una compra debes ingresar una cantidad indeterminada de productos, 
    validando los siguientes datos:
    nombre de producto, precio, unidades, tipo(minorista o mayorista)
    a)informar el precio total de la compra.
    b)el nombre del producto más caro de tipo minorista
    c)el nombre del producto con menos unidades*/

    let nombre;
    let precio;
    let unidad;
    let tipo;
    let seguir;
    let acumPrecio = 0;
    let flagMasCaro = 0;
    let precioMasCaro;
    let nombreMasCaro;
    let flagMenorUnidad = 0;
    let menorUnidad;
    let menorUnidadNombre;



    do {    
        
        
        
        // VALIDACION NOMBRE 
        nombre = prompt("Ingresar el nombre del producto ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar el nombre del producto");
        }
        precio = parseInt(prompt("ingrese precio"));
        while(isNaN(precio)==true || precio<=0){
            precio =parseInt(prompt("Error.ingrese precio."));
        }
        unidad = parseInt(prompt("ingrese la cantidad de unidades"));
        while(isNaN(unidad)==true || unidad<=0){
            unidad =parseInt(prompt("Error.ingrese la cantidad de unidades."));
        }
        
        // VALIDACION tipo   
        tipo = prompt("Ingresar tipo minorista o mayorista");
        while (tipo != "minorista" && tipo != "mayorista" ){
            tipo = prompt ("Error. Ingresar tipo minorista o mayorista");
        }
        
        
        acumPrecio = acumPrecio + precio;
        

        if(flagMasCaro == 0 || precioMasCaro<precio ){
            precioMasCaro = precio;
            nombreMasCaro = nombre;
            flagMasCaro = 1;
        }

        if (flagMenorUnidad == 0 || menorUnidad>unidad){
            menorUnidad = unidad;
            menorUnidadNombre = nombre;
            flagMenorUnidad = 1;
        }

        seguir = prompt("Desea seguir ingresando productos? s/n"); 
    
    }while(seguir == "s");


    document.write("el precio total de la compra"+acumPrecio+"<br>");
    document.write("el nombre del producto más caro de tipo minorista es "+nombreMasCaro+"<br>");
    document.write("el nombre del producto con menos unidades"+menorUnidadNombre+"<br>");
} /* a)informar el precio total de la compra.
b)el nombre del producto más caro de tipo minorista
c)el nombre del producto con menos unidades */
