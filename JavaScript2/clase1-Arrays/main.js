const array1 = ["hola", "chau", "cosa", 57, true, ["pepe", 18, "loquita", true, ["no se donde estoy"]]]

const nombres = ["Guille", "Mila", "Rebeca"]
const ropa = ["Camisa", "Zapatos"]

// console.log(ropa[1])

// Acceder a loquita dentro de array 1
// console.log(array1[5][4][0][6])
// console.log(array1[0][2])
// console.log(array1[4][0])  // undefined


// console.log(nombres.length)  // length devuelve la cantidad de elementos en formato numero
// console.log(nombres[nombres.length - 1])  // Para acceder siempre al ultimo elemento
// nombres.push("Mari")
// nombres.pop()
// nombres.unshift("Mari")
// nombres.shift()

const nombreBuscado = nombres.find((element) => element === "")
console.log(nombreBuscado)



const edades = [18,57,16,35]
// const edadBuscada = edades.find((edad) => edad > 12)
// console.log(edadBuscada)

const edadesFiltradas = edades.filter((edad) => edad > 27)   
//     [57, 35]
console.log(edadesFiltradas)
console.log(edades)


