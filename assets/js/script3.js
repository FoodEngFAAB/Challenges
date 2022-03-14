//Cálculo de desglose del año
//Solicita datos iniciales
alert(`${nombre}. ¿Traduzcamos cierta cantidad de días a años, semanas y días?`)

var diastotales = prompt(`${nombre}, ingrese una cantidad de días de su interés:`)
diastotales=parseFloat(diastotales)
var agnosaprox=diastotales/365
var agnosexact=Math.floor(agnosaprox)
var diasremanentes=agnosaprox-agnosexact
var semanasaprox=diasremanentes*365/7
var semanasexact=Math.floor(semanasaprox)
var diasdec=semanasaprox-semanasexact
var diasfinal=Math.floor(diasdec*7)

document.write(`<br><br>${nombre}, los siguientes son los resultados obtenidos del desglose de días: \n Los ${diastotales} días que ingresó, corresponden a ${agnosexact} años, ${semanasexact} semanas y ${diasfinal} días.`)


