import { useState } from 'react'
import { searchMovie } from '../services/movies'

export function useMovies({ search }){
    const [movies, setMovies] = useState([])

    const getMovies = async () =>{
        const movies = await searchMovie({ search })
        setMovies(movies)
    }

    return { movies, getMovies }
}