/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ // Esteban Camejo Ejercicio 7 js
function sumar()
{ 
let numero1;
let numero2;
let suma; 
let resultadoSuma;
let resta;
let resultadoResta;
let multiplicacion;
let resultadoMultiplicacion;
let division;
let resultadoDivision;
let mensajeSuma;
let mensajeResta;
let mensajeMultiplicacion;
let mensajeDivision;


numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
resultadoSuma = suma;

mensajeSuma = "La suma es "+ resultadoSuma;
//mensaje = mensajeSuma;//
alert(mensajeSuma);


resultadoResta = resta;
mensajeResta = "La resta es "+ resultadoResta;
//mensaje = mensaje + mensajeResta;//
alert(mensajeResta);


resultadoMultiplicacion = multiplicacion;
mensajeMultiplicacion = "La multiplicacion es "+ resultadoMultiplicacion;
//mesnaje = mensaje + mensajeMultiplicacion;//
alert(mensajeMultiplicacion);

resultadoDivision = division;
mensajeDivision = "La division es "+ resultadoDivision;
//mensaje = mensaje + mensajeDivision;//
alert(mensajeDivision);	

}

/*function restar()
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
*/	

