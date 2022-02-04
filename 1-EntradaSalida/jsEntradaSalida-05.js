/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	

Esteban Camejo Ejercicio 5 JS EntadaSalida*/
function mostrar()
{	
// asigno un nombre a las variables para luego darles un valorde funcion
	let nombre;
	let edad;

/* le doy el valor a c/u de las variables yendo a buscar la info que nos brinda el usuario 
trayendo los valores del html*/

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

/* utilizando una combinacion de alert concatenando (+) entre comillas el texto 
literal + la variable asignada en cada caso redacto el msj*/


	alert("Usted se llama " +nombre+ "y tiene " +edad+ " años");
}

