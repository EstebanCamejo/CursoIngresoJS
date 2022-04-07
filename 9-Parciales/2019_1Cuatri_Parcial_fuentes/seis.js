function mostrar()
{
    /*3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
    validando los datos ingresados:
    nombre del pasajero titular,destino ( “Brasil”, “Caribe” o “Europa”), 
    temporada(“alta”,”baja”,“media”), cantidad de pasajeros que viajan.
    informar:
    a)el lugar destino mas elegido.
    b)el nombre del pasajero titular que lleva menos pasajeros.
    c)el promedio de personas, que viajan en temporada alta.
 

    let nombre;
    let destino;
    let temporada;
    let cantidad;
    let contEuropa = 0;
    let contCaribe = 0;
    let contBrasil = 0;
    let destinoMasElegido;
    let flagMenorCant = 0;
    let menorCantidad;
    let nombreMenorCant;
    let acumTempAlta = 0;
    let promedioTempAlta;
    let contTempAlta = 0;

    do {       
        
        // VALIDACION LETRAS 
        nombre = prompt("Ingresar nombre del titular ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar nombre del titular");
        }
        // VALIDACION LETRAS 
        destino = prompt("Ingresar destino brasil, caribe o europa ");
        while (destino!= "brasil" && destino!= "caribe"  && destino!= "europa"){
            destino = prompt ("Error. Ingresar destino brasil, caribe o europa");
        }
        // VALIDACION LETRAS 
        temporada = prompt("Ingresar alta, baja o media");
        while (temporada!= "alta" && temporada!= "baja"  && temporada!= "media"){
            temporada = prompt ("Error. Ingresar alta, baja o media");
        }

        // VALIDACION NUMEROS
        cantidad = parseInt(prompt("ingrese la cantidad"));
        while(isNaN(cantidad)==true){
            cantidad =parseInt(prompt("Error.ingrese la cantidad."));
        }
        switch(destino){
            case "brasil":
                contBrasil++;
                break;
            case "caribe":
                contCaribe++;
                break;
            case "europa":
                contEuropa++;
                break;
        }
        //menor cant
        if (flagMenorCant == 0 || menorCantidad>cantidad){
            menorCantidad = cantidad;
            nombreMenorCant = nombre;
            flagMenorCant = 1;
        }
        if(temporada == "alta"){
            contTempAlta = contTempAlta+1; 
            acumTempAlta = acumTempAlta +cantidad; 
            
        }

        seguir = prompt("Desea seguir ingresando pasajeros? s/n"); 
    
    }while(seguir == "s");

    if(contBrasil>contCaribe && contBrasil>contEuropa ){
        destinoMasElegido = "Brasil";
    }
    else if(contCaribe>contBrasil && contCaribe>= contEuropa){
        destinoMasElegido = "Caribe";
    }
    else {
        destinoMasElegido = "Europa";
    }

    promedioTempAlta = acumTempAlta/contTempAlta;

    document.write("a) El lugar destino mas elegido es "+destinoMasElegido +"<br>");
    document.write("b) El nombre del pasajero titular que lleva menos pasajeros es " +nombreMenorCant +"<br>");
    document.write("c) El promedio de personas, que viajan en temporada alta es "+promedioTempAlta +"<br>");

    */

    /*3)Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
    validando los datos ingresados:
    nombre del pasajero titular,destino ( “Brasil”, “Caribe” o “Europa”), 
    temporada(“alta”,”baja”,“media”), cantidad de pasajeros que viajan.
    informar:
    a)el lugar destino mas elegido.
    b)el nombre del pasajero titular que lleva menos pasajeros.
    c)el promedio de personas, que viajan en temporada alta.
 */
    let seguir;
    let nombre;
    let destino;
    let temporada;
    let cantidad;
    let contBra = 0;
    let contEur = 0;
    let contCar = 0;
    let mayorDestino;
    let flagMenorPax = 0;
    let menorPaxNombre;
    let menorPax;
    let contPersonas = 0;
    let acumCantidad = 0;
    let promedioTempAlta;

    do {       
                
        nombre = prompt("Ingresar nombre del pasajero titular ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar nombre del pasajero titular");
        }     
        
        destino = prompt("Ingresar destino brasil, caribe o europa");
        while (destino!="brasil" && destino!="caribe" && destino!="europa" ){
            destino = prompt ("Error. Ingresar destino brasil, caribe o europa");
        } 
        
        temporada = prompt("Ingresar temporada alta, baja o media");
        while (temporada!="alta" && temporada!="baja" && temporada!="media"){
            temporada = prompt ("Error. Ingresar temporada alta, baja o media");
        }  
        
        cantidad = parseInt(prompt("ingrese la cantidad de pasajeros"));
        while(isNaN(cantidad)==true || cantidad<=0 ){
            cantidad =parseInt(prompt("Error.ingrese la cantidad de pasajeros."));
        }

        switch(destino){
            case "brasil":
                contBra++;
                break;
            case "caribe":
                contEur++;
                break;
            case "europa":
                contCar++;
                break;
        }
        if (flagMenorPax == 0 || menorPax>cantidad){
            menorPax = cantidad;
            menorPaxNombre = nombre;
            flagMenorPax = 1;
        }
        if (temporada == "alta"){
            contPersonas++;
            acumCantidad = acumCantidad + cantidad;
        }
        seguir = prompt("Desea seguir ingresando paxs? s/n"); 
        
    }while(seguir == "s");


    promedioTempAlta = acumCantidad/contPersonas;

    if(contBra>contEur && contBra>contCar ){
        mayorDestino = "brasil";
    }
    else if(contEur>contBra && contEur>= contCar){
        mayorDestino = "europa";
    }
    else {
        mayorDestino = "caribe";
    }

    document.write("a) el lugar destino mas elegido es "+ mayorDestino +"<br>");
    document.write("b) el nombre del pasajero titular que lleva menos pasajeros es "+menorPaxNombre+"<br>");
    document.write("c) el promedio de personas, que viajan en temporada alta es "+ promedioTempAlta+"<br>");

}
     /*   a) el lugar destino mas elegido.
        b) el nombre del pasajero titular que lleva menos pasajeros.
        c) el promedio de personas, que viajan en temporada alta.*/