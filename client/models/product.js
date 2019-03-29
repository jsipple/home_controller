module.exports = (sequelize, DataTypes)=> {
    let Products = sequelize.define('Products', {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department_name: DataTypes.STRING,
        price: {
            type: DataTypes.DECIMAL,
            precision: 2,
            allowNull: false
        },
        stock_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_sales: DataTypes.INTEGER,
        metaphone: DataTypes.STRING
    });

    Products.associate = (models) => {
        Products.belongsTo(models.Departments, {
          foreignKey: {
            allowNull: false
          }
        });
    };
    
    return Products;
};