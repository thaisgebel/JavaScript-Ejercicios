/*1. Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame. Ejecutarla*/

function saludar(nombre) {
  console.log("Hola, mundo!" + nombre);
}
saludar("Maria");

/*2. Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.*/

function despedirse() {
  console.log("Adiós, mundo!");
}
despedirse();

/*3. Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva el cuadrado de ese número. Ejecutarla.*/

function calcularCuadrado(number) {
  console.log("El cuadrado del numero es " + number ** 2);
}
calcularCuadrado(5);

/*4. Escribir una funcion llamada minutosAHoras que reciba un número entero de minutos como parámetro, y devuelva un número representando la misma cantidad de tiempo pero en horas. */

function minutosAHoras(minutos) {
  console.log("son " + minutos / 60 + " horas.");
}
minutosAHoras(75);

/*5. Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola "Hola, " seguido del nombre.*/

function saludarPersona(name) {
  console.log("Hola, " + name + ".");
}
saludarPersona("Mengano");

/*6. Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.*/

function sumarNumeros(number, number1) {
  console.log("La suma de los numeros da " + (number + number1) + ".");
}
sumarNumeros(66, 99);

/*7. Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.*/

function multiplicarNumeros(number, number1, number2) {
  console.log("El producto es " + number * number1 * number2 + ".");
}
multiplicarNumeros(66, 20, 2);

/*8. Escribir una funcion que se llame concatenar3, que reciba 3 strings como parametros. Definir dentro de la funcion una variable que se llame separador. La funcion debe devolver un solo string, concatenando los 3 ingresados como parametro y separados por el separador. */

function concatenar3(string, string1, string2) {
  let separador = " ";
  console.log(string + separador + string1 + separador + string2 + ".");
}
concatenar3("Hoy", "dormi", "mal");

/*9. Escribir una funcion llamada promedioDeCuatroNumero, que reciba 4 numeros como parametros y devuelva el promedio de los numeros introducidos.*/

function promedioDeCuatroNumeros(number, number1, number2, number3) {
  console.log(
    "El promedio da " + (number + number1 + number2 + number3) / 4 + "."
  );
}
promedioDeCuatroNumeros(100, 1000, 10000, 100000);

/*10. Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la consola "Mi nombre es [nombre] y tengo [edad] años."*/

function presentarPersona(name, age) {
  console.log("Mi nombre es " + name + " y tengo " + age + " años.");
}
presentarPersona("Bartolo", 7);

/*11. Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.*/

function areaRectangulo(width, heigth) {
  return "El  área del rectángulo es " + width * heigth + ".";
}
/*console.log*/ let area = areaRectangulo(99, 66);
console.log(area);

/*12. Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de propina a dejar en base a cuanto salió el total de la comida. Comprobarlo asignando la función a una variable y mostrando en consola el valor de la misma. */

function calcularPropina(bill) {
  return "La propina a dejar es " + bill * 0.1 + ".";
}
let propinaDejar = calcularPropina(60000);
console.log(propinaDejar);

/*13. Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y tarifaPorHora, y devuelva el salario calculado.*/

function calcularSalario(hoursWorked, hourlyRate) {
  return "El salario es de " + hoursWorked * hourlyRate + ".";
}
let salario = calcularSalario(160, 3000);
console.log(salario);

/*14. Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal. La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio con descuento y devuelve el resultado.*/

function calcularDescuento(originalPrice) {
  let discount = 0.1;
  return (
    "El descuento es de " +
    originalPrice * discount +
    ". te queda un total de " +
    (originalPrice - originalPrice * discount) +
    "."
  );
}
let descuentoTotal = calcularDescuento(39900);
console.log(descuentoTotal);

/*15. Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver "positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.*/

function evaluarNumero(numberToEvaluate) {
  if (numberToEvaluate == 0) {
    return "El numero ingresado es 0.";
  } else if (numberToEvaluate > 0) {
    return "El numero ingresado es positivo.";
  } else {
    return "El numero ingresado es negativo.";
  }
}
let numberEvaluated = evaluarNumero(-19);
console.log(numberEvaluated);

/*16. Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver "Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.*/

