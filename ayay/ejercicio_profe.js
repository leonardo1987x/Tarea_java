const prompt = require(`prompt-sync`)();

let A = parseFloat(prompt("ingresa la cantidad A: "))
let B = parseFloat(prompt("ingresa la cantidad B: "))
let C = parseFloat(prompt("ingresa la cantidad C: "))

if (A == B && B ==C){
console.log("los 3 son iguales");
} else if (A > B && A > C){
    console.log(`el mayor de los 3 es: ${A}`);
} else if (B > A && B > C){
    console.log(`el mayor de los 3 es: ${B}`);
} else if (C > A && C > B){
    console.log(`el mayor de los 3 es: ${C}`);
} else if (A === B){
    console.log(`los 2 numeros mas grandes son A y B`);
} else if (A === C){
    console.log(`los 2 numeros mas grandes son A y C`);
} else if (B === C){
    console.log(`los 2 numeros mas grandes son B y C`);
} 
