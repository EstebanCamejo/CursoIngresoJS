function mostrar()
{
	//tomo el mes
	//var mesDelAño =txtIdMes.value;
 	//alert(mesDelAño);
	/*al seleccionar un mes informar.
	si tiene 28 días.
	si tiene 30 días.
	si tiene 31 días.*/
	let mes

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre": 			 		
			alert("Este mes tiene 30 dias")
			break;

		case "Febrero":
			alert("Este mes tiene 28 dias")	
				break;					
	
		default:
			alert("Este mes tiene 31 dias");
	}





}//FIN DE LA FUNCIÓN