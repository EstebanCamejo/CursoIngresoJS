function mostrar()
{
	//var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);

	let estacionDelAño;
	let destino;
	let mensaje;

	estacionDelAño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionDelAño){

		case "Invierno":
			if(destino == "Bariloche"){
				mensaje = "Se viaja";
			} 
			else{
				mensaje = "No se viaja";
			}
			break;
			

		case "Verano":
			if(destino == "Mar del plata"|| destino == "Cataratas"){
				mensaje = "Se viaja";
			}
			else {
				mensaje = "No se viaja";
			}
			break;

		case "Otoño":
			mensaje = "Se viaja"
			break;
		
		case "Primavera":
			if (destino == "Bariloche"){
				mensaje = "No se viaja";
			}
			else {
				mensaje = "Se viaja"
			}
			break;
	}
	alert(mensaje + " a " + destino );





















	/*
	let estacionDelAño;
	let destino;
	let mensaje;
	let mensaje1 = "Se Viaja ";
	let mensaje2 = "No se Viaja ";


	estacionDelAño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionDelAño){
		case "Invierno":
			if ( destino == "Bariloche"){
			mensaje = mensaje1;
			}
			else if (mensaje = mensaje2);
			break;

		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas"){
			mensaje = mensaje1;	
			}
			else if (mensaje = mensaje2);
			break;

		case "Otoño":
			mensaje = mensaje1;
			break;

		case "Primavera":
			if (destino != "Bariloche"){
				mensaje = mensaje1;
			}
			else if (mensaje = mensaje2);
			break;

	}
	alert(mensaje + "a " + destino);
	*/

}//FIN DE LA FUNCIÓN