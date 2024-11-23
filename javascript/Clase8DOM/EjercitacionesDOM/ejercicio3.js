/* Hacer un programa que al iniciarse pida mediante 
tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color.
 Los valores van del 0 al 255 y corresponden a rojo, verde y azul. */

 /* TRES PROMPTS */
/* 1. rojo */
/* 2. green */
/* 3. blue */
/* 0 al 255 */




const $body = document.querySelector("body")

function obtenerRGB() {
  const rojo = prompt("Ingrese un color del 0 al 255, RGB ROJO") 
  if(Number(rojo) > 255 || Number(rojo) < 0) {  
    alert("El numero ingresado en rojo no es un rango permitido")
    return;
  }
  const verde = prompt("Ingrese un color del 0 al 255, RGB VERDE")
  if(Number(verde) > 255 || Number(verde) < 0) {  
    alert("El numero ingresado en verde no es un rango permitido")
    return;
  }
  const azul = prompt("Ingrese un color del 0 al 255, RGB BLUE")
  if(Number(azul) > 255 || Number(azul) < 0) {  
    alert("El numero ingresado en azul no es un rango permitido")
    return;
  }

  $body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`
}

obtenerRGB()