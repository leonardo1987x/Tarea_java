const prompt = require(`prompt-sync`)();
 
let edad = parseFloat(prompt("Edad: "));


if (edad <10 && edad >0){
console.log("You Are A Kid");
    } else if (edad >=11 && edad <= 17) {
        console.log("You Are A Teenager");
    } else if (edad >= 18 && edad <= 60){
        console.log("You Are An Adult");
    } else if (edad >=61 && edad <= 100){
        console.log("You Are An Old Man");
    } else{
        console.log("You Are Not A Human");
        }
    





