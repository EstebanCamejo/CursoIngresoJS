/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	//sexoIngresado = prompt("ingrese f ó m .");

	/*do{
		sexoIngresado = prompt("ingrese f o m" );
	}while(sexoIngresado != "f" && sexoIngresado != "m");*/

	sexoIngresado = prompt("ingrese f o m" );

	while (!(sexoIngresado == "f" || sexoIngresado == "m")){
		alert("dato incorrecto");
		sexoIngresado = prompt("ingrese f o m" );
	}
	
	if(sexoIngresado == "f" || sexoIngresado == "m"){

		alert ("Dato correcto");
	}


	//txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN