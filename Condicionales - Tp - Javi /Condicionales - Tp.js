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

/*30. Crea un bloque de codigo que reciba un numero del 1 al 1000. Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar, si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.z*/

let number1to1000 = 33;

if (
  number1to1000 >= 50 &&
  number1to1000 % 2 == 0 &&
  number1to1000 % 3 == 0 &&
  number1to1000 % 5 == 0
) {
  console.log(
    number1to1000 +
      " es mayor a 50. Es multiplo de 2, 3 y 5, al ser multiplo de dos sabemos que es par."
  );
} else if (
  number1to1000 <= 50 &&
  number1to1000 % 2 == 0 &&
  number1to1000 % 3 == 0 &&
  number1to1000 % 5 == 0
) {
  console.log(
    number1to1000 +
      " es menor a 50. Es multiplo de 2, 3 y 5, al ser multiplo de dos sabemos que es par."
  );
} else if (
  number1to1000 >= 50 &&
  number1to1000 % 2 == 0 &&
  number1to1000 % 3 == 0
) {
  console.log(
    number1to1000 +
      " es mayor a 50. Es multiplo de 2 y 3. Al ser multiplo de dos sabemos que es par."
  );
} else if (
  number1to1000 <= 50 &&
  number1to1000 % 2 == 0 &&
  number1to1000 % 3 == 0
) {
  console.log(
    number1to1000 +
      " es menor a 50. Es multiplo de 2 y 3. Al ser multiplo de dos sabemos que es par."
  );
} else if (
  number1to1000 >= 50 &&
  number1to1000 % 2 == 0 &&
  number1to1000 % 5 == 0
) {
  console.log(
    number1to1000 +
      " es mayor a 50. Es multiplo de 2 y 5.  Al ser multiplo de dos sabemos que es par."
  );
} else if (
  number1to1000 <= 50 &&
  number1to1000 % 2 == 0 &&
  number1to1000 % 5 == 0
) {
  console.log(
    number1to1000 +
      " es menor a 50. Es multiplo de 2 y 5. Al ser multiplo de dos sabemos que es par."
  );
} else if (
  number1to1000 >= 50 &&
  number1to1000 % 3 == 0 &&
  number1to1000 % 5 == 0 &&
  number1to1000 % 2 == 0
) {
  console.log(
    number1to1000 +
      " es mayor a 50. Es multiplo de 3 y 5. Cuando se divide por dos da cero entonces es par."
  );
} else if (
  number1to1000 <= 50 &&
  number1to1000 % 3 == 0 &&
  number1to1000 % 5 == 0 &&
  number1to1000 % 2 == 0
) {
  console.log(
    number1to1000 +
      " es menor a 50. Es multiplo de 3 y 5. Cuando se divide por dos no cero entonces es par."
  );
} else if (
  number1to1000 >= 50 &&
  number1to1000 % 3 == 0 &&
  number1to1000 % 5 == 0 &&
  number1to1000 % 2 !== 0
) {
  console.log(
    number1to1000 +
      " es mayor a 50. Es multiplo de 3 y 5. Cuando se divide por dos es distinto a cero entonces es impar."
  );
} else if (
  number1to1000 <= 50 &&
  number1to1000 % 3 == 0 &&
  number1to1000 % 5 == 0 &&
  number1to1000 % 2 !== 0
) {
  console.log(
    number1to1000 +
      " es menor a 50. Es multiplo de 3 y 5. Cuando se divide por dos es distinto a cero entonces es impar."
  );
} else if (number1to1000 <= 50 && number1to1000 % 2 == 0) {
  console.log(
    number1to1000 +
      " es menor a 50. Es multiplo de 2, al ser multiplo de dos sabemos que es par."
  );
} else if (number1to1000 >= 50 && number1to1000 % 2 == 0) {
  console.log(
    number1to1000 +
      " es mayor a 50. Es multiplo de 2, al ser multiplo de dos sabemos que es par."
  );
} else if (
  number1to1000 <= 50 &&
  number1to1000 % 3 == 0 &&
  number1to1000 % 2 !== 0
) {
  console.log(
    number1to1000 +
      " es menor a 50. Es multiplo de 3. Cuando se divide por dos es distinto a cero entonces es impar."
  );
} else if (
  number1to1000 >= 50 &&
  number1to1000 % 3 == 0 &&
  number1to1000 % 2 !== 0
) {
  console.log(
    number1to1000 +
      " es mayor a 50. Es multiplo de 3. Cuando se divide por dos es distinto a cero entonces es impar."
  );
} else if (
  number1to1000 <= 50 &&
  number1to1000 % 5 == 0 &&
  number1to1000 % 2 !== 0
) {
  console.log(
    number1to1000 +
      " es menor a 50. Es multiplo de 5. Cuando se divide por dos es distinto a cero entonces es impar."
  );
} else if (
  number1to1000 >= 50 &&
  number1to1000 % 5 == 0 &&
  number1to1000 % 2 !== 0
) {
  console.log(
    number1to1000 +
      " es mayor a 50. Es multiplo de 5. Cuando se divide por dos es distinto a cero entonces es impar."
  );
}

