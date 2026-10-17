const prompt = require(`prompt-sync`)();

let number = parseInt(prompt("ingresa un numero:"))
if (number%3 === 0 && number%5 === 0){
    console.log("ambos son divisibles");
}
else if (number%3 === 0   ){
    console.log("tu numero se divide dentro de 3");
    }
    else if (number%5 === 0 ){
        console.log("tu numer se divide dentro de 5");
    }
    else {
        console.log("ninguno es divisible");
    }