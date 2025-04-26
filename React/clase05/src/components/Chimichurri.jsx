import {PacmanLoader} from "react-spinners"

export default function Chimichurri() {

  const data = []

  return<>
    {
      data.length == 0 ? <PacmanLoader color="#F3F5A3" /> : <div>
        <h1>Hola</h1>
      </div>
    }
  </>
}
