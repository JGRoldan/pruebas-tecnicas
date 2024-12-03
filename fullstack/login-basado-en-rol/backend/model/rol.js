import { ROLE } from '../utils/role.js'

export const rolModel = (sequelize, DataTypes) => {
    return sequelize.define('rol', {
        id_rol: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.ENUM([ROLE.ADMIN, ROLE.ADMIN_ASSIST, ROLE.USER]),
            allowNull: false,
            unique: true,
        }
    }, {
        tableName: 'rol',
        timestamps: false,
    })
}