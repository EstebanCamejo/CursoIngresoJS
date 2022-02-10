function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 


	let numero 
	let maximo
	let minimo

	maximo = 10;
	minimo = 1;
	numero = Math.round(Math.random() * (maximo- minimo) + minimo);

	if (numero >= 9 ){
		alert ("Excelente " + numero);

	}
	else if (numero >=4){
		alert ("Aprobo " + numero);
	} 
	else {
		alert("Vamos, la proxima se puede "+ numero);
	}





}//FIN DE LA FUNCIÓN