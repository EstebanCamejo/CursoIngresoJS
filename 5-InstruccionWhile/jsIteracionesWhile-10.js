/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	/*var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;*/


	let numero;
	let cantidadPositivos = 0;
	let cantidadNegativos = 0;
	let cantidadCeros = 0;
	let cantidadPares = 0;
	let acumuladorNegativos = 0;
	let acumuladorPositivos = 0;	
	let seguir;
 	let diferenciaNumeros;
	let promedioPositivos = 0;
	let promedioNegativos = 0; 
	let sumaNegativos = 0;	
	let sumaPositivos = 0;

	let diferenciaNumeros; 

	do{
		numero = parseInt(prompt("ingresar un numero"));

		if (numero == 0){
			cantidadCeros++			
		
		}	
		else if (numero > 0){
			sumaPositivos = numero + sumaPositivos;		
			acumuladorPositivos++;
		} 
		else {
			sumaNegativos = numero + sumaNegativos ;
			acumuladorNegativos++;
		}
		if (numero %2 == 0){
			cantidadPares++
		}
		seguir = prompt(" desea ingresar otro numero? s/n");
		
	}while (seguir == 's');

	

	promedioPositivos = sumaPositivos / cantidadPositivos;

	promedioNegativos = sumaNegativos / cantidadNegativos;

	diferenciaNumeros = sumaPositivos - sumaNegativos;

	document.write ("1-Suma de los negativos." + sumaNegativos);
	document.write ("--- 2-Suma de los positivos."+ sumaPositivos);
	document.write ("--- 3-Cantidad de positivos." + cantidadPositivos);
	document.write ("--- 4-Cantidad de negativos." + cantidadNegativos);
	document.write ("--- 5-Cantidad de ceros." + cantidadCeros );
	document.write ("--- 6-Cantidad de números pares." + cantidadPares );
	document.write ("--- 7-Promedio de positivos." + promedioPositivos);
	document.write ("--- 8-Promedios de negativos." + promedioNegativos);
	document.write ("--- 9-Diferencia entre positivos y negativos, (positvos-negativos)." + diferenciaNumeros);


}//FIN DE LA FUNCIÓN