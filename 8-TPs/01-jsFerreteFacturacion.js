/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
TP 1 Esteban Camejo
*/"txtIdPrecioUno" + "txtIdPrecioDos" + "txtIdPrecioTres"  


function Sumar () 
{
let precio1
let precio2
let precio3
let suma
let mensaje

precio1 =  parseInt(document.getElementById("txtIdPrecioUno").value);
precio2 =  parseInt(document.getElementById("txtIdPrecioDos").value);
precio3 =  parseInt(document.getElementById("txtIdPrecioTres").value);

suma = precio1 + precio2 + precio3;

mensaje = "Total suma " + suma;

alert(mensaje);


	
}
function Promedio () 
{
let precio1
let precio2
let precio3
let promedio
let mensaje

precio1 =  parseInt(document.getElementById("txtIdPrecioUno").value);
precio2 =  parseInt(document.getElementById("txtIdPrecioDos").value);
precio3 =  parseInt(document.getElementById("txtIdPrecioTres").value);

promedio = (precio1 + precio2 + precio3)/3;

mensaje = "Total promedio " + promedio;

alert(mensaje);

}
function PrecioFinal () 
{
let precio1
let precio2
let precio3
let preciofinal
let mensaje

precio1 =  parseInt(document.getElementById("txtIdPrecioUno").value);
precio2 =  parseInt(document.getElementById("txtIdPrecioDos").value);
precio3 =  parseInt(document.getElementById("txtIdPrecioTres").value);

preciofinal = (precio1 + precio2 + precio3)*1.21;

mensaje = "Total precio final " + preciofinal;

alert(mensaje);
}