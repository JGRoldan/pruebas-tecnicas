import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const books = await prisma.book.createMany({
        data: [
            {
                title: 'Cien años de soledad',
                author: 'Gabriel García Márquez',
                genre: 'Realismo mágico',
                pages: 417,
                year: 1967,
                rating: 4.8
            },
            {
                title: 'El Principito',
                author: 'Antoine de Saint-Exupéry',
                genre: 'Fábula',
                pages: 96,
                year: 1943,
                rating: 4.7
            },
            {
                title: '1984',
                author: 'George Orwell',
                genre: 'Distopía',
                pages: 328,
                year: 1949,
                rating: 4.6
            },
            {
                title: 'Don Quijote de la Mancha',
                author: 'Miguel de Cervantes',
                genre: 'Clásico',
                pages: 863,
                year: 1605,
                rating: 4.5
            },
            {
                title: 'Rayuela',
                author: 'Julio Cortázar',
                genre: 'Novela experimental',
                pages: 554,
                year: 1963,
                rating: 4.4
            },
            {
                title: 'La sombra del viento',
                author: 'Carlos Ruiz Zafón',
                genre: 'Thriller literario',
                pages: 565,
                year: 2001,
                rating: 4.6
            }
        ]
    })

    console.log('Libros creados:', books)
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
