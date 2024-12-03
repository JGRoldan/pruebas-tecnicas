export const userModel = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id_user: {
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
        role_id: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: 'rol',
                key: 'id_rol',
            },
        },
    }, {
        tableName: 'user',
        timestamps: false,
    })

}