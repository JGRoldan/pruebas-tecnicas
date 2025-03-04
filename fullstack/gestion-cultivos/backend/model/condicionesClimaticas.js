export const condicionesClimaticasModel = (sequelize, DataTypes) => {
    return sequelize.define('condiciones_climaticas', {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true,
        },
        cultivo_id: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: 'cultivo',
                key: 'id'
            }
        },
        temperatura: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        humedad: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        tableName: 'condiciones_climaticas',
        timestamps: false,
    })
}