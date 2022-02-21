/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	/*// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;*/


	let numero;
	let seguir;
	let numeroMaximo;
	let numeroMinimo;
	let flag = 0;

	do{
		numero = parseInt(prompt("ingresar un numero"));
		if (flag == 0){
			numeroMaximo = numero;
			numeroMinimo = numero;
			flag = 1;
		}
		
		if (numero > numeroMaximo){
			numeroMaximo = numero;			
		} 
		else if (numero < numeroMinimo){
			numeroMinimo = numero;
		}		
		seguir = prompt(" desea ingresar otro numero? s/n");
		
	}while (seguir =='s');


	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;


















 	/*

	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta = "s";

	numeroIngresado = parseInt(prompt("Ingrese un numero"));

	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero")); 

	} while(isNaN(numeroIngresado)== true );

	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;

	respuesta = prompt(" Quiere ingresar un nuevo numero? s/n ");

	while (respuesta =="s"){

		numeroIngresado=parseInt(prompt("Ingrese un numero"));

		if (numeroIngresado > numeroMaximo){
			numeroMaximo=numeroIngresado;
		}
		else if (numeroIngresado<numeroMinimo ){
			numeroMinimo=numeroIngresado;

		}
		respuesta = prompt(" Quiere ingresar un nuevo numero? s/n ");
		
	}
	
	document.getElementById("numeroMaximo").value = numeroMaximo;
	document.getElementById("numeroMinimo").value = numeroMinimo;
 */

}//FIN DE LA FUNCIÓN