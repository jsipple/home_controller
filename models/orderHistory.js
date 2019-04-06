module.exports = (sequelize, DataTypes) => {
    let OrderHistory = sequelize.define('OrderHistory', {
        image: DataTypes.STRING,
        itemName: DataTypes.STRING,
        email: DataTypes.STRING,
 
    }, {timestamps: false});
  

    return OrderHistory;
};
  