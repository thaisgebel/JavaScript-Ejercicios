/*Ejercicio Integrador: Gestión de Pedidos de Restaurante

Imagina que estás desarrollando un sistema de gestión de pedidos para un restaurante. La función principal se llama gestionarPedido.

La función debe realizar las siguientes tareas (funciones):

1. Saludar al cliente: Mostrar un saludo personalizado.
2. Verificar si el cliente es mayor de edad: Si es menor de edad, advertir que no puede consumir bebidas alcohólicas.
3. Calcular el costo total del pedido: Multiplicar la cantidad por el precio unitario.
4. Aplicar un descuento: Si el cliente tiene más de 60 años, aplicar un descuento del 10%.
5. Determinar el método de pago: Mostrar el método de pago elegido (Efectivo, Tarjeta, o Aplicación). Si es en efectivo, tiene un 10% de descuento acumulable.
6. Mostrar la hora del pedido: Verificar si el pedido es durante la hora pico (entre 12:00 y 14:00). Si es hora pico, mostrar un mensaje indicando que puede haber demoras.
7. Calcular el valor del cubierto: Aplicar un impuesto del 5% al costo total después del descuento.
8. Mostrar el resumen del pedido: Usar console.log para mostrar todos los detalles del pedido, incluyendo el costo total, el descuento aplicado, el impuesto, y el costo final.*/
let age = 70;
let method = "Efectivo";

function greetCustomer(name) {
  return "Hola " + name + ". Gracias por tu compra.";
}
let customerName = greetCustomer("Marisol");
console.log(customerName);

function clientAge(age) {
  if (age >= 18 && age <= 120) {
    return "Como tenes " + age + ".  Podes consumir bebidas alcohólicas.";
  } else if (age < 18 && age > 0) {
    return "Como tenes " + age + " no podes consumir bebidas alcohólicas.";
  } else if (age < 0) {
    return "Numero invalido. No sabia que podias tener una edad negativa:)";
  } else {
    return "Numero invalido. Tenes mas de 120????.";
  }
}
let ageOfTheClient = clientAge(age);
console.log(ageOfTheClient);

function orderCost(item, item1, item2, amount, amount1, amount2) {
  let priceHamburguer = 12380;
  let priceCoca = 3040;
  let priceBeer = 4000;
  let priceTequeños = 6900;
  let priceMozzarellaSticks = 7900;

  if (item === "Hamburguesa" && item1 === "Coca" && item2 === "Tequeños") {
    return (
      amount * priceHamburguer + amount1 * priceCoca + amount2 * priceTequeños
    );
  } else if (
    item === "Hamburguesa" &&
    item1 === "Coca" &&
    item2 === "Bastones de mozzarella"
  ) {
    return (
      amount * priceHamburguer +
      amount1 * priceCoca +
      amount2 * priceMozzarellaSticks
    );
  } else if (
    item === "Hamburguesa" &&
    item1 === "Cerveza" &&
    item2 === "Tequeños"
  ) {
    return (
      amount * priceHamburguer + amount1 * priceBeer + amount2 * priceTequeños
    );
  } else if (
    item === "Hamburguesa" &&
    item1 === "Cerveza" &&
    item2 === "Bastones de mozzarella"
  ) {
    return (
      amount * priceHamburguer +
      amount1 * priceBeer +
      amount2 * priceMozzarellaSticks
    );
  }
}

let originalPrice = orderCost("Hamburguesa", "Cerveza", "Tequeños", 1, 3, 1);
console.log("El costo total del pedido quedaria en " + originalPrice + ".");

