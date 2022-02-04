/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
/*Esteban Camejo Ejercicio N6 JS EntradaSalida*/
function sumar()
{
let N1;
let N2;
let resultado;

N1 = document.getElementById("txtIdNumeroUno").value;
N2 = document.getElementById("txtIdNumeroDos").value;

N1 = parseInt(N1);
N2 = parseInt(N2);

resultado = N1 + N2; 

	alert("La suma es "+ resultado);
}

