const db = require('../models');

module.exports = (app)=> {
    app.get('api/departments/:searched?', (req, res) => {
        let searched = req.params.searched;
        if(searched){
            db.Departments.findAll({
                where: {
                    department_name: searched
                },
                include: [db.Products]
            }).then((department)=> {
                res.json(department);
            }).catch((err)=> {
                console.log(err);
            });
        }else {
            db.Departments.findAll({
                include: [db.Products]
            }).then((department)=> {
                res.json(department);
            }).catch((err)=> {
                console.log(err);
            });
        };
    });

    app.post('api/departments', (req, res)=> {
        const department = req.body;
        db.Departments.create({
            department_name: department.department_name
        }).then(()=> {
            console.log('successfully created product');
        }).catch((err)=> {
            console.log(err);
        });
    });

    app.delete('api/departments/:id', (req, res)=> {
        db.Departments.destroy({
            where: {
                id: req.params.id
            }
        }).then((department)=> {
            res.json(department);
        }).catch((err)=> {
            console.log(err);
        });
    });
};