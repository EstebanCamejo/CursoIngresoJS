function mostrar()
{ 	 
	let i = 0;
	let numeroIngresado;
	let promedio;
	let acumulador = 0;

	while(i<5){
		numeroIngresado =parseInt(prompt("ingrese un numero"));
		acumulador = acumulador + numeroIngresado; 
		i++
	}

	promedio = acumulador/i;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio; 

	/*
	let acumulador = 0 ;
	let numeroIngresado;
	let promedio;
	let i =0;

	while(i<5){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		i++;
	}
	
	promedio = acumulador/5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	//txtIdSuma.value=acumulador;
	//txtIdPromedio.value=acumulador/5;*/

}//FIN DE LA FUNCIÓN