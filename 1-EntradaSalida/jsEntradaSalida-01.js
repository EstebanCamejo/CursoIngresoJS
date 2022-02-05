/*
Esteban Camejo TP 1	"*/
function mostrar()
//alert("tomar cafe hace bien ");
/*Esteban Camejo TP 1	"*/
{
	
let nombre1;
let nombre2;
let nombre3;

let precio1;
let precio2;
let precio3;

let precioBruto;

let promedioDePrecios;

let iva
let ivaCalculado
let precioFinalMasIva

let porcentajeDeDescuento
let descuentoCalculado
let precioFinalMasIvaConDescuento

let mensaje

nombre1 = prompt("ingrese el nombre del producto 1");
precio1 = prompt("ingrese el precio de " + nombre1);
precio1 = parseInt(precio1);

nombre2 = prompt("ingrese el nombre del producto 2");
precio2 = prompt("ingrese el precio de " + nombre2);
precio2 = parseInt(precio2)

nombre3 = prompt("ingrese el nombre del producto 3");
precio3 = prompt("ingrese el precio de " + nombre3);
precio3 = parseInt(precio3)

porcentajeDeDescuento = prompt("Indique el % de descuento que desea aplicar al precio");
porcentajeDeDescuento = parseInt(porcentajeDeDescuento);

precioBruto = precio1 + precio2 + precio3;

promedioDePrecios = precioBruto/3;

iva = 21;

ivaCalculado = (precioBruto/100)* iva;

precioFinalMasIva = precioBruto + ivaCalculado;

descuentoCalculado = (precioFinalMasIva/100)* porcentajeDeDescuento;

precioFinalMasIvaConDescuento = precioFinalMasIva - descuentoCalculado;

mensaje = "Los productos con su precio son: "
mensaje = mensaje + nombre1 + " $"+ precio1 + ", ";
mensaje = mensaje + nombre2 + " $"+ precio2 + ", ";
mensaje = mensaje + nombre3 + " $"+ precio3 + ", ";
mensaje = mensaje + " El precio bruto: $" + precioBruto;
mensaje = mensaje + " El precio promedio es de $" + promedioDePrecios;
mensaje = mensaje + " El precio mas IVA: $" + precioFinalMasIva;
mensaje = mensaje + " El precio Final con el " + porcentajeDeDescuento + " % de descuento "+ precioFinalMasIvaConDescuento;

alert(mensaje);

}
