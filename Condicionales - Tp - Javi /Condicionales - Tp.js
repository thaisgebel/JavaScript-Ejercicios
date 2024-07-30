/* Seccion If:

1. Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.*/

let number1 = 15;
let number2 = 10;

if (number1 > number2) {
  console.log("El número 1 es mayor al 2.");
}

/*2. Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.*/

let ageUser = 22;
let majorityAgeArgentina = 18;

if (ageUser > majorityAgeArgentina) {
  console.log("El usuario es mayor de edad.");
}

/*3. Crea un bloque de código que compare dos números e imprima en consola un valor booleano.*/

let ageRaul = 21;
let ageMengano = 21;

if (ageRaul === ageMengano) {
  // ===
  console.log(true);
}

/*4. Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.*/

let name1 = "Anais";
let name2 = "Anais";

if (name1 === name2) {
  // ===
  console.log("Las dos se llaman Anais.");
}

/*5. Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.*/

let food1 = "Choripan";
let food2 = "Morzilla ";

if (food1 != food2) {
  // !==
  console.log("Una comida es morzilla la otra choripan.");
}

/*6. Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.*/

let numberToEvaluate = -10;

if (numberToEvaluate < 0) {
  console.log("Es un numero negativo de 10.");
}

/*7. Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.*/

let numberToEvaluate2 = 10;

if (numberToEvaluate2 > 0) {
  console.log("Es un numero positivo, es 10");
}

/* Seccion If…else:

8. Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.*/

let numberToEvaluate3 = 7;

if (numberToEvaluate3 % 2 == 0) {
  console.log("El numero es par.");
} else {
  console.log("El numero es impar.");
}

/*9. Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.*/

let numberComparison1 = 1;
let numberComparison2 = 0;

if (numberComparison1 < numberComparison2) {
  console.log("El numero es negativo.");
} else {
  console.log("El numero es positivo.");
}

/*10. Crea una función que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.*/ /*&& y - || o*/

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

let letter = "E";

if (
  letter == "A" ||
  letter == "E" ||
  letter == "I" ||
  letter == "O" ||
  letter == "U"
) {
  console.log("La letra es una vocal.");
} else {
  console.log("La letra es una consonante.");
}

/*11. Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.*/

let namePedro = "Pedro";

if (namePedro === "Pedro") {
  console.log("Hola Pedro, como estas?");
} else {
  console.log("Hola! Como te llamas?");
}

/*12. Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.*/

let examNote = 6;

if (examNote >= 7) {
  console.log("Estas aprobado.");
} else {
  console.log("Estas desaprobado.");
}

/*13. Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.*/

let referenceNumber = 25;

if (referenceNumber < 10) {
  console.log("El numero es menor a 10.");
} else if (referenceNumber > 50) {
  console.log("El numero es mayor a 50.");
} else {
  console.log("El numero vale entre 10 a 50");
}

/*14. Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.*/

let numberComparison3 = 67;
let numberComparison4 = 25;

if (numberComparison3 < 10 && numberComparison4 < 10) {
  console.log("El multiplo es " + numberComparison3 * numberComparison4 + ".");
} else if (numberComparison3 > 50 && numberComparison4 > 50) {
  console.log("La suma da " + (numberComparison3 + numberComparison4) + ".");
} else {
  console.log("La resta da " + (numberComparison3 - numberComparison4) + ".");
}

/*15. Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. 
Por ejemplo: 1 = ‘lunes’.*/

let day = 4;

if (day == 1) {
  console.log("El dia es lunes");
} else if (day == 2) {
  console.log("El dia es martes.");
} else if (day == 3) {
  console.log("El dia es miercoles.");
} else if (day == 4) {
  console.log("El dia es jueves.");
} else if (day == 5) {
  console.log("El dia es viernes.");
} else if (day == 6) {
  console.log("El dia es sabado.");
} else if (day == 7) {
  console.log("El dia es domingo.");
}

/*16. Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno.*/

let numberDivision = 7;

if (numberDivision % 2 == 0 && NumberDivision % 2 == 0) {
  console.log("El numero es divisible por 2 y 3.");
} else if (numberDivision % 2 == 0) {
  console.log("El numero es divisible por 2.");
} else if (numberDivision % 3 == 0) {
  console.log("El numero es divisible por 3.");
} else {
  console.log("No es divisible ni por 2 ni por 3.");
}

/*17. Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.*/

let numberOfTheMonth = 9;

if (numberOfTheMonth == 1) {
  console.log("El mes es Enero");
} else if (numberOfTheMonth == 2) {
  console.log("El mes es Febrero.");
} else if (numberOfTheMonth == 3) {
  console.log("El mes es Marzo.");
} else if (numberOfTheMonth == 4) {
  console.log("El mes es Abril.");
} else if (numberOfTheMonth == 5) {
  console.log("El mes es Mayo.");
} else if (numberOfTheMonth == 6) {
  console.log("El mes es Junio.");
} else if (numberOfTheMonth == 7) {
  console.log("El mes es Julio");
} else if (numberOfTheMonth == 8) {
  console.log("El mes es Agosto.");
} else if (numberOfTheMonth == 9) {
  console.log("El mes es Septiembre.");
} else if (numberOfTheMonth == 10) {
  console.log("El mes es Octubre.");
} else if (numberOfTheMonth == 11) {
  console.log("El mes es Noviembre.");
} else if (numberOfTheMonth == 12) {
  console.log("El mes es Diciembre.");
}

