function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	let numero;
	let maximo;
	let minimo;

	maximo = 10;
	minimo = 1;
	numero = Math.round(Math.random() * (maximo - minimo) + minimo);
	
	alert(numero);	



	//numero = Math.round(Math.random() * (maximo - minimo) + minimo  );




}//FIN DE LA FUNCIÓN