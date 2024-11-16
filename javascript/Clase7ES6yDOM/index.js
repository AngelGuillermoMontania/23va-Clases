// SCOPE
// HOISTING
// CONTEXTO DE EJECUCION




// const aux = saludar()

// function saludar() {
//   return "Hola Como va?"
// }


// function sumar(num1, num2) {
//   return num1 + num2
// }

// let aux1 = sumar(2,3)  // 5
// aux1 += 1

// let aux2 = sumar(5,5)

// console.log(aux1) // 6
// console.log(aux2) // 10

// function sumar(num1, num2) {
//   return num1 + num2
// }

// let cosa = sumar(2,3)
// cosa += 1

// console.log(cosa) // 6

// aux = sumar(6,6) 

// console.log(aux)  // 12

// const edad = 25

// function sumar() {
//   let resultado = 1
//   if(edad >= 18) {
//     resultado + 1
//   }
//   return resultado  
// }

// sumar() // 2    // 1
// sumar() // 3    // 1


/* -------------------- CAJERO ----------------------------- */

// SALDO DISPONIBLE DEL USUARIO
let saldoDisponible = 50000;

// LA CONSTRASEÑA QUE ESTA GUARDADA
const pinGuardado = "1234";

// Si el usuario escribio bien su contraseña continuar el proceso, si no, avisar que no puede
// continuar

//  FUNCION QUE HABILITA AL USUARIO A OPERAR
function autenticar() {
  const pinIngresado = prompt("Ingrese su pin")

  return pinGuardado === pinIngresado
}

function retirarDinero() {
  const montoIngresado = prompt("Ingrese el dinero a retirar")

  if(Number(montoIngresado) <= saldoDisponible) {
    saldoDisponible -= Number(montoIngresado)
  } else {
    alert("Saldo insuficiente")
  }
}

function agregarDinero() {
  const montoIngresado = prompt("Ingrese el dinero a agregar")

  if(montoIngresado > 0) {
    saldoDisponible += Number(montoIngresado)
  } else {
    alert("Operacion no valida")
  }
}

function consultarSaldo() {
  alert(`Su saldo es ${saldoDisponible}`)
}

if(autenticar()) {
  const consulta = prompt(`Que quieres hacer? Ingrese solo el numero 
    1.Retirar Dinero 
    2.Agregar Dinero
    3.Consultar Saldo`
  )
  if (consulta === "1") {
    // Retirar Dinero
    retirarDinero()
    consultarSaldo()
  } else if (consulta === "2") {
    // Agregar dinero
    agregarDinero()
    consultarSaldo()
  } else if (consulta === "3") {
    // Consultar saldo
    consultarSaldo()
  } else {
    alert("No es una opcion disponible")
  }
} else {
  alert("No se pudo autenticar")
}