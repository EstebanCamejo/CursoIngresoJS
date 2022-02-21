/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let fahrenheitCentigrados;
	let mensaje;


    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    fahrenheitCentigrados = (temperatura - 32)/1,8;
    mensaje = temperatura + " Fahrenheit son " + fahrenheitCentigrados + " centígrados";

    alert(mensaje);
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let centigradoFahrenheit; 
    let mensaje;
    
    temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    centigradoFahrenheit = (temperatura + 32)*1,8;
    mensaje = temperatura + " centígrados son " + centigradoFahrenheit + " Fahrenheit ";
    
    alert(mensaje);


}
