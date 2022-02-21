function mostrar()
{
	
	let edad;
	let mensaje;
	let nombre;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	nombre = prompt("Ingrese su nombre");
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad<13){
		mensaje = "Feliz dia ";
		if (nombre == "Ricardo"){
			mensaje = mensaje + nombre + ", muy chiquito para ese nombre";
		}

	}
	else {
		if (edad<18){
			mensaje = "Usted es adolecente ";
			if(estadoCivil == "Divorciado"){
				mensaje = mensaje + ", toda una vida por delante ";
			}			
			if (edad == 17){
				mensaje = mensaje + ", ultimo año ";
			}
			if (nombre == "Violeta"){
				mensaje = mensaje + nombre + ", como un color";
			}
		}
		if (edad>18){
			mensaje = "Tenes que laburar";
			if(edad == 33){
				mensaje = mensaje + ", como cristo";
			}	
			if(estadoCivil == "Soltero"){
				mensaje = mensaje + ", a salir ";
			}
				
		
			
		}
		else if (edad > 60 ){
			mensaje = mensaje + ", a jubilarse";
				if (edad == 88){
					mensaje = mensaje +", lindo numero ";
				}
				if (nombre == "Alfredo"){
					mensaje = mensaje + nombre + ", como el de Queen";
				}
		}
		if(estadoCivil == "Casado" ){
			mensaje = mensaje + ", casada quiere casa";
		}
	}
	if (edad %2 == 0){
		mensaje = mensaje + ", sos par";
	} 	
	alert(mensaje);


	/*
	let edad;
	let estadoCivil;
	let mensaje;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad<18 && estadoCivil != "Soltero"){
	mensaje = "Es muy pequeño para no ser soltero";
	}
	alert(mensaje);*/

}//FIN DE LA FUNCIÓN