/*Ejercicio Integrador: Gestión de Pedidos de Restaurante

Imagina que estás desarrollando un sistema de gestión de pedidos para un restaurante. La función principal se llama gestionar Pedido.

Cuando sea el momento necesario:

1. Pedir el nombre del cliente (verificar que sea correcto lo ingresado, y mostrar en consola lo que el usuario ingresó)

2. Pedir la edad del cliente (verificar que sea una edad real, y mostrar en consola lo que el usuario ingresó)

3. Pedir el producto que quiere comprar (verificar que tengamos ese producto, y mostrar en consola lo que el usuario ingresó)

4. Pedir la cantidad a comprar (verificar que sea mayor a 0, y mostrar en consola lo que el usuario ingresó)

Pedir el metodo de pago (verificar y mostrar en consola lo que el usuario ingresó)

La función debe realizar las siguientes tareas (funciones):

Saludar al cliente: Mostrar un saludo personalizado.

Verificar si el cliente es mayor de edad: Si es menor de edad, advertir que no puede consumir bebidas alcohólicas.

Calcular el costo total del pedido: Multiplicar la cantidad por el precio unitario.

Aplicar un descuento: Si el cliente tiene más de 60 años, aplicar un descuento del 10%.

Determinar el método de pago: Mostrar el método de pago elegido (Efectivo, Tarjeta, o Aplicación). Si es en efectivo, tiene un 10% de descuento acumulable.

Mostrar la hora del pedido: Verificar si el pedido es durante la hora pico (entre 12:00 y 14:00). Si es hora pico, mostrar un mensaje indicando que puede haber demoras.

Calcular el valor del cubierto: Aplicar un impuesto del 5% al costo total después del descuento.

Mostrar el resumen del pedido: Usar console.log para mostrar todos los detalles del pedido, incluyendo el costo total, el descuento aplicado, el impuesto, y el costo final*/

function getHour() {
  let enterHour = window.prompt(
    "Introduci la hora en que estas realizando el pedido con los dos primeros digitos. Por ejemplo: 21 ."
  );
  return enterHour;
}
let time = getHour();

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
let peakTime = showOrderTime(time);
console.log(peakTime);

function getClientName() {
  let enterName = window.prompt("Introduci tu nombre");
  console.log("Hola " + enterName + ". Gracias por tu pedido.");
  return enterName;
}

let nameMensaggeCustomer = getClientName();

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function getClientAge() {
  let enterAge = window.prompt("Introduci tu edad");
  return enterAge;
}
let clientAge = getClientAge();

function ageIsValid(ageClientInsideFunction) {
  let ageNumber = parseFloat(ageClientInsideFunction);
  return !isNaN(ageNumber);
}
let isValidTheAge = ageIsValid(clientAge);

