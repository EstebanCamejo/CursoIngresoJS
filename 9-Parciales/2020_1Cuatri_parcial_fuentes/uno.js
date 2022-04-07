
function mostrar()
/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
- el tipo (validar "barbijo" , "jabón" o "alcohol") ,
- el precio (validar entre 100 y 300),
- la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
- la Marca y 
- el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
BBBB) del tipo con mas unidades, Mostrar el precio 
c) Cuántas unidades de jabones hay en total
Numbre.isNan (unidades)*/


{

	let i = 0 ;
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;


	let contadorAlcohol = 0;
	let acumAlcohol = 0;
	let contadorBarbijo = 0;
	let acumBarbijo = 0;
	let contadorJabon = 0;
	let acumJabon = 0;


	let flagAlcohol = 0;
	let masBaratoAlcohol= 0;
	let fabricanteAlcoholBarato;

	let mayorTipo;

	let cantidadAlcoholBarato;


	for (i ; i<5 ; i++ ){

		tipo = prompt("Ingrese el tipo de producto barbijo , jabon o alcohol")
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){ // probar  con || en vez de &&

			tipo = prompt("Error. Ingrese el tipo de producto barbijo , jabon o alcohol");

		}
		precio	= parseInt(prompt("Ingrese el precio del producto entre 100 y 300"))

		while (isNaN (precio) == true || precio>300 || precio< 100){

			precio = parseInt(prompt("Error. Ingrese un precio del producto entre 100 y 300"));

		}
		cantidad = parseInt(prompt("Ingrese la cantidad del producto hasta 1000 unidades"))

		while (isNaN (cantidad) == true || cantidad>1000 || cantidad <= 0){

			cantidad = prompt("Error. Ingrese la cantidad del producto hasta 1000 unidades");

		}
		
		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");

		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante		
		switch (tipo){
			case "barbijo":
				acumBarbijo = acumBarbijo + cantidad;
				contadorBarbijo++				
				break;

			case "jabon":
				acumJabon = acumJabon + cantidad;
				contadorJabon++ 					
				break;

			case "alcohol":
				acumAlcohol = acumAlcohol + cantidad;
				contadorAlcohol++;
				
				if(flagAlcohol==0||precio<masBaratoAlcohol){
					masBaratoAlcohol= precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;

					flagAlcohol = 1;			}				
				break;							
		}
	}		
	//b) Del tipo con mas unidades, el promedio por compra
	if(acumBarbijo>acumJabon && acumBarbijo>acumAlcohol){
		mayorTipo = "barbijo";
		promedioMayorTipo = acumBarbijo/contadorBarbijo;
	}
	else if(acumJabon>acumBarbijo && acumJabon>=acumAlcohol){
		mayorTipo = "jabon";  
		promedioMayorTipo = acumJabon/contadorJabon;
	}
	else{
		mayorTipo = "alcohol";
		promedioMayorTipo = acumAlcohol/contadorAlcohol;	
	

			

			 // c) Cuántas unidades de jabones hay en total	

	}


	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante		
	//b) Del tipo con mas unidades, el promedio por compra
	// c) Cuántas unidades de jabones hay en total	


	mensaje1 = "A - La cantidad del mas barato del alcohol es "+ acumAlcohol +  "/ny el fabricante es "+fabricanteAlcoholBarato;
	mensaje2 = "B - El promedio del tipo con mas unidades es de "+ promedioMayorTipo;
	mensaje3 = "C - La cantidad de Jabones que hay en total es de " + acumJabon;


	alert(mensaje1 + mensaje2 + mensaje3);



/*
	let tipoProducto;
	let precioProducto;
	let cantidad;
	let i =0; // contador
	let marca;
	let fabricante;

	let menorPrecioAlcohol = 99;
	let cantidadMenorAlcohol;
	let fabricanteMenorAlcohol;

	let maximoCantidad = 999;
	let maximoProductos;
	let maximoPrecios;

	let acumJabon = 0;

	let mensaje1;
	let mensaje2;
	let mensaje3;




	for(i; i<5; i++ ){

		tipoProducto = prompt("Ingresar un tipo de producto");
		while (tipoProducto != "barbijo" && tipoProducto !="jabón" && tipoProducto != "alcohol"){
			
			tipoProducto = prompt("Ingresar un tipo de producto valido barbijo, jabón o alcohol");
		}
						
		precioProducto = parseInt(prompt("Ingresar el precio del producto entre 100 y 300 "));
		while ( isNaN(precioProducto)==true || precioProducto>300 || precioProducto<100 ){
			
			precioProducto = prompt("Por favor, ingrese un precio entre 100 y 300 ")
		}
		
		cantidad = parseInt(prompt("Ingresar la cantidad del producto"));
		while (isNaN(cantidad)==true || cantidad <= 0 || cantidad > 1000 ){

			cantidad = prompt("Por favor, ingresar una cantidad entre 1 y 1000 ")
		}

		marca = prompt("Ingresar la marca del producto");

		fabricante = prompt("Ingresar el fabricante del producto");
		
	    //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	
		if(tipoProducto == "alcohol"){

			if (menorPrecioAlcohol>precioProducto){
				menorPrecioAlcohol = precioProducto;
				cantidadMenorAlcohol = cantidadMenorAlcohol + cantidad;// contador
				fabricanteMenorAlcohol = fabricante;
			}	
			/*
			if (flag == 0 || precioProducto < menorPrecioAlcohol){
				menorPrecioAlcohol = precioProducto
			}

			if (flag == 0 || temperaturaCorporal > mayorTemperatura){
					
				mayorTemperatura = temperaturaCorporal;
				mayorTemperatura = nombre;
				
				flag = 1;
			} */
			

	/*	}
		else if (tipoProducto == "jabones" ){
			
			acumJabon = acumJabon + cantidad;

		}	
			//BBBB) del tipo con mas unidades, Mostrar el precio
		if ( maximoCantidad > cantidad){

			maximoCantidad = cantidad;
			maximoProductos = tipoProducto;
			maximoPrecios = precio;	
		}
 	} 
	   //c) Cuántas unidades de jabones hay en total
	   // Numbre.isNan (unidades)

	   //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	/*	alert (mensaje1 = "La cantidad de unidades de los mas baratos de los alcoholes es de  "+ cantidadMenorAlcohol+ " y el fabricante es " + fabricanteMenorAlcohol );
		alert (mensaje2 = "El tipo con mas unidades tiene  "+ maximoCantidad+" y el precio es de  "+maximoPrecios);
		alert (mensaje3 = "La cantidad total de jabones es de  "+ acumJabon);*/
		
   


		//alert("uno");
} 
