function mostrar()
{
	//var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);
	
	let destino = document.getElementById("txtIdDestino").value;
	let mensaje;
	

	switch (destino){
		case "Bariloche":
			mensaje = "Oeste";
			break;

		case "Cataratas":
			mensaje = "Norte";
			break;

		case "Mar del Plata":
			mensaje = "Este";
			break;

		case "Ushuaia":
			mensaje = "Sur";
			break;

		
	}
	alert(mensaje);	




	/*switch (destino){
		case "Bariloche":
			alert("Oeste");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Ushuaia":
			alert("Sur");
			break;	

	}*/
	
	/*if (destino == "Bariloche"){
		alert("Oeste");
	}
	else if (destino == "Mar del plata"){
		alert("Este");
	}
	else if (destino == "Cataratas"){
		alert("Norte");
	}
	else if (destino == Ushuaia){
		alert("Sur");
	}*/



}//FIN DE LA FUNCIÓN