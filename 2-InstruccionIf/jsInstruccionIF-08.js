function mostrar()
{
	//tomo la edad 
	
	
	let edad;
	let estadoCivil;
	

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;
	
 

	if ( edad > 18 && estadoCivil == "Soltero" ){

		alert("Es soltero y no es menor");
	}
	
	/*	A = 10
		B = 30
		C = 3

		if (A<B && A<C) alert ("A es el Menor")
		else (B<A && B<C) alert("B es el menor")
			else (C<A && C<B) alert ("C es el menor") */


}//FIN DE LA FUNCIÓN