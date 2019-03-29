module.exports = (sequelize, DataTypes)=> {
    let Departments = sequelize.define('Departments', {
        department_name: DataTypes.STRING,
    });

    Departments.associate = (models) => {
        Departments.hasMany(models.Products, {
          onDelete: "cascade"
        });
    };

    return Departments;    
};