const numero2: number = 55;
let nombre1: string = "Pepe";
const vivo2: boolean = true;
const undef2: undefined = undefined
const null2: null = null
const edades2: Array<number> = []
const nombres2: Array<string> = ["Guille", "Violeta"]
let cosa2: string | number = "Guille"
cosa2 = 32


let edad2: null | number = null
edad2 = 32
const cosas2: Array<string | number> = ["Sarten", "Pelotita", 2]

function saludar2(): string {
  return "Hola"
}

function saludar4(nombre: string): string {
  return `Hola ${nombre}`
}

saludar4("true")

function ejemplo2(numero: number): void {
  const suma = 2 + numero
}

function ejemplo4(numero?: number): void {
  if(numero) {
    const suma = 2 + numero
  } else {
    const suma = 2
  }
}

const cosita2: any = "Hola"

interface Persona {
  id: number,
  nombre: string,
  edad: number,
  vivo: boolean,
  profesiones: Array<string>,
  saludar: Function
}

const guille: Persona = {
  id: 1,
  profesiones: ["Programador", "Constantemente Resfriado"],
  nombre: "Guille",
  edad: 32,
  vivo: true,
  saludar: () => "Hola"
}