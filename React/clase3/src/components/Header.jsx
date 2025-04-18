import chimichurri from "../assets/test.jpg"

const Header = () => {
  return <>
    <h3>Logo Empresa</h3>
    <img src={chimichurri} className="pt-4 pb-2" />
  </>
}

export default Header

/* Ahora las imagenes se importan y ya no se direccionan dentro del src */
/* React puede retornar solo de a un elemento, por ese motivo siempre necesitamos un
contenedor que englobe a los elementos que quiero retornar */
/* <></> React fragment, sirve para engañar a react como si tuviera una etiqueta */
/* {} llaves dentro del html para indicar codigo javascript (No variables, no funciones) */
/* React funcional  ---> Es el que los componentes se escriben como funciones */
/* React con clases ---> Es una forma antigua de trabajar y las primeras versiones de react */