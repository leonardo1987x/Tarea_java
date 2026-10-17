const prompt = require(`prompt-sync`)();
let numberA = parseFloat(prompt("Ingresa tu primer cantidad: "));
let numberB = parseFloat(prompt("ingresa tu segunda cantidad: "))
console.log(`La suma de tus cantidades es: ${numberA+numberB }
La resta de tus cantidades es: ${numberA-numberB}
La multiplicacion de tus cantidades es: ${numberA*numberB}
la division de tus cantidades es: ${numberA/numberB}`);

