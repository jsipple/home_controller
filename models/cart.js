module.exports = (sequelize, DataTypes) => {
    let Cart = sequelize.define('Cart', {
        departmentName: DataTypes.STRING,
        image: DataTypes.STRING,
        itemName: DataTypes.STRING,
        itemPrice: {     
            type: DataTypes.DECIMAL,
            precision: 2,
        },
        quantity: DataTypes.INTEGER,
        total: {
            type:DataTypes.INTEGER,
            percision: 2, 
        }
    });
  
    Cart.associate = (models) => {
        Cart.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return Cart;
};
  