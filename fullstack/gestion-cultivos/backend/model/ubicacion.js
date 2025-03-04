export const ubicacionModel = (sequelize, DataTypes) => {
    return sequelize.define('ubicacion', {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true,
        },
        latitud: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        longitud: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
        tableName: 'ubicacion',
        timestamps: false,
    })
}