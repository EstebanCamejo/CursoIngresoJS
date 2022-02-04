/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/* Esteban Camejo Ejercicio 4 EntradaSalida*/

function mostrar()
{
	// reservo espacio en memoria para guardar el nombre del usuario
	let nombre;

	// guardo en la variable "nombre" el texto que escribio el usuario dentro de la ventana prompt
	nombre = prompt("ingresar nombre");

	/* copio la info que tengo guardada en la variable "nombre" dentro de la caja de texto enlazada 
 en la pagina html*/
 document.getElementById("txtIdNombre").value = nombre;

 
	
 alert(nombre);
}

