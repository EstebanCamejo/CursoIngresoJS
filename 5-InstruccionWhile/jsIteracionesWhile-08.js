/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	
	let seguir = 's';
	let sumaPositivos = 0;
	let multiplicacionNegativos = 1;
   
	do{
		numero = parseInt(prompt("ingresar un numero"));
		if (numero >= 0){
			sumaPositivos = numero + sumaPositivos;			
		} 
		else {
			multiplicacionNegativos = numero * multiplicacionNegativos ;
		}
		
		seguir = prompt(" desea ingresar otro numero? s/n");
		
	}while (seguir =='s');


	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;






	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN