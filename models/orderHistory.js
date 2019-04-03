module.exports = (sequelize, DataTypes) => {
    let OrderHistory = sequelize.define('OrderHistory', {
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
  
    OrderHistory.associate = (models) => {
        OrderHistory.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
    };

    return OrderHistory;
};
  