/*31. Desarrolla 10 nuevas situaciones en donde requieras de utilizar condicionales para su resolucion.*/

/*Situacion 1 Rutina del dia libre del montruo (yo)*/

let hourOfTheDay = 21;

if (hourOfTheDay >= 0 && hourOfTheDay <= 10) {
  console.log("DEJA DORMIR AL MONTRUO (YO) SON LAS " + hourOfTheDay + ".");
} else if (hourOfTheDay >= 11 && hourOfTheDay <= 13) {
  console.log(
    "Alimenta al monstruo (yo) ya son las " +
      hourOfTheDay +
      " se va a morir de hambre."
  );
} else if (hourOfTheDay >= 14 && hourOfTheDay <= 20) {
  console.log(
    "Son las " +
      hourOfTheDay +
      " el monstruo (yo) tiene que hacer algo de su vida, ya sea tarea o jugar."
  );
} else if (hourOfTheDay >= 21 && hourOfTheDay <= 22) {
  console.log(
    "Ya son las " +
      hourOfTheDay +
      ", el monstruo (yo) se necesita realimentar o se pondra de mal humor."
  );
} else if (hourOfTheDay >= 23 && hourOfTheDay <= 24) {
  console.log(
    "Como son las " + hourOfTheDay + ", el monstruo (yo) ya se va a dormir."
  );
}

/*Situacion 2  Como identificar si el montruo estuvo de malhumor. /1 para no - 0 para si/ */

let goodDay = 0;
let sleepWell = 0;
let alreadyAte = 0;

if (goodDay === 1 && sleepWell === 1 && alreadyAte === 1) {
  console.log("El montruo (yo) se descontrolo.");
} else if (goodDay === 1 && sleepWell === 1 && alreadyAte === 0) {
  console.log("El montruo (yo) se esta a punto de descontrolar.");
} else if (goodDay === 1 && sleepWell === 0 && alreadyAte === 1) {
  console.log("El montruo (yo) se esta a punto de descontrolar.");
} else if (goodDay === 0 && sleepWell === 1 && alreadyAte === 1) {
  console.log("El montruo (yo) se esta a punto de descontrolar.");
} else if (goodDay === 0 && sleepWell === 0 && alreadyAte === 1) {
  console.log("El montruo (yo) esta un poco de mal humor.");
} else if (goodDay === 0 && sleepWell === 1 && alreadyAte === 0) {
  console.log("El montruo (yo) esta un poco de mal humor.");
} else if (goodDay === 1 && sleepWell === 0 && alreadyAte === 0) {
  console.log("El montruo (yo) esta un poco de mal humor.");
} else if (goodDay === 0 && sleepWell === 0 && alreadyAte === 0) {
  console.log("El montruo (yo) hoy esta pacifico.");
}

/*Situacion 3 llueve, que hace el monstruo (yo)?*/

let itsARainyDay = "si";

if (itsARainyDay === "si") {
  console.log("Como hoy llueve el monstruo (yo) llevara paragua.");
} else if ((itsARainyDay = "no")) {
  console.log("Como hoy no llueve el monstruo (yo) no necesita paragua.");
}

/* Situacion 4 que estacion es segun el mes.*/

let month = 12;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log(
      "Es invierno y el monstruo (yo) no quiere salir de su cueva (cama)."
    );
    break;
  case 3:
  case 4:
  case 5:
    console.log(
      "Es primavera, malditos platanos (arboles) son el enemigo natural del monstruo (yo)."
    );
    break;
  case 6:
  case 7:
  case 8:
    console.log("Es verano y el pobre monstruo (yo) se incinera.");
    break;
  case 9:
  case 10:
  case 11:
    console.log("llegamos al otoÃ±o y el montruo(yo) esta en paz");
    break;
  default:
    console.log("Mes invÃ¡lido, el montruo (yo) duda de tu inteligencia");
}

/*Situacion 5 el monstruo (yo) trabaja en rappi*/

let stateDelivery = "preparando pedido";

