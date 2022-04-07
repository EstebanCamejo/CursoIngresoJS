/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	/*var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

	let seguir ="s" ;
	let numero;
	let acumulador = 0 ;
	let contador = 0 ;
	let promedio;




	do{
	numero = parseInt(prompt("ingresar un numero"));
	acumulador = acumulador + numero;
	contador++;

	seguir = prompt("Desea ingresar un nuevo numero? s/n");

	} while (seguir == "s" );

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	

	let i = 0;
	let numero;
	let seguir;
	let promedio;
	let acumulador = 0;

	do{

	numero = parseInt(prompt("ingresar un numero"));
	acumulador = acumulador + numero;
	i++
	seguir = prompt(" desea ingresar otro numero? s/n");
	
	}while (seguir =="s")


	promedio = acumulador/i;

	document.getElementById("txtIdSuma").value= acumulador;
	document.getElementById("txtIdPromedio").value = promedio ;




	*/


 	//TP SABADO 


	let altura;
	let edad;
	let temperatura;
	let sexo;
	let nota;
	let nombre;
	let seguir;

	//let acumF = 0;
	

	let acumFiebre = 0;
	let contFiebre =0;
	
	let acumSinFiebre = 0;
	let contSinFiebre = 0;

	let flagAlumno = 0;
	let nombrePrimerAlumno;

	let contF = 0;
	let contM = 0;
	let contNb = 0;

	let promedioEdadF;
	let promedioEdadM;
	let promedioEdadNb;

	let acumEdadF = 0;
	let acumEdadM = 0;
	let acumEdadNb = 0;

	let flagTemp = 0;
	let MaxTemp;
	let NombreMaxTemp;
	
	let flagNbMasJoven = 0;
	let NbMasJoven = 0;

	let NbMasJovenAltura;
	let NbMasJovenNota;


	let mensaje1;
	let mensaje2;
	let mensaje3;
	let mensaje4;
	let mensaje5;
	let mensaje6;


	do{		 
		altura = parseFloat(prompt("Ingrese la altura hasta en cm. Hasta 250 cm"));
		while(isNaN(altura)==true){
			altura = prompt("Error, Ingrese la altura hasta 250 cm.");
		}
		edad = parseInt(prompt("ingrese la edad"));
		while(isNaN(edad)==true){
			edad =prompt("Error, ingrese la edad.");
		}
		temperatura = parseInt(prompt("Ingrese la temperatura"));
		while(isNaN(temperatura)==true || temperatura>45 || temperatura<30){
			temperatura = prompt("Error, ingrese la temperatura.");

		}
		if(flagTemp == 0 || temperatura>MaxTemp){
			MaxTemp = temperatura;
			NombreMaxTemp = nombre;

			flagTemp = 1;
		}
		if(temperatura>=37){
			acumFiebre = acumFiebre + contFiebre;
			contFiebre++;

		}
		else if (temperatura<37){
			acumSinFiebre = acumSinFiebre + contSinFiebre;
			contSinFiebre++;

		}		
		sexo = prompt("Ingrese el sexo m, f o nb.");
		while(sexo != "m" && sexo != "f" && sexo != "nb"){
			sexo = prompt ("Error, Ingrese el sexo m, f o nb.");
		}	
		switch (sexo){

			case "f":
				contF++;
				acumEdadF = acumEdadF + edad;
				promedioEdadF = acumEdadF/contF;


 				if(){

				}
				break;
				//g)el nombre de la mujer más alta de las que aprobó
			
			
			case "m":
				contM++;
				acumEdadM = acumEdadM + edad;
				promedioEdadM = acumEdadM/contM;
				break;

			case "nb":
				contNb++;
				acumEdadNb = acumEdadNb + edad;
				promedioEdadNb = acumEdadNb/contNb;
				
				if(flagNbMasJoven == 0 || edad<NbMasJoven){
					NbMasJoven = edad;
					NbMasJovenAltura = altura;
					NbMasJovenNota = nota;

					flagTemp = 1;
				}

				break;

		}
		nota = parseInt(prompt("Ingrese la nota"));
		while(isNaN(nota)==true || nota>10 || nota<0){
			nota = prompt ("Error, Ingrese la nota.");
		}
		if(flagAlumno == 0 || nota>=7){
			nombrePrimerAlumno = nombre;
			
		}
		

		nombre = prompt("Ingrese su nombre");		
		seguir = prompt("Desea seguir ingresando alumnos? s/n");

	}while(seguir == "s");
	/*
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.*/


	mensaje1 = "A - La cantidad de mujeres que hay son " + contF; 
	mensaje2 = " B - La cantidad de personas con fiebre son " + contFiebre + " y la cantidad sin fiebre son " + contSinFiebre;
	mensaje3 = " C - El promedio de edad por sexo es de hombres" + promedioEdadM + ", mujeres" + promedioEdadF + " NB " + promedioEdadNb;
	mensaje4 = " D - El primer alumno aprobado es" + nombrePrimerAlumno; //sss
	mensaje5 = " E - El nombre de la persona con máxima temperatura registrada es "+ NombreMaxTemp; //sss
	mensaje6 = " F - La altura del Nb mas joven es de " + NbMasJovenAltura + " y su nota es "+  NbMasJovenNota; //sss
	
	
	alert(mensaje1 + mensaje2 + mensaje3 + mensaje4 + mensaje5 + mensaje6);


}//FIN DE LA FUNCIÓN