function evaluarEdad(age) {
  if (age >= 18) {
    return "Es mayor de edad.";
  } else {
    return "Es menor de edad.";
  }
}
let agePerson = evaluarEdad(1);
console.log(agePerson);

/*17. Declara una función llamada esPar que acepte un número como parámetro. Si el número es par, debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".*/

function numberToEvaluate(numberToEvaluate) {
  if (numberToEvaluate % 2 == 0) {
    return "El numero es par.";
  } else {
    return "El numero es impar.";
  }
}

let numberParOdd = numberToEvaluate(20);
console.log(numberParOdd);

/*18. Declara una función llamada compararNumeros que acepte dos números como parámetros. La función debe mostrar en la consola cuál de los dos números es mayor o si son iguales.*/

function compararNumeros(number, number1) {
  if (number === number1) {
    return "Los dos numeros son " + number + ".";
  } else if (number > number1) {
    return number + " es mas grande que " + number1 + ".";
  } else {
    return number1 + " es mas grande que " + number + ".";
  }
}
let numberEvaluated1 = compararNumeros(80, 80);
console.log(numberEvaluated1);

/*19. Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe mostrar en la consola si la suma de los dos números es par o impar.*/

function sumaEsPar(number, number1) {
  let sum = number + number1;
  if (sum % 2 == 0) {
    return (
      "La suma de " + number + " y " + number1 + " da " + sum + ". Es par."
    );
  } else {
    return (
      "La suma de " + number + " y " + number1 + " da " + sum + ". Es impar."
    );
  }
}
let finalSum = sumaEsPar(8, 9);
console.log(finalSum);

/*20. Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es positivo.*/

function ambosPositivos(number, number1) {
  if (number > 0 && number1 > 0) {
    return "Tanto " + number + " como " + number1 + " son positivos.";
  } else if (number == 0 && number1 == 0) {
    return "Los dos son " + number + ". Y es un numero neutro.";
  } else if (number > 0 && number1 == 0) {
    return (
      "Solo " + number + " es positivo. " + number1 + " es un numero neutro."
    );
  } else if (number == 0 && number1 > 0) {
    return (
      "Solo " + number1 + " es positivo. " + number + " es un numero neutro."
    );
  } else if (number > 0 && number1 < 0) {
    return "Solo " + number + " es positivo. " + number1 + " es negativo.";
  } else if (number < 0 && number1 > 0) {
    return "Solo " + number1 + " es positivo. " + number + " es negativo.";
  } else {
    return "Tanto " + number + " como " + number1 + " son negativos.";
  }
}
let numberPositiveNegative = ambosPositivos(7, 0);
console.log(numberPositiveNegative);

/*21 Declara una función llamada calcularImpuesto que acepte un parámetro ingreso. Si el ingreso es menor de 10000, el impuesto es del 10%. Si es entre 10000 y 20000, el impuesto es del 15%. Si es mayor de 20000, el impuesto es del 20%. La función debe devolver el valor del impuesto.*/

function calcularImpuesto(number) {
  if (number < 10000 && number > 0) {
    return (
      "El impuesto es del 10% porque la tarifa es de " +
      number +
      " pesos. Queda en " +
      number * 0.9 +
      "."
    );
  } else if (number < 20000) {
    return (
      "El impuesto es del 15% porque la tarifa es de " +
      number +
      " pesos. Queda en " +
      number * 0.85 +
      "."
    );
  } else {
    return (
      "El impuesto es del 20% porque la tarifa es de " +
      number +
      " pesos. Queda en " +
      number * 0.8 +
      "."
    );
  }
}
let tax = calcularImpuesto(1000);
console.log(tax);

/*Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más, devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y 69, devuelve "D". Si es menor de 60, devuelve "F".*/

function clasificarNota(note) {
  if (note > 90 && note < 100) {
    return "Felicitaciones sacaste A.";
  } else if (note > 80) {
    return "Felicitaciones sacaste B.";
  } else if (note > 70) {
    return "Felicitaciones sacaste C.";
  } else if (note > 60) {
    return "Felicitaciones sacaste D";
  } else if (note > 0 && note < 60) {
    return "Nopuedeser F";
  }
}
let finalNote = clasificarNota(1);
console.log(finalNote);
