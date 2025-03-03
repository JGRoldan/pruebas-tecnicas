export const agricultorModel = (sequelize, DataTypes) => {
    return sequelize.define('agricultor', {
        id: {
            type: DataTypes.TINYINT,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        refresh_token: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    }, {
        tableName: 'agricultor',
        timestamps: false,
    })
}