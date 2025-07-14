import stockObserver from '../../observers/stockObserver.js'

function checkLowStock(event, producto) {
    if (event === 'stockChanged') {
        if (producto.stock < producto.stockMinimo) {
            console.log(`⚠️ Alerta: El producto "${producto.nombre}" tiene stock bajo (${producto.stock})`)
            // Envio de mail, webhook, etc.
        }
    }
}

// Nos suscribimos a los eventos
stockObserver.subscribe(checkLowStock)

export default {
    checkLowStock
}