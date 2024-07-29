/* Seccion If:

1. Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.*/

let Number1 = 15
let Number2 = 10        

if(Number1 > Number2) {
    console.log("El número A es mayor a B.")
}

/*2. Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.*/

let AgeUser = 22
let MajorityAgeArgentina= 18

if(AgeUser > MajorityAgeArgentina) {
    console.log("El usuario es mayor de edad.")
}

/*3. Crea un bloque de código que compare dos números e imprima en consola un valor booleano.*/

let AgeRaul = 21
let AgeMengano = 21

if(AgeRaul == AgeMengano) {
    console.log(true)
}

/*4. Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.*/

let Name1 = "Anais"
let Name2 = "Anais"

if(Name1 == Name2) {
    console.log("Las dos se llaman Anais.")
}

/*5. Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.*/

let Food1 = "Choripan"
let Food2 = "Morzilla "

if(Food1 != Food2) {
    console.log("Una comida es morzilla la otra choripan.")
}

/*6. Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.*/

let NegativeNumber = -10

if (NegativeNumber < 0){
    console.log ("Es un numero negativo de 10.")
}

/*7. Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.*/

let PositiveNumber = 10

if (PositiveNumber > 0) {
    console.log ("Es un numero positivo, es 10")
}

/* Seccion If…else:

8. Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.*/

let OddNumber = 7

if (OddNumber % 2 == 0) {
    console.log("El numero es par.")
}
else {console.log("El numero es impar.")}

/*9. Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.*/

let NumberComparison1 = 1
let NumberComparison2 = 0

if (NumberComparison1 < NumberComparison2) {
    console.log("El numero es negativo.")
}
else {console.log("El numero es positivo.")}

/*10. Crea una función que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.*/    /*&& y - || o*/

let Letter = "E"

/*if (Letra == "A") {
    console.log ("La letra es una vocal.")
}
else if (Letra == "E") {
    console.log ("La letra es una vocal.")
}
else if (Letra == "I") {
    console.log ("La letra es una vocal.")
}
else if (Letra == "O") {
    console.log ("La letra es una vocal.")
}
else if (Letra == "U") {
    console.log ("La letra es una vocal.")
}
else {console.log ("La letra es una consonante.")}*/

if (Letter == "A" || Letter == "E" || Letter == "I" || Letter == "O" || Letter == "U"){
    console.log ("La letra es una vocal.")
}
else {console.log ("La letra es una consonante.")}

/*11. Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.*/

let NamePedro = "Pedro"

if (NamePedro == "Luis") {
    console.log("Hola Pedro, como estas?")
}
else {console.log ("Hola! Como te llamas?")}

/*12. Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.*/

let ExamNote = 6

if (ExamNote >= 7){
    console.log("Estas aprobado.")
}
else {console.log ("Estas desaprobado.")}

/*13. Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.*/

let ReferenceNumber = 25

if (ReferenceNumber < 10){
    console.log("El numero es menor a 10.")
}
else if (ReferenceNumber > 50) {
    console.log("El numero es mayor a 50.")
}
 else {console.log("El numero vale entre 10 a 50")}

 /*14. Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.*/

 let NumberComparison3 = 67
 let NumberComparison4 = 25

 if(NumberComparison3<10 && NumberComparison4<10){
    console.log ("El multiplo es " + (NumberComparison3*NumberComparison4) + ".")
 }else if (NumberComparison3>50 && NumberComparison4>50){
    console.log ("La suma da " + (NumberComparison3+NumberComparison4) + ".")
 }
 else {console.log ("La resta da " + (NumberComparison3-NumberComparison4) + ".")}

 /*15. Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. 
Por ejemplo: 1 = ‘lunes’.*/

let Day = 4

if(Day == 1) {
    console.log("El dia es lunes")
}
else if (Day == 2) {
    console.log("El dia es martes.")
}
else if (Day == 3) {
    console.log("El dia es miercoles.")
}
else if (Day == 4) {
    console.log("El dia es jueves.")
}
else if (Day == 5) {
    console.log("El dia es viernes.")
}
else if (Day == 6) {
    console.log("El dia es sabado.")
}
else if (Day == 7) {
    console.log("El dia es domingo.")
}

