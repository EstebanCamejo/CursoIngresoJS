
function mostrar()
{

	/*	Debemos realizar la carga de una compra de 5(cinco) 
	productos de prevención de contagio,
	de cada una debo obtener los siguientes datos:
	el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo 
	y no debe superar las 1000 unidades),
	la Marca y el fabricante.
	Se debe Informar al usuario lo siguiente:
	a) Del más caro de los jabones, la cantidad de unidades y el fabricante
	b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
	c) Cuántas unidades de Barbijos se compraron en total*/
	//alert("uno");
	
	let producto;
	let precio = 0;
	let cantidad = 0;
	let marca;
	let fabricante;

	let flagJabon = 0;
	let masCaroFabricante;
	let masCaroJabon = 0;
	let masCaroCantidad =0;

	let acumAlcohol = 0;
	let acumBarbijo = 0;
	let acumJabon = 0;
	
	let contBarbijo = 0;
	let contJabon = 0;
	let contAlcohol = 0;

	let promedioMasUnidades;
	let productoMasUnidades;


	for(i=0;i<5;i++){

		producto = prompt("Ingrese el tipo de producto: barbijo, jabon o alcohol.");

		while(producto !="barbijo" && producto != "jabon" && producto != "alcohol" ){

			producto = prompt("Error. Ingrese el tipo de producto: barbijo, jabon o alcohol.");

		}

		
	 	precio = parseFloat(prompt("Ingrese el precio del producto (entre 100 y 300)"));

		while (isNaN(precio)==true || precio<100 || precio>300 ) {

			precio = parseFloat(prompt("Error. Ingrese el precio del producto (entre 100 y 300)"));

		}

	 	cantidad = parseInt(prompt("Ingrese la cantidad del producto (maximo aceptado 1000."));

		while (isNaN(cantidad)==true || cantidad<0 || cantidad>1000 ){

			cantidad = parseInt(prompt("Error. Ingrese la cantidad del producto (maximo aceptado 1000."))

		}

		marca = prompt("ingrese la marca del producto.");

		fabricante = prompt("ingrese el nombre del fabricante.") 


		switch (producto){

			case "barbijo":
				acumBarbijo = acumBarbijo + cantidad;
				contBarbijo++
				break;
			
			case "jabon":
				acumJabon = acumJabon + cantidad;
				contJabon++
				if(flagJabon == 0 || masCaroJabon>precio){
					masCaroJabon = precio;
					masCaroCantidad = cantidad;
					masCaroFabricante = fabricante;
				}
				break;

			case "alcohol":
				acumAlcohol = acumAlcohol + cantidad;
				contAlcohol++
				break;		
		}

	}
	if (acumAlcohol>acumBarbijo && acumAlcohol>acumJabon){
		productoMasUnidades = "alcohol.";
		promedioMasUnidades	= acumAlcohol/contAlcohol;
	}
	else if (acumBarbijo>acumAlcohol && acumBarbijo>=acumJabon){
		productoMasUnidades = "barbijo.";
		promedioMasUnidades	= acumBarbijo/contBarbijo;
	}
	else {
		productoMasUnidades = "jabon.";
		promedioMasUnidades = acumJabon/contJabon;
	}
	mensaje1 = "Del más caro de los jabones, la cantidad de unidades es " + masCaroCantidad + " y el fabricante es " +masCaroFabricante ;
	mensaje2 = " .El promedio por compra del producto con mas unidades es "+promedioMasUnidades;
	mensaje3 = " .La cantidad de barbijos que se compraron en total es de "+ acumBarbijo;
	
	alert (mensaje1 + mensaje2 + mensaje3);
} 