switch (stateDelivery) {
  case "yendo al local":
    console.log("El montruo (yo) esta yendo al local del pedido.");
    break;
  case "llegada al local":
    console.log("El montruo (yo) llego al local.");
    break;
  case "preparando pedido":
    console.log(
      "No es culpa del montruo (yo) que el pedido se siga preparando."
    );
    break;
  case "el pedido ya esta listo":
    console.log("el pedido ya esta listo, pero el montruo (yo) no.");
    break;
  case "en camino":
    console.log("el montruo (yo) se aproxima a tu casa.");
    break;
  case "entregado":
    console.log("el montruo (yo) entrego el pedido. Se merece 5 estrellas.");
    break;
  default:
    console.log("El montruo (yo) descansa.");
}

/*Situacion 6 el monstruo (yo) se tiene que tomar un colectivo /1 para si - 0 para no/*/

let distance = -90;
let dayOfTheWeek1 = 0;
let socialRate = 0;
let subeSinNominalizar = 1;

if (dayOfTheWeek1 == 1) {
  console.log(
    "Monstruo (rata), se pone feliz por tener secundario, solo tendra que pagar $0,50."
  );
} else if (
  distance > 0 &&
  distance <= 3 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 1
) {
  console.log(
    "El monstruo (yo) le agarra un infarto, por no nominalizar la sube tendra que pagar $429."
  );
} else if (
  distance > 0 &&
  distance <= 3 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 0
) {
  console.log(
    "El monstruo (yo), aunque no le agrada tanto tendra que pagar $270."
  );
} else if (
  distance > 0 &&
  distance <= 3 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 1 &&
  subeSinNominalizar == 0
) {
  console.log(
    "El monstruo (yo) como tiene tarifa social tendra que pagar $121. "
  );
} else if (
  distance > 3 &&
  distance <= 6 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 1
) {
  console.log(
    "El monstruo (yo) le agarra un infarto, por no nominalizar la sube tendra que pagar $478."
  );
} else if (
  distance > 3 &&
  distance <= 6 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 0
) {
  console.log(
    "El monstruo (yo), aunque no le agrada tanto tendra que pagar $300."
  );
} else if (
  distance > 3 &&
  distance <= 6 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 1 &&
  subeSinNominalizar == 0
) {
  console.log(
    "El monstruo (yo) como tiene tarifa social tendra que pagar $135. "
  );
} else if (
  distance > 6 &&
  distance <= 12 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 1
) {
  console.log(
    "El monstruo (yo) le agarra un infarto, por no nominalizar la sube tendra que pagar $515."
  );
} else if (
  distance > 6 &&
  distance <= 12 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 0
) {
  console.log(
    "El monstruo (yo), aunque no le agrada tanto tendra que pagar $323."
  );
} else if (
  distance > 6 &&
  distance <= 12 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 1 &&
  subeSinNominalizar == 0
) {
  console.log(
    "El monstruo (yo) como tiene tarifa social tendra que pagar $145. "
  );
} else if (
  distance > 12 &&
  distance < 27 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 1
) {
  console.log(
    "El monstruo (yo) se desvanece, por no nominalizar la sube tendra que pagar $551."
  );
} else if (
  distance > 12 &&
  distance < 27 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 0
) {
  console.log("El monstruo (yo), aunque no le agrada tendra que pagar $347.");
} else if (
  distance > 12 &&
  distance < 27 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 1 &&
  subeSinNominalizar == 0
) {
  console.log(
    "El monstruo (yo) como tiene tarifa social tendra que pagar $156. "
  );
} else if (
  distance >= 27 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 1
) {
  console.log(
    "El monstruo (yo) se desvanece, por no nominalizar la sube tendra que pagar $588."
  );
} else if (
  distance >= 27 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 0 &&
  subeSinNominalizar == 0
) {
  console.log("El monstruo (yo), aunque no le agrada tendra que pagar $370.");
} else if (
  distance >= 27 &&
  dayOfTheWeek1 == 0 &&
  socialRate == 1 &&
  subeSinNominalizar == 0
) {
  console.log(
    "El monstruo (yo) como tiene tarifa social tendra que pagar $166. "
  );
} else {
  console.log("El monstruo (yo) no puede ir en negativo.");
}

/*situacion 7 el montruo (yo) tiene que ir a buscar al chucky (hermano menor) al colegio  /ocupado - ocupada - libre*/

let mom = "ocupada";
let dad = "ocupado";

