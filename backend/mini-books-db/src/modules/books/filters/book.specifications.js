const byAuthor = (author) =>
    author ? { author: { contains: author, mode: 'insensitive' } } : {}

const byGenre = (genre) =>
    genre ? { genre: { equals: genre } } : {}

const byYear = (year) =>
    year ? { year: parseInt(year) } : {}

const byPages = (minPages, maxPages) => {
    const condition = {}
    if (minPages) condition.gte = parseInt(minPages)
    if (maxPages) condition.lte = parseInt(maxPages)
    return Object.keys(condition).length ? { pages: condition } : {}
}

const byRating = (minRating) =>
    minRating ? { rating: { gte: parseFloat(minRating) } } : {}


export const buildSpecifications = (query) => {
    return {
        ...byAuthor(query.author),
        ...byGenre(query.genre),
        ...byYear(query.year),
        ...byPages(query.minPages, query.maxPages),
        ...byRating(query.minRating),
    }
}
