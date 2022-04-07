function mostrar()
{
 /*Adjuntamos el 1er ejercicio de 3 del examen de curso de ingreso,

    1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
    nombre, altura, peso y sexo.   
    a)informar la cantidad de personas de sexo femenino.  
    b)la altura promedio en total   
    c)el nombre del hombre con menos peso(si lo hay)  
    Pedir datos por prompt y mostrar por document.write
    
    *//*

    let nombre;
    let altura;
    let peso;
    let sexo;
    let contf = 0;
    let acumAltura = 0;
    let promedioAltura;
    let flagMenorPeso = 0;
    let menorPeso;
    let menorPesoNombre;



    for(i=0;i<5;i++){
         
        nombre = prompt("Ingresar nombre ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar nombre");
        }
        
        altura = parseInt(prompt("ingresar la altura"));
        while(isNaN(altura)==true){
            altura =parseInt(prompt("Error.ingresar la altura."));
        }
        
        peso = parseInt(prompt("ingrese el peso"));
        while(isNaN(peso)==true){
            peso =parseInt(prompt("Error.ingrese el peso."));
        }
        
        sexo = prompt("Ingresar sexo m, f o nb");
        while (sexo!="m" && sexo!="f" && sexo!="nb"){
            sexo = prompt ("Error. Ingresar sexo m, f o nb");
        }


        acumAltura = acumAltura + altura;

        
        switch(sexo){
            case "f":
                contf = contf + 1;
                break;
            case "m":
                if (flagMenorPeso == 0 || menorPeso>peso){
                    menorPeso = peso;
                    menorPesoNombre = nombre;
                    flagMenorPeso = 1;
                }
                break;       
        }

    }

    promedioAltura = acumAltura/5;

    document.write("La cantidad de personas de sexo femenino es "+contf +"<br>");
    document.write("La altura promedio en total "+promedioAltura +"<br>"); 
    if(flagMenorPeso == 1){

        document.write("El nombre del hombre con menos peso es "+ menorPesoNombre + "<br>");
    }
    else{
        document.write("No hay nombre del hombre con menos peso");
    }
    /*

    /*Adjuntamos el 1er ejercicio de 3 del examen de curso de ingreso,

    1)De 5 personas que ingresan al hospital se deben tomar y 
    validar los siguientes datos:
    nombre, altura, peso y sexo.   
    a)informar la cantidad de personas de sexo femenino.  
    b)la altura promedio en total   
    c)el nombre del hombre con menos peso(si lo hay)  
    Pedir datos por prompt y mostrar por document.write

    */




    /*
    1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
    nombre, altura, peso y sexo.   
    a)informar la cantidad de personas de sexo femenino.  
    b)la altura promedio en total   
    c)el nombre del hombre con menos peso(si lo hay)  
    Pedir datos por prompt y mostrar por document.write*/

    let i;
    let nombre;
    let altura;
    let peso;
    let sexo;

    let contF = 0;
    let acumAltura = 0;
    let promedioAltura;

    let flagHombreMenorPeso = 0;
    let menorPeso;
    let nombreHombreMenorPeso;


    for(i=0;i<5;i++){//i<x = cantidad de veces q se repite;
        
        // VALIDACION LETRAS 
        nombre = prompt("Ingresar el nombre ");
        while (isNaN(nombre)==false){
            nombre = prompt ("Error. Ingresar el nombre ");
        }
        // VALIDACION NUMEROS
        altura = parseInt(prompt("ingrese la altura en cm"));
        while(isNaN(altura)==true || altura>260 || altura<60){
            altura =parseInt(prompt("Error.ingrese la altura en cm."));
        }
        // VALIDACION NUMEROS
        peso = parseInt(prompt("ingrese el peso en kg"));
        while(isNaN(peso)==true || peso>180 || peso<30 ){
            peso =parseInt(prompt("Error.ingrese el peso en kg."));
        }
        // VALIDACION LETRAS 
        sexo = prompt("Ingresar tipo de sexo: m, f o nb ");
        while (sexo != "m" && sexo != "f" && sexo != "nb"){
            sexo = prompt ("Error. Ingresar tipo de sexo: m, f o nb");
        }
        switch(sexo){
            case "m":
                if (flagHombreMenorPeso == 0 || menorPeso>peso){
                    menorPeso = peso;
                    nombreHombreMenorPeso = nombre;
                    flagHombreMenorPeso = 1;
                }
                break;
            case "f":
                contF++;
                break;
           
        }

        acumAltura = acumAltura + altura;
    }


    promedioAltura = acumAltura/5;

    document.write("a) la cantidad de personas de sexo femenino"+contF+"<br>");
    document.write("b)la altura promedio en total"+promedioAltura+"<br>");
    if (flagHombreMenorPeso == 1){
        document.write("c) el nombre del hombre con menos peso es "+ nombreHombreMenorPeso + "<br>");
    }
    else {
        document.write("c) No hay hombres.")
    };
}    /*

a)informar la cantidad de personas de sexo femenino.  
b)la altura promedio en total   
c)el nombre del hombre con menos peso(si lo hay)  
Pedir datos por prompt y mostrar por document.write*/