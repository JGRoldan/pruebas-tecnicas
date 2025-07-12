import express from 'express'
import VoteController from './controller/votes.controller.js'

const router = express.Router()
/**
 * @swagger
 * /votes:
 *   post:
 *     summary: Crear un voto (positivo o negativo) para una sugerencia
 *     tags:
 *       - Votes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - value
 *               - suggestionId
 *             properties:
 *               value:
 *                 type: integer
 *                 enum: [1, -1]
 *                 example: 1
 *               suggestionId:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: Voto registrado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 10
 *                 value:
 *                   type: integer
 *                   example: 1
 *                 suggestionId:
 *                   type: integer
 *                   example: 5
 *       400:
 *         description: Datos inválidos o sugerencia inexistente
 */

router.post('/', VoteController.create)

/**
 * @swagger
 * /votes/{suggestionId}:
 *   get:
 *     summary: Obtener todos los votos asociados a una sugerencia
 *     tags:
 *       - Votes
 *     parameters:
 *       - in: path
 *         name: suggestionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la sugerencia
 *     responses:
 *       200:
 *         description: Lista de votos
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
 *                   value:
 *                     type: integer
 *                     example: 1
 *                   suggestionId:
 *                     type: integer
 *                     example: 5
 *       404:
 *         description: No se encontraron votos para esa sugerencia
 */

router.get('/votes/:suggestionId', VoteController.getVotesBySuggestionId)

/**
 * @swagger
 * /count/{suggestionId}:
 *   get:
 *     summary: Obtener el conteo de votos positivos y negativos de una sugerencia
 *     tags:
 *       - Votes
 *     parameters:
 *       - in: path
 *         name: suggestionId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la sugerencia
 *     responses:
 *       200:
 *         description: Conteo de votos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 upvotes:
 *                   type: integer
 *                   example: 3
 *                 downvotes:
 *                   type: integer
 *                   example: 1
 *                 total:
 *                   type: integer
 *                   example: 4
 *       404:
 *         description: No se encontraron votos para esa sugerencia
 */

router.get('/count/:suggestionId', VoteController.getVoteCountBySuggestionId)

export default router