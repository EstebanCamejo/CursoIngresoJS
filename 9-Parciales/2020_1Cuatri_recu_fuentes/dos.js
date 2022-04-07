function mostrar()
{

  /*Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, 
  hasta que el cliente quiera:
  Tipo validad("arena";"cal";"cemento")
  Cantidad de bolsas,
  Precio por bolsa (más de cero ),
  al terminar la compra el cliente accede a un descuento segun las bolsas en total
  Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
  f) El tipo mas caro*/
  //alert("dos");


  let seguir;
  let producto;
  let cantidad;
  let precio;

  let totalBruto = 0;
  let totalConDescuento = 0;

  let acumArena = 0;
  let acumCal = 0;
  let acumCemento = 0;

  let contArena = 0;
  let contCal = 0;
  let contCemento = 0;

  let totalAcum = 0;
  let mayorAcum = 0;

  let totalaPagarArena = 0;
  let totalaPagarCemento = 0;
  let totalaPagarCal = 0;

  let totalPromedioArena = 0;
  let totalPromedioCal = 0;
  let totalPromedioCemento = 0;

  let productoMasCaro;

  do{

    producto = prompt ("Ingrese alguno de los siguientes productos: arena, cal o cemento ");
    while (producto != "arena" && producto != "cal" && producto != "cemento"){

      producto = prompt ("Error. Ingrese alguno de los siguientes productos: arena, cal o cemento ")

    }
    cantidad = parseInt(prompt ("ingrese la cantidad de unidades"));
    while (isNaN(cantidad)== true || cantidad<0){

      cantidad = parseInt(prompt ("Error. ingrese la cantidad de unidades"));

    }
    precio = parseFloat(prompt("Ingrese el precio unitario por bolsa"));   
    while (isNaN(precio)== true || precio<0){

      precio =  parseFloat(prompt("Error. Ingrese el precio unitario por bolsa"));

    }
    switch (producto){
      case "arena":
        acumArena = acumArena + cantidad;
        contArena++;
        totalaPagarArena = acumArena * precio;
        totalPromedioArena = totalaPagarArena/acumArena;
        break;
      case "cal":
        acumCal = acumCal + cantidad;
        contCal++;
        totalaPagarCal = acumCal * precio;
        totalPromedioCal = totalaPagarCal / acumCal;
        break;
      case "cemento":
        acumCemento = acumCemento + cantidad;
        contCemento++;
        totalaPagarCemento = acumCemento * precio;
        totalPromedioCemento = totalaPagarCemento/acumCemento;
        break;

    }
    seguir = prompt("Desea seguir ingresando productos? s/n");
  } while (seguir == "s");


  if(acumArena>acumCal && acumArena>acumCemento ){
    mayorAcum = "Arena";
  }
  else if (acumCal>acumArena && acumCal>=acumCemento ){
    mayorAcum = "Cal";
  }
  else {
    mayorAcum = "Cemento";
  }

  totalAcum = acumArena + acumCal + acumCemento;
  totalBruto = totalaPagarArena + totalaPagarCemento + totalaPagarCal;
  

  if (totalAcum>30){

    totalConDescuento = totalBruto - totalBruto * 25/100;
    totalFinal = totalConDescuento;

  }
  else if (totalAcum<30 && totalAcum>10){

    totalConDescuento = totalBruto - totalBruto * 15/100;
    totalFinal = totalConDescuento;

  }
  else {
    totalFinal = totalBruto + "(no tiene descuento).";
  }  

  if (totalPromedioArena>totalPromedioCal && totalPromedioArena> totalPromedioCemento){
    productoMasCaro = "Arena";
  }
  else if (totalPromedioCal>totalPromedioArena && totalPromedioCal>=totalPromedioCemento){
    productoMasCaro = "Cal";
  }
  else{
    productoMasCaro = "Cemento";
  } 
  

  mensaje1 ="A - El importe total a pagar , bruto es de " + totalBruto;
  mensaje2 =" B - El importe total a pagar con descuento es de " + totalFinal;
  mensaje3 =" D - El producto con mas bolsas en total es " + mayorAcum;
  mensaje4 =" F - El tipo de producto mas caro es " + productoMasCaro;

  alert (mensaje1 + mensaje2 + mensaje3 + mensaje4);
} /*a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/
