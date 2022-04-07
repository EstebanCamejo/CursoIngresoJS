function mostrar()
{
  //alert("dos");


  // datos hasta que el cliuente quiera WHILE
  /*Tipo validad("arena";"cal";"cemento")
    Cantidad de bolsas,
    Precio por bolsa (más de cero ),
    Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
    Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
    a) El importe total a pagar , bruto sin descuento y...
    b) el importe total a pagar con descuento(solo si corresponde)
    d) Informar el tipo con mas cantidad de bolsas.
    f) El tipo mas caro*/
    


    let producto;
    let cantidad;
    let precio;

    let acumArena = 0;
    let acumCal = 0;
    let acumCemento = 0;

    let acumBolsas;

    let totalPrecioArena = 0;
    let totalPrecioCal = 0;
    let totalPrecioCemento = 0;

    let decuentoMasDiez = 0;
    let descuentoMasTreinta = 0;


    let promedioCal;
    let promedioArena;
    let promedioCemento;

    let totalBruto;
  //  let totalConDescuento;
    let totalAPagar;

    let tipoMasBolsas;
    let tipoMasCaro;

    let seguir;


    do{
      producto = prompt("Por favor ingresar un producto : arena, cal o cemento.");
      while (producto != "arena" && producto != "cal" && producto != "cemento"){

        producto = prompt("Error. Por favor ingresar un producto : arena, cal o cemento.");
      }

      cantidad = parseInt(prompt("Por favor ingrese la cantidad deseada."));
      while (isNaN(cantidad) == true || cantidad<0){

        cantidad = parseInt(prompt("Error. Por favor ingrese la cantidad deseada."));
      }

      precio = parseInt(prompt("Por favor ingrese el precio del producto."));
      while (isNaN (precio) == true || precio<0 ){

        precio = parseInt(prompt("Error. Por favor ingrese el precio del producto."));
      }
  
      switch (producto){
        case "arena":
          acumArena = acumArena + cantidad;
          totalPrecioArena = acumArena * precio;
          promedioArena = totalPrecioArena/acumArena;
          break;

        case "cal":
          acumCal = acumCal + cantidad;
          totalPrecioCal = acumCal * precio;
          promedioCal = totalPrecioCal/acumCal; 
          break;

        case "cemento":
          acumCemento = acumCemento + cantidad;
          totalPrecioCemento = acumCemento * precio;
          promedioCemento = totalPrecioCemento/acumCemento;
          break;
      } 

      
      seguir = prompt(" desea seguir ingresando productos? s/n");

    }while (seguir =="s");
     
    totalBruto = totalPrecioArena + totalPrecioCal + totalPrecioCemento;
          
    acumBolsas = acumArena + acumCal + acumCemento;

    if (acumBolsas>30){
      descuentoMasTreinta = totalBruto - totalBruto*30/100;
      totalAPagar = descuentoMasTreinta;     
    }
    else if(acumBolsas>10 && acumBolsas<30){
      decuentoMasDiez = totalBruto - totalBruto*10/100;
      totalAPagar = decuentoMasDiez; 
    }
    else{
      totalAPagar = totalBruto + "No corresponde decuento";
    }
    

    if(acumArena>acumCal && acumArena>acumCemento ){
      tipoMasBolsas = "Arena";
    }
    else if (acumCal>acumArena && acumCal >=acumCemento){
      tipoMasBolsas = "Cal";
    }
    else {
      tipoMasBolsas = "Cemento"; 
    }
    

    if(promedioArena>promedioCal && promedioArena>promedioCemento){
      tipoMasCaro =  "Arena";
    }
    else if(promedioCal>promedioArena && promedioCal>= promedioCemento){
      tipoMasCaro = "Cal";
    }
    else {
      tipoMasCaro = "Cemento";
      }

    



  

    mensaje1 = " A - El importe total a pagar , bruto sin descuento es de " +totalBruto;
    mensaje2 = " B - El importe total a pagar con descuento es " + totalAPagar;
    mensaje3 = " D - El tipo con mas cantidad de bolsas es " + tipoMasBolsas;
    mensaje4 = " F - El tipo mas caro es " + tipoMasCaro;


    alert(mensaje1+mensaje2+mensaje3+mensaje4);
}
