/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let ancho
let largo
let totalPerimetro
let totalAlambreAComprar
let mensaje

largo = parseFloat(document.getElementById("txtIdLargo").value);

ancho = parseFloat(document.getElementById("txtIdAncho").value);

totalPerimetro = (largo + ancho) * 2;

totalAlambreAComprar = totalPerimetro * 3;

mensaje = ("Total de alambre a comprar "+ totalAlambreAComprar);

alert(mensaje);

}
function Circulo () 
{
    
    
    let radio
    let totalAlambreAComprar
    let mensaje
    let PI 

    PI = 3,14

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    totalAlambreAComprar = (radio * 2 * PI)* 3;

    mensaje = ("Total de alambre a comprar "+ totalAlambreAComprar);
    
    alert(mensaje);
    
	
}
function Materiales () 
{
	let ancho;
    let largo;
    let superficie;
    let totalBolsasCemento;
    let totalBolsasCal;
    let mensaje;

    largo = parseFloat(document.getElementById("txtIdLargo").value);

    ancho = parseFloat(document.getElementById("txtIdAncho").value);

    superficie = largo * ancho;

    totalBolsasCemento = superficie * 2;

    totalBolsasCal = superficie * 3;

    mensaje= ("Total de materiales para el contrapiso, - Bolsas de Cemento : " + totalBolsasCemento + " unidades " + " - Bolsas de Cal : " + totalBolsasCal + " unidades " );

    alert(mensaje);
    //podria usar una variable para cada constante de materiales

}