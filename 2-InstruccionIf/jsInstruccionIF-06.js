function mostrar()
{
	//tomo la edad  
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad > 17 ){
		alert("Es mayor de edad");
	}
	else if ( edad < 13 ) {
			alert("Es niño");
		}
		else {
			alert("Es adolecente");
		}			
	

}

//FIN DE LA FUNCIÓN ||