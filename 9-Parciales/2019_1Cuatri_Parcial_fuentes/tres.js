function mostrar()
{
    /*Simil Parcial 5:
    Debemos alquilar el servicio de transporte para llegar a Mar del Plata 
    con un grupo de personas, de cada persona debemos obtener los siguientes datos:
    Nombre (validar que no sea número)
    Obra Social ("PAMI", "OSDE" o "otras"),
    Edad(solo mayores de edad, más de 17),
    Temperatura corporal(validar por favor)
    Sexo (validar femenino, masculino, no binario)
    NOTA:el precio por pasajero es de $600.
    Se debe informar (solo si corresponde):
    a) La cantidad de personas con OSDE de más de 60 años.
    b) el nombre y temperatura de la mujer PAMI más joven.
    c) cuanto sale el viaje total sin descuento.
    d) si hay más del 50% de los pasajeros que pertenecen a PAMI, 
    el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
 
    let nombre;
    let obraSocial;
    let edad;
    let temperatura;
    let sexo;
    let seguir;
    let contPax = 0;
    let contMasSesentaOsde = 0;
    let flagMenorEdad = 0;
    let menorEdad;
    let nombreMenorEdad;
    let temperaturaMenorEdad;
    let totalViajeSinDesc;
    let contPami = 0;
    let precioFinalDesc;


    do {       
        nombre = prompt("Ingresar el nombre ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar el nombre");
        }
        obraSocial = prompt("Ingresar obra social: pami, osde o otra. ");
        while (obraSocial != "pami" && obraSocial != "osde" && obraSocial != "otra"){
            obraSocial = prompt ("Error. Ingresar obra social: pami, osde o otra.");
        }
        edad = parseInt(prompt("ingrese la edad (mayor a 17)"));
        while(isNaN(edad)==true|| edad<18){
            edad =parseInt(prompt("Error.ingrese la edad (mayor a 17)"));
        }
        temperatura = parseInt(prompt("ingrese la temperatura"));
        while(isNaN(temperatura)==true){
            temperatura =parseInt(prompt("Error.ingrese la temperatura"));
        }
        sexo = prompt("Ingresar sexo m, f o nb. ");
        while (sexo != "m" && sexo != "f" && sexo != "nb"){
            sexo = prompt ("Error. Ingresar sexo m, f o nb.");
        }

        contPax = contPax +1;
       
        switch(obraSocial){
            case "pami":
                contPami++;
                if(sexo == "f"){
                    if (flagMenorEdad == 0 || menorEdad>edad){
                        menorEdad = edad;
                        nombreMenorEdad = nombre;
                        temperaturaMenorEdad = temperatura;
                        flagMenorEdad = 1;
                    }
                }
                break;
            case "osde":
                if(edad>60){
                    contMasSesentaOsde++;              
                }
                break;
        }
        
        seguir = prompt("Desea seguir ingresando pasajeros? s/n"); 
    
    }while(seguir == "s");

    totalViajeSinDesc =  contPax * 600;

    if((contPax/2)<contPami){
        precioFinalDesc = totalViajeSinDesc *0.75;
        mensajePrecioFinal = "tiene un descuento del 25% el total es";
    }
    else{
        precioFinalDesc = totalViajeSinDesc;
        mensajePrecioFinal = "no tiene descuento, el total es "; 
    }
 
    document.write("a)La cantidad de personas con OSDE de más de 60 años son "+contMasSesentaOsde+"<br>");
    document.write("b) el nombre de la mujer PAMI más joven."+nombreMenorEdad+"<br>"+ "y temperatura es "+temperaturaMenorEdad+"<br>" );
    document.write("c) el viaje total sin descuento cuesta " +totalViajeSinDesc+ "<br>");
    document.write("d) el precio final" + mensajePrecioFinal + precioFinalDesc  + "<br>");

     a) La cantidad de personas con OSDE de más de 60 años.
    b) el nombre y temperatura de la mujer PAMI más joven.
    c) cuanto sale el viaje total sin descuento.
    d) si hay más del 50% de los pasajeros que pertenecen a PAMI, 
    el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
    ------------------------------------------------------------------------------
    */
   /*
    Simil Parcial 6:
    Realizar el algoritmo que permita ingresar los datos de los alumnos 
    de una división de la UTN FRA, los datos solicitados son:
    Nombre(validar no sea numero)
    Situación laboral ("buscando", "trabajando" o "solo estudiante")
    Cantidad de materias(más de cero y menos de 8)
    Sexo (femenino, masculino, no binario)
    Nota promedio (entre 0 y 10)
    Edad (validar entre 18 y 85 inclusive)
    Se debe informar de existir, o informar que no existe, en el caso que corresponda.
    a) El nombre del mejor promedio que no de los que trabajan o están buscando}
    b) El nombre del más viejo de los alumnos que solo sea estudiantes
    c) El promedio de nota por situación laboral
    d) La edad y nombre del que cursa menos cantidad de materias y que esté buscando trabajo*/
    /*

    let nombre;
    let situacion;
    let cantidadMaterias;
    let sexo;
    let notaPromedio;
    let edad;
    let seguir;
    let flagMayorPromedio = 0;
    let mayorPromedio;
    let nombreMayorPromedio;
    let flagMayorEstudiante = 0;
    let mayorEstudiante;
    let nombreMayorEstudiante;
    let contEstudiante = 0;
    let contBuscando = 0;
    let contTrabajando = 0;
    let acumNotaEstudiante = 0;
    let acumNotaBuscando = 0;
    let acumNotaTrabajando = 0;
    let promedioEstudiante;
    let promedioBuscando;
    let promedioTrabajando;
    let flagMenormaterias = 0;
    let menorMaterias;
    let nombreMenosMaterias;
    let edadMenosMaterias;



    do {       
        nombre = prompt("Ingresar el nombre ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar el nombre ");
        }
        situacion = prompt("Ingresar situacion laboral: buscando, trabajando o estudiante ");
        while (situacion != "buscando" && situacion != "trabajando" && situacion != "estudiante"){
            situacion = prompt ("Error. Ingresar situacion laboral: buscando, trabajando o estudiante");
        }
        cantidadMaterias = parseInt(prompt("ingrese la cantidad de materias hasta 8 como max"));
        while(isNaN(cantidadMaterias)==true && cantidadMaterias>0 && cantidadMaterias <8){
            cantidadMaterias =parseInt(prompt("Error.ingrese la cantidad de materias hasta 8 como max"));
        }
        sexo = prompt("Ingresar sexo m, f o nb.");
        while (sexo != "m" && sexo != "f" && sexo != "nb"){
            sexo = prompt ("Error. Ingresar sexo m, f o nb.");
        }
        notaPromedio = parseInt(prompt("ingrese la nota promedio entre 1 y 10)"));//notaPromedio
        while(isNaN(notaPromedio)==true|| notaPromedio>10 && notaPromedio<1 ){
            notaPromedio =parseInt(prompt("Error. ingrese la nota promedio entre 1 y 10"));
        }
        edad = parseInt(prompt("ingrese la edad entre 18 y 85)"));
        while(isNaN(edad)==true|| edad<18 && edad>85){
            edad =parseInt(prompt("Error.ingrese la edad entre 18 y 85"));//
        }
        if(situacion == "buscando" || situacion == "estudiante"){

            if (flagMayorPromedio == 0 || mayorPromedio<notaPromedio){
                mayorPromedio = notaPromedio;
                nombreMayorPromedio = nombre;
                flagMayorPromedio = 1;
            }

        }
        switch(situacion){
            case "buscando":
                if (flagMenormaterias == 0 || menorMaterias>cantidadMaterias){
                    menorMaterias = cantidadMaterias;
                    nombreMenosMaterias = nombre;
                    edadMenosMaterias = edad;
                    flagMenormaterias = 1;
                }
                contBuscando++;
                acumNotaBuscando+=notaPromedio;
                break;

            case "trabajando":
                contTrabajando++;
                acumNotaTrabajando+=notaPromedio;
                break;

            case "estudiante":
                contEstudiante++;
                acumNotaEstudiante+=notaPromedio;

                if (flagMayorEstudiante == 0 || mayorEstudiante<edad){
                    mayorEstudiante = edad;
                    nombreMayorEstudiante = nombre;
                    flagMayorEstudiante = 1;
                }
                break;
        }

      
        seguir = prompt("Desea seguir ingresando alumnos? s/n"); 
    
    }while(seguir == "s");

    promedioEstudiante = acumNotaEstudiante/contEstudiante ;
    promedioBuscando = acumNotaBuscando/contBuscando ;
    promedioTrabajando = acumNotaTrabajando/contTrabajando;

    document.write("a) El nombre del mejor promedio que no de los que trabajan o están buscando es "+nombreMayorPromedio+ "<br>");
    document.write("b) El nombre del más viejo de los alumnos que solo sea estudiantes es"+nombreMayorEstudiante +"<br>");
    document.write("c) El promedio de nota por situación laboral es: "+"<br>"+"Estudiantes "+ promedioEstudiante +"<br>"+ "Buscando Trabajo"+promedioBuscando+"<br>"+ "Trabajando " + promedioTrabajando+"<br>");
    document.write("d) El nombre del que cursa menos cantidad de materias y que esté buscando trabajo es "+nombreMenosMaterias+"<br>" + "y su edad es "+ edadMenosMaterias);
   
   
   --------------------------------------------------------------------------------------
    */
    /*
   Simil Parcial 7:
   Ingrese nombre , sexo , edad 
   (validar que si es mujer debe ser adolescente y si el hombre debe ser niño), 
   altura (validar), temperatura corporal(validar)
   Necesitamos saber:
    a)el nombre y el sexo de la persona con mas temperatura,
    b)de las mujeres el nombre de la mas joven ,
    c)de los hombre el nombre del mas bajito,
    ... solo si los hay
    d)el promedio de edad entre los hombres,
    e)el promedio de edad entre las mujeres,
    f)la cantidad de personas que miden mas de 1,60 metros,  
    g)el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts.*/
   
   /*
    let seguir;
    let nombre;
    let sexo;
    let temperatura;
    let edad;
    let altura;
    let flagMayorTemp = 0;
    let mayorTemp;
    let nombreMayorTemp;
    let sexoMayorTemp;
    let flagMenorMujer = 0;
    let menorMujer;
    let nombreMenorMujer;
    let flagMenorAltura = 0;
    let menorAltura;
    let nombreMenorAltura;
    let contHombre = 0;
    let acumEdadHombre = 0;
    let promedioEdadHombre;
    let contMujer = 0;
    let acumEdadMujer = 0;
    let promedioEdadMujer;
    let contMidenMas = 0;
    let porcentajeMujeres;
    let contMujeresMidenMas = 0;



    do {       
        nombre = prompt("Ingresar el nombre ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar el nombre ");
        }

        sexo = prompt("Ingresar sexo m, f o nb.");
        while (sexo != "m" && sexo != "f" && sexo != "nb"){
            sexo = prompt ("Error. Ingresar sexo m, f o nb.");
        }

        if(sexo == "m"){
            edad = parseInt(prompt("ingrese la edad entre 4 y 12"));
            while(isNaN(edad)==true|| edad<4 ||edad>12){
                edad =parseInt(prompt("Error.ingrese la edad"));//
            }   
        }
        else if (sexo == "f"){
            edad = parseInt(prompt("ingrese la edad entre 13 y 18)"));
            while(isNaN(edad)==true|| edad<13 ||edad>18 ){
                edad =parseInt(prompt("Error.ingrese la edad entre 13 y 18"));//
            }
        }
          
        temperatura = parseInt(prompt("ingrese la temperatura"));
        while(isNaN(temperatura)==true){
            temperatura =parseInt(prompt("Error.ingrese la temperatura"));
        }
        altura = parseInt(prompt("ingrese la altura en cm"));
        while(isNaN(altura)==true){
            altura =parseInt(prompt("Error.ingrese la altura en cm."));
        }
        if (flagMayorTemp == 0 || mayorTemp<cantidad){
            mayorTemp = temperatura;
            nombreMayorTemp = nombre;
            sexoMayorTemp = sexo;
            flagMayorTemp = 1;
        }
        if(sexo =="f"){

            if (flagMenorMujer == 0 || menorMujer>edad){
                menorMujer = edad;
                nombreMenorMujer = nombre;
                contMujer++;
                acumEdadMujer+=edad;
                flagMenorMujer = 1;
            }
        }
        else if (sexo =="m"){
            if (flagMenorAltura == 0 || menorAltura>altura){
                menorAltura = altura;
                nombreMenorAltura = nombre;
                contHombre++;
                acumEdadHombre +=edad;
                flagMenorAltura = 1;
            }

        }
        if (altura>160){
            contMidenMas++;
            if(sexo == "f"){
                contMujeresMidenMas;
            }
        }

        
        
        seguir = prompt("Desea seguir ingresando personas? s/n"); 
    
    }while(seguir == "s");
 
    promedioEdadHombre = acumEdadHombre/contHombre;
    promedioEdadMujer = acumEdadMujer /contMujer ;

    porcentajeMujeres = contMujeresMidenMas *100 / contMidenMas;


    document.write("a) el nombre y el sexo de la persona con mas temperatura"+nombreMayorTemp+"y el sexo es "+sexoMayorTemp+"<br>");
    document.write("b) el nombre de la mas joven las mujeres "+nombreMenorMujer+"<br>");
    document.write("c) de los hombre el nombre del mas bajito es "+nombreMenorAltura+"<br>");
    document.write("d) el promedio de edad entre los hombres"+promedioEdadHombre+"<br>");
    document.write("e) el promedio de edad entre las mujeres"+promedioEdadMujer+"<br>");
    document.write("f) la cantidad de personas que miden mas de 1,60 metros "+contMidenMas+"<br>");
    document.write("g) el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts es "+porcentajeMujeres+"<br>");


 */
    /*
    /*Ejercicio 1
    Se pide cargar la ficha médica para 5 jugadores de fútbol categoría mayores.
    Se solicita Nombre, Edad (entre 18 y 36), Peso y Altura. Se solicita:
    A) Nombre del jugador más joven.
    B) El peso del jugador más alto.
    C) Promedio de altura del equipo.
    D) Cantidad de jugadores que tienen entre 20 y 30 años 
    y cuyo peso esté entre 70 y 90 kg.
*/

    let i;
    let nombreMenorJugador;
    let flagMenorJugador = 0;

    let pesoMasAlto;
    let mayorAltura;
    let flagMayorAltura = 0;

    let acumAltura = 0;
    let promedioAltura;

    let contEdadPeso;



    for(i=0;i<5;i++){
        
        nombre = prompt("Ingresar el nombre ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar el nombre ");
        }

        edad = parseInt(prompt("ingrese la edad entre 18 y 36"));
        while(isNaN(edad)==true|| edad<18 && edad>36){
            edad =parseInt(prompt("Error.ingrese la edad entre 18 y 36"));//
        }

        peso = parseInt(prompt("ingrese el peso en Kg"));
        while(isNaN(peso)==true) {
            peso =parseInt(prompt("Error.ingrese el peso en Kg."));
        }

        altura = parseInt(prompt("ingrese la altura en cm"));
        while(isNaN(altura)==true){
            altura =parseInt(prompt("Error.ingrese la altura en cm."));
        }

        if (flagMenorJugador == 0 || menorJugador>edad){
            menorJugador = edad;
            nombreMenorJugador = nombre;
            flagMenorJugador = 1;
        }
        if (flagMayorAltura == 0 || mayorAltura<altura){
            mayorAltura = altura;
            pesoMasAlto = peso;
            flagMayorAltura = 1;
        }
        if(edad>=20 && edad<= 30){
            if (peso>=70 && peso<=90){
                contEdadPeso++;
            }

        }
        acumAltura+=altura; 
    }

    promedioAltura = acumAltura / 5;


    document.write("a) Nombre del jugador más joven "+nombreMenorJugador+"<br>");
    document.write("b) El peso del jugador más alto "+pesoMasAlto+"<br>");
    document.write("c) Promedio de altura del equipo es "+promedioAltura+"<br>");    
    document.write("d) Cantidad de jugadores que tienen entre 20 y 30 años y cuyo peso esté entre 70 y 90 kg"+ contEdadPeso+"<br>");

}



    /*Ejercicio 2
Un aficionado a las cartas coleccionables desea organizar su colección, para esto necesita ingresar en un programa:
nombre, tipo de carta (validar monstruo, arma, mágica) y su cantidad. Además deberá Especificar su rareza (validar común, rara, legendaria), precio (validar entre $250 y $5000). dejar ingresar hasta que el usuario quiera e informar lo siguiente:
La cantidad de cartas de cada tipo.
De las cartas raras la que menos precio tiene y su nombre
El valor de la colección entera
Informar el porcentaje de cartas según su rareza. (Sobre el total de cartas, no de ingresos)
*/
/*Ejercicio 3
UTN airlines nos pide desarrollar una app para registrar el ingreso de pasajeros a distintos vuelos, 
se le pide a los pasajeros: nombre, edad (validar 13-85), cantidad de asientos que desea reservar 
(validar minimo 1 maximo 5 asientos), cantidad de kilómetros del viaje (validar 3000 kilómetros el 
mínimo - 18000 kilómetros máximo) y el destino (validar río de janeiro, italia, cancún, japón), el 
precio por asiento es 1500 pesos, informar:
A) La cantidad total asientos ocupados
Dependiendo el destino seleccionado se aplican aumentos o descuentos según corresponda:
japón 40% de aumento
rio 10% descuento
italia 25% aumento
cancún 5% descuento
Según la cantidad de asientos reservados se aplican ciertos descuentos sobre el PRECIO FINAL:
1 pasajero 10% descuento
2-3 pasajeros 15% descuento
4-5 pasajeros 20% descuento
B) La recaudación total del vuelo
