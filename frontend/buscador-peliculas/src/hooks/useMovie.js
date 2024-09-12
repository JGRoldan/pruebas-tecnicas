import { useRef, useState, useMemo } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies({ search, sort }){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search) // Algo mutable que persiste entre renderizados

    const getMovies = async () =>{
        if(previousSearch.current === search) return

        try {
            setLoading(true)
            previousSearch.current = search //Antes de la llamada a la api
            const movies = await searchMovie({ search })
            setMovies(movies)
            
        } catch (e) {
            console.log(e.message)
        }finally{
            setLoading(false)
        }
    }

    //Memoiza la función(ordenar alfabeticamente) y cambia cada vez que cambien sort o movies
    const sortedMoviesMemo = useMemo(() => 
        {
            //[...movies] creo copia superficial para no modificar el array original "movies"
            sort 
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
            : movies
        }, [sort, movies]) 
    
    return { movies: sortedMoviesMemo, getMovies, loading }
}