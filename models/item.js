module.exports = (sequelize, DataTypes) => {
 const Items = sequelize.define('Items', {
  departmentName: DataTypes.STRING,
  image: DataTypes.STRING,
  itemName: DataTypes.STRING,
  itemPrice: DataTypes.INTEGER,
  itemDesc: DataTypes.STRING,
  seller: DataTypes.STRING
 })
 return Items
}