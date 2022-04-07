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

 */
    let seguir;
    let pasajero;
    let destino;
    let temporada;
    let cantidad;
    let flagMenorCantidad = 0;
    let menorCantidad;
    let nombrePasajeroMenorCantidad;
    let acumTemporadaAlta = 0;
    let contTemporadaAlta = 0;
    let promedioTemporadaAlta;
    let contBrasil = 0;
    let contCaribe = 0;
    let contEuropa = 0;
    do{
        pasajero = prompt("Ingresar nombre del pasajero ");
		while (isNaN(pasajero)==false){
			pasajero = prompt ("Error. Ingresar nombre del pasajero");
        }

        destino = prompt("Ingresar destino : Brasil, Caribe o Europa ");
        while (destino != "Brasil" && destino != "Caribe" && destino != "Europa"){
            destino = prompt ("Error. Ingresar destino : Brasil, Caribe o Europa ");
        }

        temporada = prompt("Ingresar temporada : alta,baja o media ");
        while (temporada!="alta"&& temporada!="baja"&&temporada!="media"){
            temporada = prompt ("Error. Ingresar temporada : alta,baja o media ");
        }

        cantidad = parseInt(prompt("ingrese la cantidad de pasajeros"));
        while(isNaN(cantidad)==true){
            cantidad =parseInt(prompt("Error,ingrese la cantidad de pasajeros."));
        }

        switch(destino){
            case "Brasil":
                contBrasil++;
                break;
            case "Caribe":
                contCaribe++;
                break;
            case "Europa":
                contEuropa++;
                break;
        }

        if (flagMenorCantidad == 0 || cantidad<menorCantidad){
            menorCantidad = cantidad;
            nombrePasajeroMenorCantidad = pasajero;
            flagMenorCantidad = 1;
        }

        if(temporada == "alta"){
            contTemporadaAlta++
            acumTemporadaAlta = acumTemporadaAlta + cantidad;       
        }  
             
        seguir = prompt("Desea seguir ingresando pasajeros? s/n"); 

    }while(seguir == "s");

    promedioTemporadaAlta = acumTemporadaAlta /contTemporadaAlta; 

    if(contEuropa>contBrasil && contEuropa>contCaribe ){
        mayorDestino = "Europa";
    }
    else if(contBrasil>contEuropa && contBrasil>= contCaribe){
        mayorDestino = "Brasil";
    }
    else {
        mayorDestino = "Caribe";
    }


    document.write ("a - El lugar de destino elegido es " + mayorDestino)+"<br>";
    document.write ("b - El nombre del pasajero titular que lleva menos pasajeros es "+ nombrePasajeroMenorCantidad) + "<br>";
    document.write ("c - El promedio de personas, que viajan en temporada alta " + promedioTemporadaAlta) + "<br>";
    
    
    /*a)el lugar destino elegido.
    
    b)el nombre del pasajero titular que lleva menos pasajeros.

    c)el promedio de personas, que viajan en temporada alta.*/ 

}
