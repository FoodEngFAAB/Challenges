//Cálculo de promedio
//Solicita datos iniciales
alert(`${nombre}, ¿hagamos algo pequeñísimo de estadística? Por favor, ingrese cinco números (del dominio de números reales ya que aún no manejo imaginarios).`)

var num1=prompt(`${nombre}, ingrese el primer número:`)
var num2=prompt(`${nombre}, ingrese el segundo número:`)
var num3=prompt(`${nombre}, ingrese el tercer número:`)
var num4=prompt(`${nombre}, ingrese el cuarto número:`)
var num5=prompt(`${nombre}, ingrese el quinto número:`)

//Transformación de datos de entrada a número
num1 = parseFloat(num1)
num2 = parseFloat(num2)
num3 = parseFloat(num3)
num4 = parseFloat(num4)
num5 = parseFloat(num5)

//Cálculo de la sumatoria
var suma=num1+num2+num3+num4+num5

//Cálculo del promedio
var promedio=suma/5

document.write(`<br><br>${nombre}, los siguientes son los resultados obtenidos de estadísticas hiper-básica: \n La suma de ${num1}, ${num2}, ${num3}, ${num4}, y ${num5}, es ${suma}; y el promedio de los mismos números es de ${promedio}.`)

alert(`${nombre}, espero haber mostrado mis capacidades. \n Que tenga un buen día.`)
