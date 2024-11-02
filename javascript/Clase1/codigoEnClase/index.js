/* ---------------  console.log() ------------------ */
let edad = 27
// console.log("djhsajhdskahdsa");

/* ---------------  Tipos de datos Primitivos -----------  */

// ---- String
// "Hola! Como va? Esto es JavaScript"
// 'Hola! Como va? Esto es JavaScript'
// '99999999999999'
console.log("Hola");

// ---- Number
//  47
//  99898999959798785
console.log(32364563545654);
console.log(5456.45);
console.log(-5456.45);

// ---- Boleano
true;   // verdad
console.log(true);
false    // mentira
console.log(false);

// ---- null
null;
console.log(null);

// ---- undefined
undefined;
console.log(undefined);




// typeof
typeof 5
console.log(typeof 5)
console.log(typeof "5")
console.log(typeof true)
console.log(typeof undefined)

// --------------------  VARIABLES  ---  const, var
let saludo = "Hola!"
// 1) Declaracion
let cursada
// 2) Asignacion
cursada = "23va"
console.log(cursada) // 23va
cursada = "387va"
console.log(cursada) //387va



// ----------------- OPERADORES ARITMETICOS -----------------------
2 + 2
console.log(2 + 2)
console.log(5 - 3)
console.log(5 * 3)
let resultado = 10 / 2
console.log(resultado)
console.log(10 % 3)

// ----------------- OPERADOR DE ASIGNACION -----------------------
let fruta = "Manzanas"
fruta = "Bananas"

// ----------------- OPERADORES DE COMPARACION --------------------
//    Hace preguntas...   
// >   >=    <    <=    ==    ===    !=   !==
//   ==     NO hace comparacion de tipo de datos
console.log(5 > 3)
console.log(3 > 5)
console.log(5 > 5)
console.log(5 >= 5)
console.log(4 <= 4)

let edadPermitidaBaile = 150;
let persona1 = 32;
let persona2 = 300;

console.log(persona1 >= edadPermitidaBaile)
console.log(persona2 >= edadPermitidaBaile)


console.log(5 == '5')   // true    ///   NOOOOO SE USAAAAAA
console.log(5 === '5')   // false
