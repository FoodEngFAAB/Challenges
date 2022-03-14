//Conversión de temperaturas
//Solicita datos iniciales
alert(`${nombre}. A continuación, le pediré un dato para hacer una transformación de temperatura.`)

var tempcelsius = prompt(`${nombre}, ingrese una temperatura de interés expresada en °C:`)

//Transformación de temperatura (string) a número, dado que se ará una operación de adición
tempcelsius = parseFloat(tempcelsius)

//Conversión a Kelvin
var tempkelvin = tempcelsius + 273.15 
tempkelvin = parseFloat(tempkelvin) //requiere parseInt debido a la operación de adición

//Conversión a Fahrenheit
var tempfahrenheit = (tempcelsius*9/5)+32

document.write(`<br><br>${nombre}, los siguientes son los resultados obtenidos para la transformación de temperatura: \n ${tempcelsius}°C corresponden a ${tempfahrenheit} °F y ${tempkelvin} K.`)
