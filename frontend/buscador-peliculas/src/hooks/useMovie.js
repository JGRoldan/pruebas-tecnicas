import responseMovies from '../mocks/response.json'
import noResponseMovies from '../mocks/no-response.json'

export function useMovies(){
    const movies = responseMovies.Search
    
    const mappedMovies = movies.map(movie =>({
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        id: movie.imdbID
      })
    )
    return { movies: mappedMovies }
}