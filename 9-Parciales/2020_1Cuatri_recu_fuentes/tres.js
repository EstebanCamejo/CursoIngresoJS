function mostrar()
{
	/*Enunciado:
	Realizar el algoritmo que permita ingresar los datos de una compra de productos 
	de la construccion, hasta que el cliente quiera:
	Tipo validad("arena";"cal";"cemento")
	Cantidad de bolsas,
	Precio por bolsa (más de cero ),
	al terminar la compra el cliente accede a un descuento segun las bolsas en total
	Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
	Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
	a) El importe total a pagar , bruto sin descuento y...
	b) el importe total a pagar con descuento(solo si corresponde)
	d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas 
	en el total de la compra.
	f) El tipo mas caro*/


	let producto;
	let cantidad;
	let precio;
	let descuento = 0;

	let acumArena = 0;
	let acumCal= 0;
	let acumCemento= 0;
	let totalAcum = 0;


	let contArena = 0;
	let contCal = 0;
	let contCemento = 0;

	let totalMontoArena = 0;
	let totalMontoCemento = 0;
	let totalMontoCal = 0;

	let totalBruto = 0;
	let totalaPagar = 0;

	let mayorCantidad;
	let tipoMasCaro;

	let promedioCal;
	let promedioCemento;
	let promedioArena;


	do{
		producto = prompt("Ingrese el tipo de producto: arena;cal o cemento");
		while(producto != "arena" && producto != "cal" && producto != "cemento"){
			producto = prompt("Error. Ingrese el tipo de producto: arena;cal o cemento");
		}
		cantidad = parseInt(prompt("Ingrese la cantidad deseada"));
		while( isNaN(cantidad)==true || cantidad<0 ){
			cantidad = parseInt(prompt("Error. Ingrese la cantidad deseada"));
		}
		precio = parseInt(prompt("Ingrese el precio unitario"));
		while( isNaN(precio)==true || precio<=0 ){
			precio = parseInt(prompt("Error. Ingrese el precio unitario"));
		}
		switch(producto){
			case "arena":
				acumArena = acumArena + cantidad;
				totalMontoArena = acumArena * precio; 
				promedioArena = totalMontoArena/acumArena;
				contArena++;

				break;
			case "cal":
				acumCal = acumCal + cantidad;
				totalMontoCal = acumCal * precio;
				promedioCal = totalMontoCal/acumCal;

				contCal++; 
				break;
			case "cemento":
				acumCemento = acumCemento + cantidad;
				totalMontoCemento = acumCemento * precio;
				promedioCemento = totalMontoCemento/acumCemento;
				contCemento++; 
				break;
				
					
		}
		seguir = prompt("Desea seguir ingresando productos? s/n");

	}while(seguir == "s");

	totalBruto = totalMontoArena + totalMontoCal + totalMontoCemento;
	totalAcum = acumArena + acumCal + acumCemento;
	
	if(totalAcum>30){
		descuento = totalBruto - totalBruto * 25/100 ;
		totalaPagar = descuento;
	}
	else if (totalAcum<30 && totalAcum>10 ){
		descuento = totalBruto - totalBruto * 15/100 ;
		totalaPagar = descuento;
	}
	else {
		totalaPagar = totalBruto ;
	}

	if(acumArena>acumCal && acumArena>acumCemento){
		mayorCantidad = "Arena";
	}
	else if(acumCal>acumArena && acumCal>=acumCemento){
		mayorCantidad = "Cal";
	}
	else {
		mayorCantidad = "Cemento";
	}


	if(promedioArena>promedioCemento && promedioArena>promedioCal){
		tipoMasCaro = "Arena";
	}
	else if (promedioCemento>promedioArena && promedioCemento>= promedioCal ){
		tipoMasCaro = "Cemento";
	}
	else {
		tipoMasCaro = "Cal";
	}

	mensaje1 = "A - El importe bruto total a pagar es :  " + totalBruto;
	mensaje2 = " B - El importe total a pagar con descuento es "+totalaPagar;
	mensaje3 = " D - El tipo de producto con mas bolsas en la compra es " + mayorCantidad;
	mensaje4 = " F - El tipo mas caro es " + tipoMasCaro;
	alert(mensaje1 + mensaje2 + mensaje3 + mensaje4);
}
