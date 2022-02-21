function mostrar()
{
	//tomo la hora
	//var horaDelDia =txtIdHora.value;
	//alert(horaDelDia);
	//let horarioDelDia;

	let horarioDelDia = parseFloat(document.getElementById("txtIdHora").value);

		if (horarioDelDia >=7 && horarioDelDia<=11 ){
		alert ("Es de mañana");
		}
		else if (horarioDelDia >=12 && horarioDelDia<=19 ){
		alert ("Es de tarde");
		}
		else if ( ( horarioDelDia >=20 && horarioDelDia<=24 ) || ( horarioDelDia >=00 && horarioDelDia<=6) ){
		alert ("Es de noche");
		}
		else {
		alert ("No es una hora valida");
		}

}
{
/*
	switch(horarioDelDia){
		case 07:
		case 08:
		case 09:
		case 10: 	
		case 11: 		 		
			alert("Es de mañana.")
			break;					
		case 12:
		case 13:
		case 14:
		case 15: 	
		case 16:
		case 17:
		case 18:
		case 19:		
			alert("Es de tarde")
			break;
		case 20:
		case 21:
		case 22:
		case 23: 	
		case 24:
		case 00:
		case 01:
		case 02:
		case 03: 	
		case 04:
		case 03: 	
		case 04:
		case 05: 	
		case 06:	
			alert("Es de noche.")
			break;
		default: 
		alert ("la hora no existe");
								
	}
*/	

}//FIN DE LA FUNCIÓN