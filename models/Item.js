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
// this is what is causing the issue with heroku
  // Items.associate = (models) => {
  //   Items.belongsTo(models.Departments, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // };
 return Items
}