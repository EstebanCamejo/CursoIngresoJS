function mostrar()
{
	//var estacionIngresada =txtIdEstacion.value;
	//alert(estacionIngresada);

	
	let estacionDelAño;
	let destino;
	const PRECIO= 15000;
	let aumento = 0;
	let descuento = 0;
	let precioFinal;
	let mensaje;

	estacionDelAño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value; 

	switch (estacionDelAño){
		case "Invierno":
			if (destino == "Bariloche"){
				aumento = 20;
			}
			else if (destino == "Mar del Plata"){
				descuento = 20;
			}
			else {
				descuento = 10;
			}
			break;

		case "Verano":
			if (destino == "Bariloche"){
				descuento = 20;
			}
			else if ("Mar del Plata"){
				aumento = 20;
			}
			else {
				aumento = 10;
			}
			break;

		case "Otoño":
		case "Primavera":
			if (destino == "Cordoba"){
				precioFinal = PRECIO;
			}
			else {
				aumento = 10;
			}
			break;

	}
	if (aumento != 0){
		precioFinal = PRECIO + PRECIO * aumento/100;
	}
	else if (descuento != 0){
		precioFinal = PRECIO - PRECIO * descuento/100;
	}
	else {precioFinal = PRECIO;
	}

	mensaje = ("El valor de su viaje es $ "+ precioFinal);

	alert (mensaje);
	


	/*let destino;
	let estacionDelAño;
	const PRECIO = 15000;

	let aumento = 0;
	let descuento = 0;
	let precioFinal;

	estacionDelAño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacionDelAño){
		
		case "Invierno":
			if (destino == "Bariloche"){
				aumento = 20;			
			}
			else if (destino == "Mar del plata"){
				descuento = 20}
			else {
				descuento = 10;
			}
			break;						
		
		case "Verano":
			if (destino == "Bariloche"){
				descuento = 20;		
			}
			else if (destino == "Mar del plata"){
				aumento = 20;
			}
				
			else {
				aumento = 10;
			}
			break;			

		case "Otoño":
		case "Primavera":
			if (destino == "Cordoba"){
				precioFinal = PRECIO;			
				
			}
			else {
				aumento = 10;
			}
			break;	

	}
	if (aumento != 0 ){
		precioFinal = PRECIO + PRECIO* aumento/100;
	}
	else if (descuento != 0){
		precioFinal = PRECIO - PRECIO * descuento/100;
	}
	else {precioFinal = PRECIO;
	
	}
	alert ("El precio final de $ " + precioFinal);*/



}//FIN DE LA FUNCIÓN