function mostrar()
{
	//tomo el mes
	
	/*al seleccionar un mes informar.
	si es Enero: "que comiences bien el año!!!."
	si es Marzo: "a clases!!!."
	si es Julio: "se vienen las vacaciones!!!."
	si es Diciembre: "Felices fiesta!!!."*/

	//var mesDelAño =txtIdMes.value;//
	
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;

		case "Marzo":
			alert("a clases!");
			break;

		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;

		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;

	}


	
	/*alert(mesDelAño);
	swirch(variable)
		case"valor":
				bloque de codigo;
				break;
		case "otro valor"
				bloque de codigo;
				break;
				
		defull:     // opcional
			|bloque de codigo;
			break;		
	*/
	

}//FIN DE LA FUNCIÓN