module.exports = (sequelize, DataTypes) => {
 const Items = sequelize.define('Items', {
    departmentName: DataTypes.STRING,
    image: DataTypes.STRING,
    itemName: DataTypes.STRING,
    itemPrice: {     
        type: DataTypes.DECIMAL,
        precision: 2,
    },
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
};

 return Items
}