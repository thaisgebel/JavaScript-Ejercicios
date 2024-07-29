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

 let NumberComparison3 = 50
 let NumberComparison4 = 25

 if(NumberComparison3<10 && NumberComparison4<10)