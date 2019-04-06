
module.exports = (sequelize, DataTypes)=> {
    let Departments = sequelize.define('Departments', {
        name: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {timestamps: false});

    Departments.associate = (models) => {
        Departments.hasMany(models.Items, {
          onDelete: "cascade"
        });
    };

    return Departments;    
};

