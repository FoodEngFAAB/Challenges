//Cálculo de operaciones básicas
//Solicita datos iniciales
alert("Hola. \n A continuación se le hará una serie preguntas que agradeceré responder. \n Las preguntas son secuenciales y las respuestas obtenidas se informan al final del proceso.")

var nombre=prompt("¿Cuál es su nombre?: ");
alert(`${nombre}. ¿Cómo está para seguir instrucciones?. \n Ingrese dos números, distintos y positivos.`)

var num1=prompt(`${nombre}, ingrese el primer número:`)
var num2=prompt(`${nombre}, ingrese el segundo número:`)

//Transformación de datos de entrada a número
num1 = parseFloat(num1)
num2 = parseFloat(num2) //Alternativa puede ser Number(num1) y Number(num2); NOTA: Number es un constructor

//Verificar que números sean positivos y diferentes
if (num1 != num2) {
    if (num1 > 0) {
        if (num2 > 0) {
            document.write(`<br><br>${nombre}, los siguientes son los resultados obtenidos para el Cálculo de Operaciones Básicas:`)
            //Cálculo de la suma
            var suma = num1 + num2
            document.write(`<br>La suma de los números ${num1} y ${num2} es: ${suma}`)
            //Cálculo de la resta
            var resta1 = num1 - num2
            var resta2 = num2 - num1
            document.write(`<br>La resta de los números ${num1} y ${num2} puede tomar dos valores: ${num1} - ${num2} = ${resta1} y ${num2} - ${num1} = ${resta2}`)
            //Cálculo de la multiplicación
            var multiplicacion = num1 * num2
            document.write(`<br>El producto de los números ${num1} y ${num2} es: ${multiplicacion}`)
            //Cálculo de la división
            var division1 = num1/num2
            var division2 = num2/num1
            document.write(`<br>La división de los números ${num1} y ${num2} puede tomar dos valores: mientras que ${num1} / ${num2} es: ${division1}, ${num2} / ${num1}  es: ${division2}`)
        } else {
            alert(`${nombre}, lea bien el encabezado. El segundo número ingresado es cero o menor que cero. \n Deberá reingresar los datos antes solicitados.`)
        }
    } else {
        alert(`${nombre}, lea bien el encabezado. El primer número ingresado es cero o menor que cero. \n Deberá reingresar los datos antes solicitados.`)
    }
} else {
    alert(`${nombre}, lea bien el encabezado. Ha ingresado dos números iguales. \n Deberá reingresar los datos antes solicitados.`)
}
