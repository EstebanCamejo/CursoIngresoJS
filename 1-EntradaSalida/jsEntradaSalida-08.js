/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
// Esteban Camejo Ejercicio 8 js
{

	let numero1;
	let numero2;
	let resultado; 
	let mensaje;
	
	
	numero1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	
	resultado = numero1 % numero2;
	
	mensaje = "El resto es " + resultado;
	
	alert(mensaje);	
	
}
