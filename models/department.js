module.exports = (sequelize, DataTypes) => {
 const Departments = sequelize.define('Departments', {
  name: DataTypes.STRING,
  image: DataTypes.STRING,
 })
 return Departments
}