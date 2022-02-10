function mostrar()
{
	//tomo la edad  


	let edad;

	edad = document.getElementById("txtIdEdad").value;


	if (edad < 13 || edad > 18){
		alert("No es adolecente");

	/*if ( !( edad >= 13 && edad <= 17 ) ){
		alert("No es adolecente");*/

	}

}//FIN DE LA FUNCIÓN