/*1. Declarar una variable de tipo string cuyo nombre represente de forma clara su contenido.*/

let name = "Thais"

/*2. Declarar una variable de tipo number cuyo nombre represente de forma clara su contenido.*/

let age = 18

/*3. Declarar una variable de tipo boolean cuyo nombre represente de forma clara su contenido.*/

let isHisBirthday = true

/*4. Declarar dos variables de tipo string. Luego declarar una nueva variable cuyo valor sea la concatenación de las dos variables previamente creadas. */

let food = "chicken"
let Food = "papas"
let FOOD = Food + food

console.log(FOOD)

/*5. Declarar dos variables de tipo number.
a. Luego declarar una nueva variable cuyo valor sea la suma de las dos variables previamente creadas. 
b. Luego declarar una nueva variable cuyo valor sea la resta de las dos variables previamente creadas. 
c. Luego declarar una nueva variable cuyo valor sea la multiplicación de las dos variables previamente creadas. 
d. Luego declarar una nueva variable cuyo valor sea la división de las dos variables previamente creadas. 
e. Luego declarar una nueva variable cuyo valor sea el módulo entre las dos variables previamente creadas. */

let number1 = 34
let number2 = 36

let suma = number1 + number2
console.log (suma)

let resta = number1 - number2
console.log (resta)

let multiplicacion = number1 * number2
console.log (multiplicacion)

let division = number1 / number2
console.log (division)

let modulo = number1 % number2
console.log (modulo)

/*6. Declarar una variable de tipo number y otra de tipo string. Luego sumar ambas variables y guardar su resultado en una nueva variable. De qué tipo será la tercera variable?*/

let numeroPunto6 = 18
let parrafoPunto6 = "Tengo "
let sumaPunto6 = parrafoPunto6 + numeroPunto6
console.log (typeof sumaPunto6)

/* ES DE TIPO STRING*/

/*7. Declarar una variable de tipo booleano cuyo nombre represente su valor. Luego declarar una nueva variable cuyo valor sea opuesto a la variable previamente creada.*/

let verdadero = true
let booleanofalso=  !verdadero

/* SI PONES EL SIMBOLO ! TE OTORGA EL VALOR CONTRARIO*/

/*8. Crear una variable de tipo number. 
a. Reasignar un nuevo valor a esa misma variable para que sea su valor + 1. 
b. Repetir la operación anterior utilizando una estrategia diferente
c. Repetir ambas operaciones con operadores de resta, multiplicación y división.*/

let numeroPunto7 = 2

numeroPunto7 = numeroPunto7+1
numeroPunto7 += 1

numeroPunto7 = numeroPunto7-1
numeroPunto7 -= 1

numeroPunto7 = numeroPunto7*1
numeroPunto7 *= 1

numeroPunto7 = numeroPunto7/1
numeroPunto7 /= 1

/*9. Declarar una constante e intentar reasignarle otro valor luego de su declaración. Que output recibis?*/

const consPunto9 = "Pomelo Chino"
/* consPunto9 = "Homero Chino" */

/*VM128:1 Uncaught 
TypeError: Assignment to constant variable.
    at <anonymous>:1:3*/

/*10. Crear dos variables de tipo string y dos variables de tipo number. 
a. Crear una nueva variable cuyo valor sea un string que incluya las cuatro variables previamente creadas. 
b. Repetir el punto anterior utilizando una estrategia diferente.*/

let parrafo1Punto10 = "PeludoDeMandioca "
let parrafo2Punto10 = "PeludoDeRufOnfire "

let number1Punto10 = 20
let number2Punto10 = 200

let sumaDeLas4Variables = parrafo1Punto10 + parrafo2Punto10 + number1Punto10 + number2Punto10
let sumaDeLas4Variables2 = `${ parrafo1Punto10 + parrafo2Punto10 + number1Punto10 + number2Punto10}`

console.log (sumaDeLas4Variables2)

/*11. Crear dos variables de tipo number.
a. Crear cuatro nuevas variables de tipo boolean comparando los dos valores utilizando operadores de comparación.
*/

let number1Punto11 = 100
let number2Punto11 = 90

let boolean1 = number1Punto11 === number2Punto11
console.log (boolean1)

let boolean2 = number1Punto11 !== number2Punto11
console.log (boolean2)

let boolean3 = number1Punto11 > number2Punto11
console.log (boolean3)

let boolean4 = number1Punto11 < number2Punto11 
console.log (boolean4)

/*12. Declarar cinco variables de tipo string cuyo valor contenga operaciones aritméticas. Intenta utilizar diferentes estrategias. */

let string1Punto12 = "MIRANDA ES LO MISMO QUE" + "BANDALOS CHINOS"
console.log (string1Punto12)

let string2Punto12 = ` RANDOM ${29-20}`
console.log (string2Punto12)

let string3Punto12 = `Tremendo botonera el ${ string1Punto12 + string2Punto12}`
console.log (string3Punto12)

console.log ("hola mi mama tiene " +40 )

console.log ( `${string1Punto12 + string2Punto12}`)

/*13. Crea un bloque de código que, utilizando variables con nombres representativos, calcule la cantidad de propina a dejar en un restaurante, basada en el total de la cuenta y el porcentaje de propina ingresado por el usuario.*/

let TOTALDELACUENTA = 50000 
let PROPINA = 0.1

let PROPINAADEJAR = `${TOTALDELACUENTA * PROPINA}`

console.log (PROPINAADEJAR)

/*14. Crea un bloque de código que calcule el precio final de un producto luego de aplicar un descuento.*/

let PRODUCTO = 300000
let DESCUENTO = 0.7

let PRECIOFINAL = `${PRODUCTO* DESCUENTO}`

console.log (PRECIOFINAL)

/*15. Crea un bloque de código que, tomando el año de nacimiento de una persona, devuelva su edad actual.*/

let ANONACIMIENTO = 2005
let ANOACTUAL = 2024

let EDADACTUAL = `${ANOACTUAL - ANONACIMIENTO}`

console.log (EDADACTUAL)

/*16. Crea un bloque de código que, definiendo las variables necesarias, calcule el área de un círculo, un cuadrado y un triángulo*/

let BASE= 20
let ALTURA=20
let RADIO= 10
const PI= 3.14

let AREACIRCULO= `${PI*(RADIO**2)}`
console.log (AREACIRCULO)

let AREATRIANGULO= `${(BASE*ALTURA)/2}`
console.log (AREATRIANGULO)

let AREACUADRADO= `${BASE*ALTURA}`
console.log (AREACUADRADO)
