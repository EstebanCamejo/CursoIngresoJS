/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	
	while (!(numeroIngresado>0 && numeroIngresado<10 )){				//while( ! (numero>0 && numero <9));

		numeroIngresado = prompt ("Error ingrese un número entre 0 y 10.");
	}
	if (numeroIngresado>0 && numeroIngresado<10 ){
		alert ("numero correcto");
	}
	

	//document.getElementById("txtIdNumero").value = " El dato es correcto";






}//FIN DE LA FUNCIÓN