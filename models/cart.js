module.exports = (sequelize, DataTypes) => {
    let Cart = sequelize.define('Cart', {
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
        },
        email: DataTypes.STRING,
        
    }, {timestamps: false});

    return Cart;
};
  