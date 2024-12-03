import { productLogModel } from '../model/productLogs.js'
import { productModel } from '../model/product.js'
import { rolModel } from '../model/rol.js'
import { Sequelize } from 'sequelize'
import { userModel } from '../model/user.js'
import '../utils/envConfig.js'

export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: process.env.DB,
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DB_PORT,
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

// Importar los modelos
db.userM = userModel(sequelize, Sequelize)
db.rolM = rolModel(sequelize, Sequelize)
db.productM = productModel(sequelize, Sequelize)
db.productLogM = productLogModel(sequelize, Sequelize)

// Definir las asociaciones después de que todos los modelos estén cargados
db.userM.belongsTo(db.rolM, { foreignKey: 'role_id' })
db.rolM.hasMany(db.userM, { foreignKey: 'role_id' })

db.userM.hasMany(db.productM, { foreignKey: 'created_by' }) //Un usuario puede tener varios productos. Establezco la foreignKey para que no me genere una random
db.productM.belongsTo(db.userM, { foreignKey: 'created_by' }) //Un producto pertenece a un usuario. Establezco la foreignKey para que no me genere una random

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
    .sync({ force: false })
    .then(() => {
        console.log('Sincronización de modelos completada.')
    })
    .catch((err) => {
        console.error('Error al sincronizar los modelos:', err)
    })

export default db