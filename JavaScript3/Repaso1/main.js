// SOLUCION 1: Promise.all()
// async function obtenerPersonajes() {
//   try {
//     const { data } = await axios("https://rickandmortyapi.com/api/character/1")
//     // pintarDetallePersonaje(data)
//     // data.episode
//     const arrayPromises = data.episode.map(elem => axios(elem))
//     const response = await Promise.all(arrayPromises)
//     const arrayDetailEpisode = response.map(elem => elem.data)
//     console.log(arrayDetailEpisode)
//   } catch (error) {
//     console.log(error)
//   }
// }

// async function obtenerEpisode() {
//   try {
//     const { data } = await axios("https://rickandmortyapi.com/api/episode/3")
//     // pintarDetalleEpisode(data)
//     // data.character
//     const arrayPromises = data.character.map(elem => axios(elem))
//     const response = await Promise.all(arrayPromises)
//   } catch (error) {
//     console.log(error)
//   }
// }



// SOLUCION 2: forof
let arrayEpisodes = []
async function obtenerPersonajes() {
  try {
    const { data } = await axios("https://rickandmortyapi.com/api/character/1")
    // pintarDetallePersonaje(data)
    for (const element of data.episode) {
      try {
        const { data } = await axios(element)
        arrayEpisodes.push(data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(arrayEpisodes)
  } catch (error) {
    console.log(error)
  }
}