/*Seccion Switch:

18. Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.*/

let dayOfTheWeek = 5;

switch (dayOfTheWeek) {
  case 1:
    console.log("El dia es Lunes.");
    break;
  case 2:
    console.log("El dia es Martes.");
    break;
  case 3:
    console.log("El dia es miercoles.");
    break;
  case 4:
    console.log("El dia es jueves.");
    break;
  case 5:
    console.log("El dia es viernes.");
    break;
  case 6:
    console.log("El dia es sabado.");
    break;
  case 7:
    console.log("El dia es domingo.");
    break;
}

/*19. Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.*/

let gender = "M";

switch (gender) {
  case "X":
    console.log("Es no Binario.");
    break;
  case "F":
    console.log("Es mujer.");
    break;
  case "M":
    console.log("Es hombre.");
}

/*20. Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda.*/

let number1to10 = 1;

switch (number1to10) {
  case 1:
    console.log("El numero es uno.");
    break;
  case 2:
    console.log("El numero es dos.");
    break;
  case 3:
    console.log("El numero es tres.");
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("El numero es mayor a tres.");
    break;
}

/*21. Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.*/

let letterSimbol = "A";

switch (letterSimbol) {
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log("Es una vocal.");
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
  case "~":
    console.log("Es un caracter especial");
    break;

  default:
    console.log("Es una consonante");
}

/*22. Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.*/

let season = 1;

switch (season) {
  case 1:
    console.log("Llego el verano.");
    break;
  case 2:
    console.log("Llego el otoño.");
    break;
  case 3:
    console.log("Llego el invierno.");
    break;
  case 4:
    console.log("Llego la primavera.");
    break;
}

/*Seccion Operador ternario:

23. Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.*/

let majorityAge = 19;

let message = majorityAge >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(message);

/*condicion ? "condicion es true" : "condicion es false"
console.log(majorityAge >= 18 ? "Bloque donde la condicion es true" : "Bloque donde la condicion es false")*/

/*24. Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.*/

let parNumber = 11;

let message1 = parNumber % 2 == 0 ? "El numero es par" : "El numero es impar";
console.log(message1);

/*25. Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor. Luego imprime en consola el resultado.*/

let referenceNumber2 = 90;
let referenceNumber3 = 1000;

let message2 =
  referenceNumber2 > referenceNumber3
    ? referenceNumber2 + " es mas grande que " + referenceNumber3 + "."
    : referenceNumber2 + " es mas chico que " + referenceNumber3 + ".";
console.log(message2);

/*26. Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador ternario para imprimir en consola el día de la semana correspondiente.*/

let days = 5;

let message3 =
  days === 1
    ? "Es lunes."
    : days === 2
    ? "Es martes."
    : days === 3
    ? "Es miercoles."
    : days === 4
    ? "Es jueves."
    : days === 5
    ? "Es viernes."
    : days === 6
    ? "Es sabado."
    : days === 7
    ? "Es domingo."
    : "No concuerda.";
console.log(message3);

/*27. Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.*/

let numberToEvaluate4 = 0;

let message4 =
  numberToEvaluate4 === 0
    ? "El numero ingresado es cero."
    : numberToEvaluate4 > 0
    ? "El numero ingresado es positivo"
    : "El numero ingresado es negativo";
console.log(message4);

/*28. Crea un bloque de código que tome de referencia un número del 1 al 100 y utilice el operador ternario para determinar si es múltiplo de 3 y 5 para imprimir el resultado en consola.*/

let number1to100 = 100;

let message5 =
  number1to100 % 3 == 0 && number1to100 % 5 == 0
    ? "El numero ingresado es multiplo de 3 y 5."
    : number1to100 % 3 == 0
    ? "El numero ingresado es multiplo de 3."
    : number1to100 % 5 == 0
    ? "El numero ingresado es multiplo de 5"
    : "el numero ingresado no es multiplo ni de 3 ni de 5.";
console.log(message5);

/*Seccion Prácticas: 

29. Crea un bloque de código que tome de referencia un número del 1 al 100 y, utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 incluyendo las diferentes combinaciones posibles.*/

let message6 =
  number1to100 % 2 == 0 && number1to100 % 3 == 0 && number1to100 % 5 == 0
    ? "El numero ingresado es multiplo de 2, 3 y 5."
    : number1to100 % 2 == 0 && number1to100 % 3 == 0
    ? "El numero ingresado es multiplo de 2 y 3."
    : number1to100 % 2 == 0 && number1to100 % 5 == 0
    ? "El numero ingresado es multiplo de 2 y 5."
    : number1to100 % 3 == 0 && number1to100 % 5 == 0
    ? "El numero ingresado es multiplo de 3 y 5."
    : number1to100 % 2 == 0
    ? "El numero ingresado es multiplo de 2"
    : number1to100 % 3 == 0
    ? "El numero ingresado es multiplo de 3"
    : number1to100 % 5 == 0
    ? "El numero ingresado es multiplo de 5"
    : "el numero ingresado no es multiplo ni de 2 ni de 3 ni de 5.";
console.log(message6);
