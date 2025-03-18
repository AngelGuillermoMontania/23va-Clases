let datos = []
let detallePelicula = {}

async function obtenerPopulares() {
  console.log("1")
  try {
    const { data } = await axios("https://api.themoviedb.org/3/movie/popular", {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWRmZDU4MzhmZDE2Yzk5MzZhYjYyNTYyZGFhY2UwYiIsIm5iZiI6MTcwNTcwMzUwOC45NDksInN1YiI6IjY1YWFmODU0MGM0YzE2MDBjYTdiYTY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNt7GS0ttWXcl0A5BXzXeRrdunRor2XOIq7XkhIVj-U"
      }
    })
    // dentro de data.results esta el array de peliculas
    // dentro de data tengo la cantidad de resultados
    datos = data.results
    console.log("2")
  } catch (error) {
    console.log(error)
  }
}

async function obtenerDetallePelicula(id) {
  console.log("2")
  try {
    const { data } = await axios(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWRmZDU4MzhmZDE2Yzk5MzZhYjYyNTYyZGFhY2UwYiIsIm5iZiI6MTcwNTcwMzUwOC45NDksInN1YiI6IjY1YWFmODU0MGM0YzE2MDBjYTdiYTY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNt7GS0ttWXcl0A5BXzXeRrdunRor2XOIq7XkhIVj-U"
      }
    })
    detallePelicula = data
    console.log("3")
  } catch (error) {
    console.log(error)
  }
}

export {
  obtenerPopulares,
  datos,
  obtenerDetallePelicula,
  detallePelicula
}