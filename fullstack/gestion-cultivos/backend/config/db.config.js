import { Sequelize } from 'sequelize'
import { agricultorModel } from '../model/agricultor.js'
import { ubicacionModel } from '../model/ubicacion.js'
import { cultivoModel } from '../model/cultivo.js'
import { condicionesClimaticasModel } from '../model/condicionesClimaticas.js'
import mysql2 from 'mysql2'

export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: process.env.DB,
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialectModule: mysql2,
    pool: {
        max: 3, // No usar más de 3 conexiones simultáneas para evitar agotarlas
        min: 0, // Permite cerrar todas las conexiones inactivas
        acquire: 30000, // Tiempo máximo para intentar conectar antes de lanzar un error
        idle: 10000, // Tiempo que una conexión puede estar inactiva antes de cerrarse
    },
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

// Importar los modelos
db.agricultorModel = agricultorModel(sequelize, Sequelize)
db.ubicacionModel = ubicacionModel(sequelize, Sequelize)
db.cultivoModel = cultivoModel(sequelize, Sequelize)
db.condicionesClimaticasModel = condicionesClimaticasModel(sequelize, Sequelize)

// Definir las relaciones entre los modelos

// Un cultivo tiene muchas condiciones climáticas
db.cultivoModel.hasMany(db.condicionesClimaticasModel, { foreignKey: 'cultivo_id', onDelete: 'CASCADE' })
db.condicionesClimaticasModel.belongsTo(db.cultivoModel, { foreignKey: 'cultivo_id' })

// Un cultivo tiene una ubicación
db.ubicacionModel.hasOne(db.cultivoModel, { foreignKey: 'ubicacion_id', onDelete: 'CASCADE' })
db.cultivoModel.belongsTo(db.ubicacionModel, { foreignKey: 'ubicacion_id' })

// Un agricultor puede tener muchos cultivos
db.agricultorModel.hasMany(db.cultivoModel, { foreignKey: 'agricultor_id', onDelete: 'CASCADE' })
db.cultivoModel.belongsTo(db.agricultorModel, { foreignKey: 'agricultor_id' })

// Verificar la conexión a la base de datos
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente.')
    })
    .catch((err) => {
        console.error('No se pudo conectar a la base de datos:', err)
    })

// Sincronizar los modelos con la base de datos
sequelize
    .sync({ force: false }) // force: true -> DROP TABLES and CREATE TABLES again
    .then(() => {
        console.log('Sincronización de modelos completada.')
    })
    .catch((err) => {
        console.error('Error al sincronizar los modelos:', err)
    })

export default db