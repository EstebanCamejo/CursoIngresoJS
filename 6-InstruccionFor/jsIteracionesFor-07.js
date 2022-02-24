function mostrar()
{

	//alert("ok");

	let numero;
	let cantidadDivisores = 0;
	let i;

	numero = parseInt(prompt("Ingresar un numero"));

	for (i=1 ; i <= numero ; i++){

		if (numero %i == 0){
			cantidadDivisores++;
			alert(i);
		}

	}
	alert("La cantidad de Divisores es " + cantidadDivisores);

}//FIN DE LA FUNCIÓN