/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/* Esteban Camejo Ejercicio 4 EntradaSalida*/

function mostrar()
{
	let nombre;

	nombre = prompt("ingresar nombre")

 document.getElementById("txtIdNombre").value = nombre;

	alert(nombre);
}

