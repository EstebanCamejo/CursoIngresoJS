/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
let numero1;
let numero2;
let resultado; 
let mensaje;


numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado = numero1 + numero2;

mensaje = "la suma es "+ resultado;

alert(mensaje);	
}

function restar()
{ 
let numero1;
let numero2;
let resultado; 
let mensaje;


numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado = numero1 - numero2;

mensaje = "la resta es "+ resultado;

alert(mensaje);	

	
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let resultado; 
	let mensaje;
	
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = numero1 * numero2;
	
	mensaje = "la multiplicacion es " + resultado;
	
	alert(mensaje);	
}
// Esteban Camejo Ejercicio 7 js
function dividir()
{
	let numero1;
	let numero2;
	let resultado; 
	let mensaje;
	
	
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	resultado = numero1 / numero2;
	
	mensaje = "la division es " + resultado;
	
	alert(mensaje);	
	
}

