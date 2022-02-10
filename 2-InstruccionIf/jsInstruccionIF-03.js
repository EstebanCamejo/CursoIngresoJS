function mostrar()
{
	//tomo la edad  

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);



	if(edad >= 18 ){
		alert("Es mayor de edad");
	} 
	
	if(edad < 18 ){
		alert("Es menor de edad");
	} 
	
	alert("Fin del proceso");


 
/*if(edad >= 18 ){
		alert("Es mayor de edad");
	} 
	else {alert("Es menor de edad");} ----- else = *sino* si tal cosa
	 que esta dentro de los corchetes es x lo que no forma parte entra en else*/
	

}//FIN DE LA FUNCIÓN