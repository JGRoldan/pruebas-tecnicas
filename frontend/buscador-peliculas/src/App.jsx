import './App.css'
import { useMovies } from './hooks/useMovie'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useCallback, useState } from 'react'
import debounce from "just-debounce-it";

function App() {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort })


  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({search})
    }, 500)
    , []
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    /*const { movieName } = Object.fromEntries(new FormData(e.target))
    console.log(movieName)
    e.target.reset()*/
    getMovies({search})

  }
  
  const handleSearch = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  //Para ver cuantas veces se ejecuta la funcion getMovies
  // useEffect(() => {
  //   console.log('Recibe getMovies')
  // },[getMovies])

  return (
    <div className='page'>
      <header>
        <form autoComplete='off' className='form' onSubmit={handleSubmit}>
          <input value={search} onChange={handleSearch} type='text' placeholder='The Matrix, Avengers...' name='movieName' />
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>

      <main>
        { loading ? <p>Cargando...</p> : <Movies movies={movies} /> }
      </main>
    </div>
  )
}

export default App
