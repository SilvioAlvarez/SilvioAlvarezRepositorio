let btnEnv = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let dato = document.getElementById("dato");
let dato1 = document.getElementById("dato1");


btnEnv.addEventListener("click", () => {
let numero : number =Number(dato.value);
let multiplo : number =Number(dato1.value);

let esMultiplo = (num:number, mult:number):number => {
 let resultado:number=0;
resultado= num%2===0;

return resultado;
}
console.log("Es divisible? ", esMultiplo(numero,multiplo));
  }
  else {
    console.log("no es divisible";  };
}
})

rotulo.innerHTML =("Ingrese el numero");
rotulo1.innerHTML =("Ingrese el exponente");

