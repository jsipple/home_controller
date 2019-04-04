module.exports = (sequelize, DataTypes) => {
 const Items = sequelize.define('Items', {

    departmentName: DataTypes.STRING,
    image: DataTypes.STRING,
    itemName: DataTypes.STRING,
    itemPrice: DataTypes.DECIMAL,
    itemDesc: DataTypes.TEXT,
    seller: DataTypes.STRING,
    ItemSales: DataTypes.INTEGER,
    metaphone: DataTypes.STRING
 });

  Items.associate = (models) => {
    Items.belongsTo(models.Departments, {
      foreignKey: {
        allowNull: false
      }
    });
<<<<<<< HEAD:models/item.js
  };


=======
};
>>>>>>> 33520a6d411877d369e3b15c5db11e5d42e8fe95:models/Item.js
 return Items
}