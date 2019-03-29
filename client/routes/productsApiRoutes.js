const db = require('../models');
const metaphone = require('metaphone');
const Sequelize = require('sequelize');

module.exports = (app) => {
    app.get('api/products/:searched?', (req, res) => {
        let searched = req.params.searched;
        if(searched){
            const Op = Sequelize.Op;
            let meta = metaphone(searched);
            db.Products.findAll({
                where: {
                    metaphone: {
                        [Op.like]: meta+"%"
                    }
                },
                include: [db.Departments]
            }).then((products)=> {
                res.json(products);
            }).catch((err)=> {
                console.log(err);
            });
        }else {
            db.Products.findAll({
                include: [db.Departments]
            }).then((products)=> {
                res.json(products);
            }).catch((err)=> {
                console.log(err);
            });
        };
    });

    app.post('api/products', (req, res)=> {
        const product = req.body;
        const productMeta= metaphone(product.product_name);
        db.Products.create({
            product_name: product.product_name,
            department_name: product.department_name,
            price: product.price,
            stock_quantity: product.stock_quantity,
            product_sales: product.product_sales,
            metaphone: productMeta
        }).then(()=>{
            console.log('successfully created product');
        }).catch((err)=>{
            console.log(err);
        });
    });

    app.put('api/products', (req, res)=> {
        db.Products.update(req.body,
        {
            where: {
                id: req.body.id
            }
        }).then((products)=> {
            res.json(products);
        }).catch((err) => {
            console.log(err);
        });
    });

    app.delete('api/products/:id', (req, res)=> {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        }).then((product)=> {
            res.json(product);
        }).catch((err)=> {
            console.log(err);
        });
    });
};