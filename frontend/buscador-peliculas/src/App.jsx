import './App.css'
import { useMovies } from './hooks/useMovie'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useState } from 'react'

function App() {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const handleSubmit = (e) => {
    e.preventDefault()
    /*const { movieName } = Object.fromEntries(new FormData(e.target))
    console.log(movieName)
    e.target.reset()*/
    getMovies()

  }
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }

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
