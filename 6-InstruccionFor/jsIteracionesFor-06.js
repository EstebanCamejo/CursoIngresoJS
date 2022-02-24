function mostrar()
{
	/*alert("ok");*/

	let numero;
	let cantidadPares = 0;
	let i;

	numero = parseInt(prompt("Ingresar un numero"));

	for (i=1 ; i <= numero ; i++){

		if (i %2 == 0){
			cantidadPares++;
			alert(i);
		}

	}
	alert("La cantidad de pares es " + cantidadPares);


}//FIN DE LA FUNCIÓN