import express from 'express'
import ProductController from './controller/product.controller.js'

const router = express.Router()

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener todos los productos
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Lista de todos los productos registrados
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
 *                   name:
 *                     type: string
 *                     example: App de Tareas
 *                   description:
 *                     type: string
 *                     example: Aplicación para organizar tareas diarias
 */
router.get('/', ProductController.list)

/**
 * @swagger
 * /products/suggestion:
 *   get:
 *     summary: Obtener productos con sus sugerencias asociadas
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Lista de productos con sus sugerencias
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
 *                   name:
 *                     type: string
 *                     example: App de Tareas
 *                   description:
 *                     type: string
 *                     example: Aplicación para organizar tareas diarias
 *                   suggestions:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           example: 10
 *                         text:
 *                           type: string
 *                           example: Agregar notificaciones push
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: 2025-07-04T12:34:56.000Z
 */

router.get('/suggestion', ProductController.listProductWithSuggestion)

/**
 * @swagger
 * /products/suggestion/vote:
 *   get:
 *     summary: Obtener productos con sugerencias y sus votos asociados
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: Lista de productos con sugerencias y votos
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
 *                   name:
 *                     type: string
 *                     example: App de Tareas
 *                   description:
 *                     type: string
 *                     example: Aplicación para organizar tareas diarias
 *                   suggestions:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           example: 10
 *                         text:
 *                           type: string
 *                           example: Agregar modo oscuro
 *                         createdAt:
 *                           type: string
 *                           format: date-time
 *                           example: 2025-07-04T13:45:00.000Z
 *                         votes:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               id:
 *                                 type: integer
 *                                 example: 1
 *                               value:
 *                                 type: integer
 *                                 example: 1
 */

router.get('/suggestion/vote', ProductController.listProductWithSuggestionAndVote)

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 example: Aplicación de Tareas
 *               description:
 *                 type: string
 *                 example: Una app para organizar tareas personales y laborales
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Aplicación de Tareas
 *                 description:
 *                   type: string
 *                   example: Una app para organizar tareas personales y laborales
 *       400:
 *         description: Datos inválidos o faltantes
 */
router.post('/', ProductController.create)

export default router
