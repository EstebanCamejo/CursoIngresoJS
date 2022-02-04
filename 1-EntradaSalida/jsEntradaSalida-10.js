/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()

// Esteban Camejo Ejercicio 10 js

{
	
	let numero1;
	let numero2;
	let resultado; 
	

	numero1 = parseInt(document.getElementById("txtIdImporte").value);
	numero2 = numero1 * 0.75;
	
	//parseInt(document.getElementById("txtIdResultado").value);//
	
	resultado =  numero2;

	document.getElementById("txtIdResultado").value = resultado;
	

}
