function mostrar()
{
	//tomo el mes

	/*al seleccionar un mes informar.
	si estamos en Invierno: "Abrigate que hace frio."
	si 	aún no llego el Invierno: "Falta para el invierno."
	si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
	ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/


	//var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);

	let mes

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
							
		case "Julio":
		case "Agosto":
				alert("Abrigate que hace frio.");				
				break;					
		
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
				alert("Ya pasamos el frio, ahora calor");					
				break;	
	
		default:
			alert("Falta para el invierno.");
			
				
	}			
}//FIN DE LA FUNCIÓN