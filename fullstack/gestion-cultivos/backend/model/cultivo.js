export const cultivoModel = (sequelize, DataTypes) => {
    return sequelize.define('cultivo', {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true,
        },
        agricultor_id: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: 'agricultor',
                key: 'id',
            }
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        fecha_siembre: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        ubicacion_id: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: 'ubicacion',
                key: 'id',
            }
        },
        rendimiento_esperado: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    }, {
        tableName: 'cultivo',
        timestamps: false,
    })
}