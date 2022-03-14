//Solicitar los numeros

var num1 = prompt("Ingrese el primer número: ")
var num2 = prompt("Ingrese el segundo número: ")

//Transformando las variables um1 y num2 a numero
//num1 = Number(num1)
//num2 = Number(num2)

num1 = parseFloat(num1)
num2 = parseFloat(num2)

//document.write("Multiplicación: "+(num1*num2))

// Validando que los numeros son diferentes
if(num1 != num2){
    if(num1>0 && num2>0){
        var multiplicacion = num1*num2
        //document.write("La multiplicación es: "+multiplicacion)
        document.write(`La multiplicación es: ${multiplicacion}`)
    }
    else
    {
        alert("Los números no son mayores que cero, vuelva a ejecutar el programa")
    }
}
else
{
    alert("Los números son iguales, vuelva a ejecutar el programa")
}


// **************************************
var grados = prompt("Ingrese la temperatura en grados Celsius")

var fahrenheit = grados*(9/5) + 32

alert("Los grados fahrenheit son: "+fahrenheit)

// **************************************

var diasIniciales = prompt("Ingrese la cantidad de días a transformar") 

// Ingresando 370 dias
var agno = Math.floor(diasIniciales/365)
// 370/365 = 1.0136...  5/7
var decimal = diasIniciales/365 - agno //0.0136

var dias = decimal*365 //5 dias

var semana = Math.floor(dias/7)
// 5/7 = 0.7142...

decimal = dias/7 - semana

dias = decimal*7

document.write("<br>Años: "+agno)
document.write("<br>Semanas: "+semana)
document.write("<br>Días: "+Math.floor(dias))


// **************************************

var num1 = prompt("Ingrese el primer número")
var num2 = prompt("Ingrese el segundo número")
var num3 = prompt("Ingrese el tercer número")
var num4 = prompt("Ingrese el cuarto número")
var num5 = prompt("Ingrese el quinto número")

var suma = parseFloat(num1)+parseFloat(num2)+parseFloat(num3)+parseFloat(num4)+parseFloat(num5)

document.write("La suma de los números es: "+suma)

var promedio = suma/5

document.write("<br>El promedio es: "+promedio)