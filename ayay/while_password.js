const prompt = require(`prompt-sync`)();
  let password = "SKIBIDI"
  let intento = prompt("ingresa la contraseña: ");
   while (intento !== password){
    console.log("GET OUT");
    intento = prompt ("ingresa de nuevo la contraseña: ")
  }
  console.log("YEEEEI");