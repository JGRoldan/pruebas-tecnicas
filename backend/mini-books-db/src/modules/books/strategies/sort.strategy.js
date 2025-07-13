const sortByTitle = () => ({ title: 'asc' })

const sortByYearAsc = () => ({ year: 'asc' })
const sortByYearDesc = () => ({ year: 'desc' })

const sortByRatingAsc = () => ({ rating: 'asc' })
const sortByRatingDesc = () => ({ rating: 'desc' })

/**
 * Estrategias de ordenamiento para los libros.
 * Cada estrategia devuelve un objeto que define el orden.
 */
const sortStrategies = {
    title: sortByTitle,
    year: sortByYearAsc,
    year_desc: sortByYearDesc,
    rating: sortByRatingAsc,
    rating_desc: sortByRatingDesc
}

export const getSortStrategy = (sortKey) => {
    const strategy = sortStrategies[sortKey]
    return strategy ? strategy() : {} // Si no se encuentra, no se aplica orden
}
