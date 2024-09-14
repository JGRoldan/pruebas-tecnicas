
export const searchMovie = async ({ search }) =>{
    if(search === '') return null
    
    try {
        const API_KEY = import.meta.env.VITE_API_KEY
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        
        const movies = json.Search
        
        return movies?.map(movie =>({
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
            id: movie.imdbID
          })
        )
    } catch (e) {
        throw new Error('Error fetching movies')
    }
}