import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Crear productos
    const product1 = await prisma.product.create({
        data: {
            name: 'Producto A',
            description: 'Descripción del Producto A',
            suggestions: {
                create: [
                    {
                        text: 'Mejorar la interfaz',
                        votes: {
                            create: [{ value: 1 }, { value: 1 }, { value: -1 }]
                        }
                    },
                    {
                        text: 'Agregar modo oscuro',
                        votes: {
                            create: [{ value: 1 }]
                        }
                    }
                ]
            }
        },
        include: {
            suggestions: {
                include: {
                    votes: true
                }
            }
        }
    })

    const product2 = await prisma.product.create({
        data: {
            name: 'Producto B',
            description: 'Descripción del Producto B',
        }
    })

    console.log('Seed data created:', { product1, product2 })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
