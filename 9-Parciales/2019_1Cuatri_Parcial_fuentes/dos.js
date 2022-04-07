function mostrar()
{
    /*Adjuntamos el 1er ejercicio de 3 del examen de curso de ingreso,
    1)De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
    nombre, altura, peso y sexo. 
    a)informar la cantidad de personas de sexo femenino.
    b)la altura promedio en total  
    c)el nombre del hombre con menos peso(si lo hay)
    Pedir datos por prompt y mostrar por document.write
    */



    let i;
    let nombre;
    let altura;
    let peso;
    let sexo; 
    let contF = 0;
    
    let flagHombreMenorPeso = 0;
    let nombreHombreMenorPeso;
    let HombreMenorPeso;
    let acumAltura = 0;
    let alturaTotalPromedio;
   

    for (i=0;i<5;i++){

       
        nombre = prompt("ingrese el nombre");

        while(isNaN(nombre)==false){

            nombre =prompt("Error, ingrese el nombre.");
        }	
      
      
        altura = parseInt(prompt("ingrese la altura"));

        acumAltura = acumAltura + altura;

        while(isNaN(altura)==true){ // altura

            altura = parseInt(prompt("Error, ingrese la altura."));    

        }

        
        peso = parseInt(prompt("ingrese el peso"));

        while(isNaN(peso)==true){ // peso

            peso = parseInt(prompt("Error, ingrese el peso."));
        }	

        sexo = prompt("ingrese el sexo m,f, nb");
         
        while(sexo != "m" && sexo != "f" && sexo != "nb"){ 

            sexo =prompt("Error, ingrese el sexo m,f, nb.");  
        }


        switch(sexo){
            case "f":
                contF++;
            
                break;

            case "m":
                
                if (flagHombreMenorPeso == 0 || peso<HombreMenorPeso){
                    HombreMenorPeso = peso;
                    nombreHombreMenorPeso = nombre;
                    flagHombreMenorPeso = 1;
                }

                break;
            }  
         
    }
    
    alturaTotalPromedio =  acumAltura /  5;

    document.write(" a - la cantidad de personas del sexo femenino son " + contF);
    document.write(" b - la altura promedio el total es de " + alturaTotalPromedio);
    if (flagHombreMenorPeso == 1 ){
        document.write(" c - El nombre del hombre con menos peso es " + nombreHombreMenorPeso); 
    }
    /*a)informar la cantidad de personas de sexo femenino.
    
    b)la altura promedio en total
    
    c)el nombre del hombre con menos peso(si lo hay)
    
    Pedir datos por prompt y mostrar por document.write*/ 

}