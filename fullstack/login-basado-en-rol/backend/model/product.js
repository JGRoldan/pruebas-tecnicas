export const productModel = (sequelize, DataTypes) => {
    return sequelize.define('product', {
        id_product: {
            type: DataTypes.TINYINT,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        product_description: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        product_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        product_stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_by: {
            type: DataTypes.TINYINT,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id_user'
            }
        },
    }, {
        tableName: 'product',
        timestamps: false,
    })
}