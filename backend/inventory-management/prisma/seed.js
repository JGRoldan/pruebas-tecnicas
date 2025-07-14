import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const categoria = await prisma.categoria.createMany({
        data: [
            { nombre: 'Electrónica' },
            { nombre: 'Alimentos' },
            { nombre: 'Bebidas' },
            { nombre: 'Limpieza' }
        ]
    })

    const proveedor = await prisma.proveedor.createMany({
        data: [
            { nombre: 'Proveedor A', contacto: 'proveedora@example.com' },
            { nombre: 'Proveedor B', contacto: 'proveedorb@example.com' }
        ]
    })

    const producto = await prisma.producto.createMany({
        data: [
            {
                nombre: 'Teclado mecánico',
                descripcion: 'Teclado RGB con switches blue',
                stock: 10,
                stockMinimo: 5,
                precio: 250.00,
                categoriaId: 1,
                proveedorId: 1
            },
            {
                nombre: 'Café en grano 1kg',
                descripcion: 'Café tostado de origen colombiano',
                stock: 3,
                stockMinimo: 5,
                precio: 15.50,
                categoriaId: 2,
                proveedorId: 2
            }
        ]
    })


    console.log({ 'Categorias creadas:': categoria, 'Proveedores creados': proveedor, 'Productos creados': producto })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })


