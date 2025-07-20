import express from 'express'
import { loadCSVData, getAllEmployees, getStats } from './dataProcessor.js'

const app = express()
const PORT = 3000

await loadCSVData()

app.get('/employees', (req, res) => {
    res.json(getAllEmployees())
})

app.get('/stats', (req, res) => {
    res.json(getStats())
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
