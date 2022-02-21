function mostrar()
{
	//var destinoIngresado =txtIdDestino.value;
	//alert(destinoIngresado);

	let destino = document.getElementById("txtIdDestino").value;
	let mensaje1 = "Aca hace frio";
	let mensaje2 = "Aca hace calor";
	let mensaje;


	switch (destino){
		case "Bariloche":
		case "Ushuaia":	
			mensaje = mensaje1;
			break;
		default:
			mensaje = mensaje2;
			break;
	}
    alert (mensaje);





}//FIN DE LA FUNCIÓN