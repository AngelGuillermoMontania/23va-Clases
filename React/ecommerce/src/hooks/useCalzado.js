import { useState } from "react"

import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"
import db from "../../fireStoreConfig.js"
import Swal from "sweetalert2"


function useCalzado() {

  const [listCalzado, setListCalzado] = useState([])
  const [oneCalzado, setOneCalzado] = useState({})

  function getCalzados(arg) {
    const getAllCalzados = async () => {
      try {
        const calzadosRef = collection(db, 'Calzado');
        const snapshot = await getDocs(calzadosRef);
        let aux = [];
        snapshot.forEach(doc => {
          aux.push({id: doc.id, ...doc.data()});
        });
        console.log(aux)
        setListCalzado(aux)
      } catch (error) {
        console.log(error)
      }
    }
    const getCalzadosByCategory = async () => {
      try {
        const q = query(collection(db, "Calzado"), where("categoria", "==", arg));
  
        const querySnapshot = await getDocs(q);
        let aux = [];
        querySnapshot.forEach((doc) => {
          aux.push({id: doc.id, ...doc.data()})
        });
        setListCalzado(aux)
      } catch (error) {
        console.log(error)
      }
    }
    if(arg) {
      getCalzadosByCategory()
    } else {
      getAllCalzados()
    }
  }

  async function obtenerCalzado(id) {
    try {
      const documentoRef = doc(db, "Calzado", id);
      const docCalzado = await getDoc(documentoRef);

      if (docCalzado.exists()) {
        setOneCalzado(docCalzado.data())
      } else {
        Swal.fire({
          title: "No existe el calzado",
          icon: "error",
          timer: 3000,
          showCancelButton: false,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    getCalzados,
    listCalzado,
    obtenerCalzado,
    oneCalzado
  }
}

export default useCalzado