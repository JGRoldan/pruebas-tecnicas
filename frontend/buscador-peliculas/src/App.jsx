import './App.css'
import { useMovies } from './hooks/useMovie'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'

function App() {
  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)
    /*const { movieName } = Object.fromEntries(new FormData(e.target))
    console.log(movieName)
    e.target.reset()*/

  }
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  console.log('render')
  return (
    <div className='page'>
      <header>
        <form autoComplete='off' className='form' onSubmit={handleSubmit}>
          <input value={search} onChange={handleSearch} type='text' placeholder='The Matrix, Avengers...' name='movieName' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
