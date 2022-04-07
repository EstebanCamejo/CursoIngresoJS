function mostrar()
{


	//alert("ok");


	let numero;
	let contadorDeDivisores = 0;
	let i;

	numero = parseInt(prompt("Ingresar un numero"));

	while(isNaN(numero)){

		numero = (prompt(" Eso no es un numero. Por favor ingresar un numero"));
	}

	for (i=1 ; i <= numero ; i++){

		if (numero %i == 0){
			contadorDeDivisores++;
			if (contadorDeDivisores >= 3){


				break;

			}	
		} 
	}

	if(contadorDeDivisores==2){

		alert (numero + " Es un numero primo");

	}
	else {
		alert (numero + " No es un numero primo");
	}



}//FIN DE LA FUNCIÓN