/*16. Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.*/

let NumberDivision = 7

if(NumberDivision % 2 == 0 && NumberDivision % 2 == 0){
    console.log("El numero es divisible por 2 y 3.")
}
else if(NumberDivision % 2 == 0){
    console.log("El numero es divisible por 2.")
}
else if(NumberDivision % 3 == 0){
    console.log("El numero es divisible por 3.")

}
else {console.log ("No es divisible ni por 2 ni por 3.")}

/*17. Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.*/

let NumberOfTheMonth = 9

if(NumberOfTheMonth == 1) {
    console.log("El mes es Enero")
}
else if (NumberOfTheMonth == 2) {
    console.log("El mes es Febrero.")
}
else if (NumberOfTheMonth == 3) {
    console.log("El mes es Marzo.")
}
else if (NumberOfTheMonth == 4) {
    console.log("El mes es Abril.")
}
else if (NumberOfTheMonth == 5) {
    console.log("El mes es Mayo.")
}
else if (NumberOfTheMonth == 6) {
    console.log("El mes es Junio.")
}
else if(NumberOfTheMonth == 7) {
    console.log("El mes es Julio")
}
else if (NumberOfTheMonth == 8) {
    console.log("El mes es Agosto.")
}
else if (NumberOfTheMonth == 9) {
    console.log("El mes es Septiembre.")
}
else if (NumberOfTheMonth == 10) {
    console.log("El mes es Octubre.")
}
else if (NumberOfTheMonth == 11) {
    console.log("El mes es Noviembre.")
}
else if (NumberOfTheMonth == 12) {
    console.log("El mes es Diciembre.")
}

/*Seccion Switch:

18. Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.*/

let DayOfTheWeek = 5

switch (DayOfTheWeek){
    case 1: console.log ("El dia es Lunes.");
    break;
    case 2: console.log ("El dia es Martes.");
    break;
    case 3: console.log ("El dia es miercoles.");
    break;
    case 4: console.log ("El dia es jueves.");
    break;
    case 5: console.log ("El dia es viernes.");
    break;
    case 6: console.log ("El dia es sabado.");
    break;
    case 7: console.log ("El dia es domingo.");
    break;
}

/*19. Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.*/

let Gender = "M"

switch(Gender){
    case "X": console.log ("Es no Binario.")
    break;
    case "F": console.log ("Es mujer.")
    break;
    case "M": console.log ("Es hombre.")
}

/*20. Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda.*/

let Number1to10= 1

switch(Number1to10){
    case 1: console.log ("El numero es uno.");
    break;
    case 2: console.log ("El numero es dos.");
    break;
    case 3: console.log ("El numero es tres.");
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10: console.log ("El numero es mayor a tres.");
    break;
}

/*21. Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.*/

let LetterSimbol= "A"

switch (LetterSimbol){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U": console.log("Es una vocal.");
    break;

    case "!":
    case "@":
    case "#":
    case "$":
    case "%":
    case "^":
    case "&":
    case "*":
    case "(":
    case ")":
    case "-":
    case "_":
    case "=":
    case "+":
    case "[":
    case "]":
    case "{":
    case "}":
    case "?":
    case ">":
    case "<":
    case "~": console.log("Es un caracter especial");
    break;

    default: console.log("Es una consonante");
}

/*22. Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.*/

let Season = 1

switch(Season){
    case 1: console.log ("Llego el verano.");
    break;
    case 2: console.log ("Llego el otoño.");
    break;
    case 3: console.log ("Llego el invierno.");
    break;
    case 4: console.log ("Llego la primavera.");
    break;
}

/*Seccion Operador ternario:

23. Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.*/

let MajorityAge= 16

console.log (MajorityAge >= 18 ? "Es mayor de edad" : "Es menor de edad")