function canYouDrinkAlcohol(ageClientInsideFunction1) {
  if (ageClientInsideFunction1 >= 18 && ageClientInsideFunction1 <= 120) {
    return (
      "Como tenes " +
      ageClientInsideFunction1 +
      ". Podes consumir bebidas alcohólicas."
    );
  } else if (ageClientInsideFunction1 < 18 && ageClientInsideFunction1 > 0) {
    return (
      "Como tenes " +
      ageClientInsideFunction1 +
      " no podes consumir bebidas alcohólicas."
    );
  } else if (ageClientInsideFunction1 < 0 || ageClientInsideFunction1 > 120) {
    return stop;
  }
  if (isValidTheAge) {
    let drinkAlcohol = canYouDrinkAlcohol(clientAge);
    console.log(drinkAlcohol);
  } else {
    console.log("Age invalida");
  }
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

function orderItem() {
  let enterItem = window.prompt(
    "Introduci tu primer item. Disponible: hamburguesa, cerveza (+18), tequeños, coca, bastones de mozzarella "
  );
  return enterItem;
}
let item = orderItem();
console.log("Elegiste " + item + " para tu primer item.");

function orderItem1() {
  let enterItem1 = window.prompt(
    "Introduci tu segundo item. Disponible: hamburguesa, cerveza (+18), tequeños, coca, bastones de mozzarella "
  );
  return enterItem1;
}
let item1 = orderItem1();
console.log("Elegiste " + item1 + " para tu segundo item.");

function orderItem2() {
  let enterItem2 = window.prompt(
    "Introduci tu tercer item. Disponible: hamburguesa, cerveza (+18), tequeños, coca, bastones de mozzarella "
  );
  return enterItem2;
}
let item2 = orderItem2();
console.log("Elegiste " + item2 + " para tu tercer item.");

function orderAmount() {
  let enterAmount = window.prompt(
    "Introduci la cantidad de tu primer item. Maximo 20 unidades - Minimo 1."
  );
  return Number(enterAmount);
}
let amount = orderAmount();
console.log("Elegiste " + amount + " unidad/es para tu primer item.");

function orderAmount1() {
  let enterAmount1 = window.prompt(
    "Introduci la cantidad de tu segundo item. Maximo 20 unidades - Minimo 1."
  );
  return Number(enterAmount1);
}
let amount1 = orderAmount1();
console.log("Elegiste " + amount1 + " unidad/es para tu segundo item.");

function orderAmount2() {
  let enterAmount2 = window.prompt(
    "Introduci la cantidad de tu tercer item. Maximo 20 unidades - Minimo 1."
  );
  return Number(enterAmount2);
}
let amount2 = orderAmount2();
console.log("Elegiste " + amount2 + " unidad/es para tu tercer item.");

function cost(itemInsideFunction, amountInsideFunction) {
  const priceHamburguer = 12380;
  const priceCoca = 3040;
  const priceBeer = 4000;
  const priceTequeños = 6900;
  const priceMozzarellaSticks = 7900;

  switch (itemInsideFunction) {
    case "cerveza":
      if (
        clientAge >= 18 &&
        amountInsideFunction > 0 &&
        amountInsideFunction <= 20
      ) {
        return amountInsideFunction * priceBeer;
      } else {
        console.log("Age invalida, sos menor de ead");
      }
    case "coca":
      if (amountInsideFunction > 0 && amountInsideFunction <= 20) {
        return amountInsideFunction * priceCoca;
      } else {
        return 0;
      }
    case "bastones de mozzarella":
      if (amountInsideFunction > 0 && amountInsideFunction <= 20) {
        return amountInsideFunction * priceMozzarellaSticks;
      } else {
        return 0;
      }
    case "hamburguesa":
      if (amountInsideFunction > 0 && amountInsideFunction <= 20) {
        return amountInsideFunction * priceHamburguer;
      } else {
        return 0;
      }
    case "tequeños":
      if (amountInsideFunction > 0 && amountInsideFunction <= 20) {
        return amountInsideFunction * priceTequeños;
      } else {
        return 0;
      }
    default:
      window.prompt("item invalido");
      return;
  }
}

function orderCost() {
  let value = cost(item, amount);
  let value1 = cost(item1, amount1);
  let value2 = cost(item2, amount2);

  console.log("El/la/Los/las " + item + "/s te queda/n en " + value + ".");
  console.log("El/la/Los/las " + item1 + "/s te queda/n en " + value1 + ".");
  console.log("El/la/Los/las " + item2 + "/s te queda/n en " + value2 + ".");

  return value + value1 + value2;
}

let originalPrice = orderCost();

function discountAge(originalPrice) {
  if (clientAge >= 60 && clientAge <= 120) {
    let accountRetired = originalPrice * 0.9;

    console.log(
      "Tu monto a pagar es de " +
        originalPrice +
        " Como tenes " +
        clientAge +
        " se te concede un descuento del 10%. Tu cuenta quedaria en " +
        accountRetired
    );
    return accountRetired;
  } else if (clientAge > 0 && clientAge <= 59) {
    console.log("Tu cuenta queda en " + originalPrice + ".");
    return originalPrice;
  } else if (clientAge < 0 || clientAge > 120) {
    console.log("Edad invalida.");
  }
}

let discountPreRetiredOrMethodPayment = discountAge(originalPrice);

function methodPayment() {
  let enterMethod = window.prompt(
    "Introduci tu metodo de pago, tarjeta, billetera virtual o efectivo "
  );
  return enterMethod;
}
let paymentMethod = methodPayment();

function paymentTypeDiscount(method, discountPreRetiredOrMethodPayment) {
  let accountRetiredCash = discountPreRetiredOrMethodPayment * 0.9;

  if (method === "tarjeta") {
    return parseInt(discountPreRetiredOrMethodPayment);
  } else if (method === "billetera virtual") {
    return parseInt(discountPreRetiredOrMethodPayment);
  } else if (method === "efectivo") {
    console.log(
      "Como abonas con efectivo, tenes un descuento del 10%. Tu nuevo total despues de los descuentos es de " +
        parseInt(accountRetiredCash) +
        "."
    );
    return accountRetiredCash;
  }
}
let discountMethodPaymentAndPreRetired = paymentTypeDiscount(
  paymentMethod,
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

  if ((clientAge) => 60 && clientAge <= 120 && method == "Efectivo") {
    return (
      "Hay una tarifa de impuesto  que va a ser del 5%. Tu monto final es de " +
      parseInt(discountMethodPaymentAndPreRetiredTax) +
      "."
    );
  } else if (((clientAge) => 60 && clientAge <= 120) || method == "Efectivo") {
    return (
      "Hay una tarifa de impuesto  que va a ser del 5%. Tu monto final es de " +
      parseInt(discountPreRetiredOrMethodPaymentTax) +
      "."
    );
  } else if (
    (age) =>
      (0 && clientAge < 60 && method == "Tarjeta") ||
      method == "Billetera virtual"
  ) {
    return (
      "Hay una tarifa de impuesto  que va a ser del 5%. Tu monto final es de " +
      parseInt(taxPriceNoneDiscount) +
      "."
    );
  }
}
let afterTaxesTotalPrice = taxValue(
  discountMethodPaymentAndPreRetired,
  discountPreRetiredOrMethodPayment,
  originalPrice,
  paymentMethod
);
console.log(afterTaxesTotalPrice);

console.log("Muchas gracias " + nameMensaggeCustomer + " por tu compra.");