let whosGoingForChucky =
  mom == "ocupada" && dad == "ocupado"
    ? "El monstruo (yo) debera salir de su cueva (cama) y ir por Chucky (hermano menor)."
    : mom == "libre" && dad == "ocupado"
    ? "Mama va a ir a buscar a Chucky (hermano menor), papa esta ocupado. El monstruo (yo) se queda en su cueva (cama)."
    : mom == "ocupada" && dad == "libre"
    ? "Papa va a ir a buscar a Chucky (hermano menor), mama esta ocupada. El monstruo (yo) se queda en su cueva (cama)."
    : mom == "libre" && dad == "libre"
    ? "Mama o papa pueden ir a buscar a Chucky (hermano menor), los dos estan libres. El monstruo se queda en su cueva (cama)."
    : "Chucky dormira en el colegio esta noche. Nadie mas puede ir a buscarlo.";

console.log(whosGoingForChucky);

/*Situacion 8 el monstruo tiene que lavar la ropa /si - no/*/

let mountainDirtyLaundry = "si";
let dirtyWhiteClothes = "si";
let dirtyColoredClothes = "si";
let dirtyBlackClothes = "si";

if (mountainDirtyLaundry == "no") {
  console.log(
    "Impresionante que no haya ropa sucia el monstruo (yo) cree que es un milagro."
  );
} else if (
  (mountainDirtyLaundry =
    "si" &&
    dirtyBlackClothes == "si" &&
    dirtyWhiteClothes == "si" &&
    dirtyColoredClothes == "si")
) {
  console.log(
    "Hay un monton de ropa sucia, la cual hay que divir por colores, blanca, de color y negra.  Es tanta que el monstruo (yo) no terminara hoy."
  );
} else if (
  (mountainDirtyLaundry =
    "si" &&
    dirtyBlackClothes == "si" &&
    dirtyWhiteClothes == "si" &&
    dirtyColoredClothes == "no")
) {
  console.log(
    "Hay una cantidad interesante de ropa sucia, la cual hay que divir por colores, blanca, y negra.  Es bastate el monstruo (yo) lavara hasta la noche."
  );
} else if (
  (mountainDirtyLaundry =
    "si" &&
    dirtyBlackClothes == "si" &&
    dirtyColoredClothes == "si" &&
    dirtyWhiteClothes == "si")
) {
  console.log(
    "Hay una cantidad interesante de ropa sucia, la cual hay que divir por colores, de color, y negra.  Es bastate el monstruo (yo) lavara hasta la noche."
  );
} else if (
  (mountainDirtyLaundry =
    "si" &&
    dirtyWhiteClothes == "si" &&
    dirtyColoredClothes == "si" &&
    dirtyBlackClothes == "si")
) {
  console.log(
    "Hay una cantidad interesante de ropa sucia, la cual hay que divir por colores, de color, y blanca.  Es bastate el monstruo (yo) lavara hasta la noche."
  );
} else if (
  (mountainDirtyLaundry =
    "si" &&
    dirtyBlackClothes == "si" &&
    dirtyWhiteClothes == "no" &&
    dirtyColoredClothes == "no")
) {
  console.log(
    "Hay ropa sucia negra.  Es  sorprendente que el monstruo (yo) no este dejando que se acumule."
  );
} else if (
  (mountainDirtyLaundry =
    "si" &&
    dirtyBlackClothes == "no" &&
    dirtyColoredClothes == "no" &&
    dirtyWhiteClothes == "si")
) {
  console.log(
    "Hay ropa sucia blanca.  Es  sorprendente que el monstruo (yo) no este dejando que se acumule."
  );
} else if (
  (mountainDirtyLaundry =
    "si" &&
    dirtyWhiteClothes == "no" &&
    dirtyColoredClothes == "si" &&
    dirtyBlackClothes == "no")
) {
  console.log(
    "Hay ropa sucia de color.  Es  sorprendente que el monstruo (yo) no este dejando que se acumule."
  );
} else {
  ("El monstruo (yo) se pregunta que clase de ropa tenes.");
}

/*situacion 9 el monstruo (yo) tiene que cocinar*/

let thereIsFoodMade = "no";
let iHaveHungry = "si";

let iHaveToCook =
  thereIsFoodMade == "no" && iHaveHungry == "si"
    ? "El monstruo (yo) tendra que cocinar"
    : thereIsFoodMade == "si" && iHaveHungry == "si"
    ? "El monstruo (yo) no tendra que cocinar. Ya hay comida"
    : iHaveHungry == "no"
    ? "El monstruo (yo) no tiene que cocinar porque no tiene hambre"
    : "No se que mas poner";

console.log(iHaveToCook);

/*situacion 10 ya me quede sin imaginacion perdon D:, elegir un tema claro o oscuro*/

let selectedTopics = "oscuro";

let message7 = selectedTopics === "oscuro" ? "tema-oscuro" : "tema-claro";
console.log(message7);
