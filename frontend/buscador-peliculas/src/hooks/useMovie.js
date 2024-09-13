import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies({ search, sort }){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search) // Algo mutable que persiste entre renderizados
    
    const getMovies = useCallback(async ({search}) =>{
        if(previousSearch.current === search) return
        
        try {
            setLoading(true)
            previousSearch.current = search //Antes de la llamada a la api
            const newMovies = await searchMovie({ search })
            setMovies(newMovies)            
        } catch (e) {
            console.log(e.message)
        }finally{
            setLoading(false)
        }
    }, [])

    //Al pasar el search como parametro, se ejecuta la función getMovies 1 vez
    //Esto evita que si se escribe una nueva letra en el input, se ejecute la función getMovies
    /*const getMovies = useMemo(() => {
        return async ({search}) =>{
            if(previousSearch.current === search) return
        
            try {
                setLoading(true)
                previousSearch.current = search //Antes de la llamada a la api
                const newMovies = await searchMovie({ search })
                setMovies(newMovies)
                
            } catch (e) {
                console.log(e.message)
            }finally{
                setLoading(false)
            }
        }
    }, []) */

    
    //Memoiza la función(ordenar alfabeticamente) y cambia cada vez que cambien sort o movies
    //[...movies] creo copia superficial para no modificar el array original "movies"
    const sortedMoviesMemo = useMemo(() => {
        return  sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
            : movies
        }, [sort, movies]) 
    
        
    return { movies: sortedMoviesMemo, getMovies, loading }
}