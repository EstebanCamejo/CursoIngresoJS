/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
/*Esteban Camejo Ejercicio N6 JS EntradaSalida*/
function sumar()
{
let numero1;
let numero2;
let resultado;
let mensaje;


//extraigo la informacion en formato numero con el parsein//
numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

resultado = numero1 + numero2; 

mensaje = "La suma es "+ resultado;

	//alert("La suma es "+ resultado);//
	
	alert(mensaje);

}

