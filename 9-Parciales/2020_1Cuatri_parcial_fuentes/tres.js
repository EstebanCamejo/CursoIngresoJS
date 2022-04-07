function mostrar()
{

	/*Bienvenidos.
	En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
	y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
	a) El nombre de la persona con mas temperatura.
	b) Cuantos mayores de edad estan viudos
	c) La cantidad de hombres que hay solteros o viudos.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre los hombres solteros.*/
	
	// declaro variables
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;

	let mayorTemperatura = 0;
	let flag = 0;
	
	let contadorDeViudo  = 0; //contadorDeViudo +1; // contadorDeViudo++ 
	
	let cantidadHombres = 0; 
	let cantidadPersonas = 0;

	let acumuladorEdadHombre = 0;
	let cantidadHombresSolteros = 0;

	do{

		nombre = prompt("Ingresar el nombre");
		
		edad = parseInt(prompt("Ingrese la edad"));
		
		do {
			sexo = 	prompt("Ingresar sexo f/m");

		}while (sexo !="f" && sexo != "m");

		do{
			estadoCivil = prompt("Ingrese su estado civil : soltero, casado o viudo");

		}while(estadoCivil !="soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		
		temperaturaCorporal = parseInt(prompt("Ingrese su temperatura corporal"));

		respuesta =prompt("Desea seguir ingresando datos : si/no ");
		
		//a) El nombre de la persona con mas temperatura.
		
		if (flag == 0 || temperaturaCorporal > mayorTemperatura){
				
			mayorTemperatura = temperaturaCorporal;
			mayorTemperatura = nombre;
			
			flag = 1;
		} 

		//b) Cuantos mayores de edad estan viudos // si mayor de edad es mayor q 0 
 
		if (estadoCivil== "viudo" && edad > 18){
			contadorDeViudo = contadorDeViudo +1; // contadorDeViudo++ 
		}

		// c) La cantidad de hombres que hay solteros o viudos.

		if (sexo =="m" && estadoCivil != "casado"){

			cantidadHombres = cantidadHombres + 1;
		}

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura

		if ( edad >60 && temperaturaCorporal > 38){

			cantidadPersonas = cantidadPersonas + 1
		}

		// e) El promedio de edad entre los hombres solteros.*/

		if (sexo == "m" && estadoCivil == "soltero"){

			acumuladorEdadHombre = acumuladorEdadHombre + edad;
			cantidadHombresSolteros = cantidadHombresSolteros +1; 
		}		
		
	}while (respuesta == "si")

	promedioEdadHombreSoltero = acumuladorEdadHombre / cantidadHombresSolteros;

	/* a) El nombre de la persona con mas temperatura.
	b) Cuantos mayores de edad estan viudos
	c) La cantidad de hombres que hay solteros o viudos.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre los hombres solteros.*/

	alert ("A - El nombre de la persona con mas temperatura es "+ nombre);
	alert ("B - La cantidad de mayores de edad viudos es de "+ contadorDeViudo);
	alert ("C - La cantidad de hombres que hay solteros o viudos es de " +cantidadHombres );
	alert ("D - La cantidad de personas de la tercera edad que tienen mas de 38 de temperatura son " + cantidadPersonas);
	alert ("E - El promedio de edad entre los hombres solteros es de " + promedioEdadHombreSoltero)

}
