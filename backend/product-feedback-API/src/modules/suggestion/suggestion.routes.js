import express from 'express'
import SuggestionController from './controller/suggestion.controller.js'

const router = express.Router()
/**
 * @swagger
 * /suggestion:
 *   get:
 *     summary: Obtener todas las sugerencias
 *     tags:
 *       - Suggestions
 *     responses:
 *       200:
 *         description: Lista de sugerencias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   text:
 *                     type: string
 *                     example: Agregar modo oscuro
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-07-04T10:34:23.000Z
 *                   productId:
 *                     type: integer
 *                     example: 1
 */
router.get('/', SuggestionController.list)

/**
 * @swagger
 * /suggestions:
 *   post:
 *     summary: Crear una nueva sugerencia para un producto
 *     tags:
 *       - Suggestions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - text
 *               - productId
 *             properties:
 *               text:
 *                 type: string
 *                 example: Agregar opción de compartir con equipos
 *               productId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Sugerencia creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 2
 *                 text:
 *                   type: string
 *                   example: Agregar opción de compartir con equipos
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2025-07-04T11:15:00.000Z
 *                 productId:
 *                   type: integer
 *                   example: 1
 *       400:
 *         description: Datos inválidos
 */
router.post('/', SuggestionController.create)

export default router