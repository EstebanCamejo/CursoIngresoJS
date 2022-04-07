/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
 let i = 0; // declaracion e inicializacion de variable de ctrl
 

  while (i < 10) { // variable de condicion
		i++;
	  	alert (i); // modificacion de variable de ctrl
	  
  }

	/* Simil Parcial 3:
	pedir el ingreso de 10 mascotas
	validar tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
	raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , 
	generico) y si es de tipo "otros" o pájaro , pedir solo un texto
	edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , 
	para pájaro 1 de 50
	nombre ( no se permite solo numero)
	mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
	mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/

    
   	let mascota;
	let raza;
	let i;
	let edad;
	let nombre;

	let mayorEdadPajaro;
	let flagEdadPajaro = 0;
	let nombrePajaro;

	let mayorEdadPerro;
	let flagEdadPerro = 0;
	let nombrePerro;

	let mayorEdadGato;
	let FlagEdadGato = 0;
	let nombreGato; 

	let mayorEdadOtros;
	let FlagEdadOtros = 0;
	let nombreOtros;
	
	let acumEdadSiamés = 0; 
	let acumEdadTurco = 0;
	let acumEdadPeterbald = 0;
	let acumEdadGenerico = 0;

	let contadorSiamés;
	let contadorTurco;
	let contadorPeterbald;
	let contadorGenerico;

	for (let i=1 ; i<=10; i++){

		mascota = prompt("Ingresar una mascota gato , perro , pájaro y otros ");
		while (mascota != "gato" && mascota != "perro" && mascota != "pájaro" && mascota != "otros"){

			mascota = prompt ("Error. Ingresar una mascota gato, perro, pájaro y otros");

			
			if (mascota == "pajaro"){
				
				raza = prompt("Ingresar el tipo de raza");
				while (isNaN(raza)== false ){
		
					raza = prompt ("Error. Ingresar el tipo de raza"); 
				}
				edad = parseInt(prompt("ingrese la edad entre 1 y 50"));
				while(isNaN(edad)==true|| edad>50 || edad<1){
				edad =prompt("Error, ingrese la edad entre 1 y 50.");

				if(flagEdadPajaro == 0 || mayorEdadPajaro<edad){
					mayorEdadPajaro = edad;
					nombrePajaro = nombre;
		
					flagTemp = 1;
				}


				

			}

			if(mascota == "gato"){

				raza = prompt("Ingresar la raza:siamés, turco, Peterbald , generico ");
				while (raza != "siamés" && raza != "turco" && raza != "Peterbald" && raza != "generico"){
		
					raza = prompt ("Error.Ingresar la raza:siamés, turco, Peterbald , generico");

					switch(raza){
						case "siamés":
							contadorSiamés++;
							acumEdadSiamés = acumEdadSiamés + edad;
							promedioEdadSiames = acumEdadSiamés/contadorSiamés;
							break;

						case "turco":
							contadorTurco++;
							acumEdadTurco = acumEdadTurco + edad;
							promedioEdadTurco = acumEdadTurco/contadorTurco;
							break;

						case "Peterbald":
							contadorPeterbald++;
							acumEdadPeterbald = acumEdadPeterbald + edad;
							promedioEdadPeterbald = acumEdadPeterbald/contadorPeterbald;
							break;

						case "generico":
							contadorGenerico++
							acumEdadGenerico = acumEdadGenerico + edad;
							promedioEdadGenerico =  acumEdadGenerico / contadorGenerico;

							break;
					}




				}

				edad = parseInt(prompt("ingrese la edad entre 1 y 20"));
				while(isNaN(edad)==true || edad>20 || edad<1){
				edad =prompt("Error, ingrese la edad entre 1 y 20.");
				}

				if(FlagEdadGato == 0 || mayorEdadGato<edad){
					mayorEdadGato = edad;
					nombreGato = nombre;
		
					flagTemp = 1;
				}




			}
			else if (mascota == "perro"){
				
				raza = prompt("Ingresar la raza: pastor, toy, callejero");
				while (raza != "pastor" && raza != "toy" && raza != "callejero"){
		
					raza = prompt ("Error. Ingresar la raza: pastor, toy, callejero");
				}
				edad = parseInt(prompt("ingrese la edad entre 1 y 20"));
				while(isNaN(edad)==true|| edad>20 || edad<1){

				edad = parseInt(prompt("Error, ingrese la edad entre 1 y 20."));
				}
				if(flagEdadPerro == 0 || mayorEdadPerro<edad){
					mayorEdadPerro = edad;
					nombrePerro = nombre;
		
					flagTemp = 1;
				}
			}
			else {
				raza = prompt("Ingresar el tipo de raza");
				while (isNaN(raza)== false ){
		
					raza = prompt ("Error. Ingresar el tipo de raza"); 
				}
				edad = parseInt(prompt("ingrese la edad entre 1 y 100"));
				while(isNaN(edad)==true || edad>100 || edad<1 ){
				edad =prompt("Error, ingrese la edad entre 1 y 100.");
				}			
				if(FlagEdadOtros == 0 || mayorEdadOtros<edad){
					mayorEdadOtros = edad;
					nombreOtros = nombre;
		
					flagTemp = 1;
				}
			}		


		}
		nombre = prompt("ingrese el nombre");

			while(isNaN(nombre)==false){

				nombre =prompt("Error, ingrese el nombre.");
			}	
		
		/*
		switch (mascota){

			case "gato":
				break;

			case "perro":
				break;

			case "pájaro":
				break;

			case "otros":
				break;
			*/
	
		
		}

		if (acumEdadGenerico>acumEdadPeterbald && acumEdadGenerico > acumEdadSiamés){
			mayorGatos = "Generico";
			promedioEdadGato =  acumEdadGenerico / contadorGenerico;
		}
		else if (acumEdadPeterbald>acumEdadGenerico && acumEdadPeterbald >= acumEdadSiamés){
			mayorGatos = "Peterbald "
			promedioEdadGato = acumEdadPeterbald/contadorPeterbald;
		}
	
		else {
			mayorGatos = "otros o Siames  "
			promedioEdadGato = 

		}
		/*/	mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
		mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/	
		
		mensaje1 = "El nombre de el gato mas viejo es " + nombreGato + nombreOtros + nombrePajaro + nombrePerro;
		mensaje2 = "La raza de gatos que mas tiene es " + + ""
	}
	alert("La cantidad de pares es " + cantidadPares);






	//alert('iteración while');
}//FIN DE LA FUNCIÓN