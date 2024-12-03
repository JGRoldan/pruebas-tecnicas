export const productLogModel = (sequelize, DataTypes) => {
    return sequelize.define('product_logs', {
        log_id: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true,
        },
        id_product: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        log_message: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        log_time: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        tableName: 'product_logs',
        timestamps: false,
    })
}