function discountAge(originalPrice, age) {
  if (age >= 60 && age <= 120) {
    let accountRetired = originalPrice * 0.9;

    console.log(
      "Tu cuenta final es de " +
        originalPrice +
        " como tenes " +
        age +
        " se te concede un descuento del 10%. Tu nuevo total seria " +
        accountRetired
    );
    return accountRetired;
  } else if (age > 0 && age <= 59) {
    console.log(
      "Tu cuenta final es de " +
        originalPrice +
        ". Como tenes " +
        age +
        " no se te concede ningun descuento."
    );
    return originalPrice;
  } else if (age < 0) {
    console.log(
      "Numero invalido. No sabia que podias tener una edad negativa:)"
    );
  } else {
    console.log("Numero invalido. Tenes mas de 120????.");
  }
}
let discountPreRetiredOrMethodPayment = discountAge(originalPrice, age);

function paymentTypeDiscount(method, discountPreRetiredOrMethodPayment) {
  let accountRetiredCash = discountPreRetiredOrMethodPayment * 0.9;

  if (method === "Tarjeta") {
    console.log(
      "Tu total es de " +
        discountPreRetiredOrMethodPayment +
        ". Como abonas con tarjeta, no hay ningun descuento."
    );
    return discountPreRetiredOrMethodPayment;
  } else if (method === "Billetera virtual") {
    console.log(
      "Tu total es de " +
        discountPreRetiredOrMethodPayment +
        ". Como abonas con billetera virtual, no hay ningun descuento."
    );
    return discountPreRetiredOrMethodPayment;
  } else if (method === "Efectivo") {
    console.log(
      "Tu total es de " +
        discountPreRetiredOrMethodPayment +
        ". Como abonas con efectivo, tenes un descuento del 10%. Tu nuevo total despues de los descuentos es de " +
        accountRetiredCash +
        "."
    );
    return accountRetiredCash;
  }
}
let discountMethodPaymentAndPreRetired = paymentTypeDiscount(
  method,
  discountPreRetiredOrMethodPayment
);

function taxValue(
  discountMethodPaymentAndPreRetired,
  discountPreRetiredOrMethodPayment,
  originalPrice,
  method
) {
  let tax = 0.05;

  let taxPriceNoneDiscount = originalPrice + originalPrice * tax;

  let discountPreRetiredOrMethodPaymentTax =
    discountPreRetiredOrMethodPayment + discountPreRetiredOrMethodPayment * tax;

  let discountMethodPaymentAndPreRetiredTax =
    discountMethodPaymentAndPreRetired +
    discountMethodPaymentAndPreRetired * tax;

  if ((age) => 60 && age <= 120 && method == "Efectivo") {
    return (
      "La tarifa de impuesto va a ser del 5% tu nuevo monto final es de " +
      discountMethodPaymentAndPreRetiredTax +
      "."
    );
  } else if ((age) => (60 && age <= 120) || method == "Efectivo") {
    return (
      "La tarifa de impuesto va a ser del 5% tu nuevo monto final es de " +
      discountPreRetiredOrMethodPaymentTax +
      "."
    );
  } else if (
    (age) =>
      (0 && age < 60 && method == "Tarjeta") || method == "Billetera virtual"
  ) {
    return (
      "La tarifa de impuesto va a ser del 5% tu nuevo monto final es de " +
      taxPriceNoneDiscount +
      "."
    );
  }
}
let afterTaxesTotalPrice = taxValue(
  discountMethodPaymentAndPreRetired,
  discountPreRetiredOrMethodPayment,
  originalPrice,
  age,
  method
);
console.log(afterTaxesTotalPrice);

function showOrderTime(time) {
  if (time >= 12 && time <= 14) {
    return (
      "Como son las " +
      time +
      " y es horario pico puede haber demoras en el pedido."
    );
  } else if (time >= 15 && time <= 24) {
    return (
      "Como son las " +
      time +
      " y no es horario pico el pedido saldra sin demoras."
    );
  } else if (time >= 0 && time <= 8) {
    return "Como son las " + time + " Todavia no hay delivery.";
  } else if (time < 0) {
    return "No sabia que existia un horario negativo.";
  } else {
    return "No sabia que existia esa hora.";
  }
}
let peakTime = showOrderTime(23);
console.log(peakTime);
