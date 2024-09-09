import { useState } from 'react'
import withResponseMovies from '../mocks/response.json'
import noResponseMovies from '../mocks/no-response.json'

export function useMovies({ search }){
    const [responseMovie, setResponseMovie] = useState([])
    const movies = responseMovie.Search
    const mappedMovies = movies?.map(movie =>({
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        id: movie.imdbID
      })
    )

    const getMovies = () =>{
      if(search) {
        const API_KEY = import.meta.env.VITE_API_KEY
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
          .then(response => response.json())
          .then(data => setResponseMovie(data))
          .catch(error => console.log(error))
      }
      else {setResponseMovie(noResponseMovies)}
    }

    return { movies: mappedMovies, getMovies }
}