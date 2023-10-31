import moviesData from '../moviesData.json'

function Metascore(metascore) {
  if (metascore >= 60) {
    return "text-green-600";
  } else if (metascore >= 50) {
    return "text-yellow-400";
  } else {
    return "text-red-600";
  }
}

function ListadoPeliculas(){
  return(
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 text-white md:p-16 text-sm gap-12 ">
  {moviesData.map((movie, index) => (
    <div key={index} className="relative group">
      <h2 className='text-xl mb-4 mt-4 '>{movie.title}</h2>
      <div className="relative rounded-lg w-96 h-96 overflow-hidden shadow-none transition-transform transform-gpu group-hover:scale-105">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black rounded-lg p-4 text-left transition-opacity opacity-0 group-hover:opacity-100">
          
          <div >
            <p className='font-bold inline-flex'>Fecha de estreno:  </p> {movie.releaseDate}
          </div> 

          <div>
            <p className='font-bold inline-flex'>Duración de la pelicula:  </p> {movie.duration}
          </div>

          <div>
            <p className='font-bold inline-flex'>Clasificación: </p> {movie.maturity}
          </div>

          <div>
            <p className='font-bold inline-flex'>Género: </p> {movie.genres}
          </div>

          <div>
            <p className='font-bold inline-flex'>Director: </p> {movie.director}
          </div>

          <div>
            <p className='font-bold inline-flex '>Actores principales: </p> {movie.mainActors}
          </div>

          <div>
            <p className='font-bold inline-flex'>Trama: </p> {movie.plot}
          </div>


          <div className="text-xl">
            <p className={Metascore(movie.metascore)}>
              {movie.metascore} Metascore
            </p>
          </div>
          <p className='text-yellow-400 inline-flex'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="16" height="16" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
            </svg> {movie.rating}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
  )
}


function App() {

  return (
    <>
<div className="sticky top-0 bg-black z-10">
  <h1 className="text-red-600 text-center text-4xl font-bold p-4">Lista de películas</h1>
</div>
      
      <h2 className='text-white text-xl text-center  font-light p-4'>Coloque el mouse sobre la imagen para ver su contenido <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hand-click"  className='inline-flex text-red-600' width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"></path>
   <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"></path>
   <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"></path>
   <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
   <path d="M5 3l-1 -1"></path>
   <path d="M4 7h-1"></path>
   <path d="M14 3l1 -1"></path>
   <path d="M15 6h1"></path>
</svg>  </h2>
      
      
      <ListadoPeliculas/>
      
    </>
  )
}

export default App
