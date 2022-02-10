/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
// Esteban Camejo Ejercicio 9 js

{
	let numero1;
	let numero2;
	let resultado; 
	let aumento;
	let calculoAumento;
	let sueldoMasAumento;

    aumento = 10;
    numero1 = parseInt(document.getElementById("txtIdSueldo").value);

	calculoAumento = numero1/100*aumento;

	sueldoMasAumento = numero1 + calculoAumento;
	
	numero2 = sueldoMasAumento;
	//parseInt(document.getElementById("txtIdResultado").value);//
	
	resultado =  numero2;

	document.getElementById("txtIdResultado").value = resultado;
	

}
