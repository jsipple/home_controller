module.exports = function (db) {

  const metaphone = require('metaphone');
  const Sequelize = require('sequelize');


  return {
    addDepartments: (req, res) => {
      const {departmentName, image} = req.body.data
      // db is coming back as undefined need to figure out why
      console.log(db)
      db.Departments.sync().then(() => {
        const newDepartment = {
          name: departmentName,
          image
        }
        return db.Departments.create(newDepartment).then(() => {
          res.status(200).json({message: 'new department created'})
        })
      }).catch((err) => {
        console.log(err)
        res.status(403)
      })
    },
    // adding twice for some reason
      addItem: (req, res) => {
        console.log(req.body)
        //const {departmentName, image, itemName, itemPrice, itemDesc, seller} = req.body.data;
        

        // db is coming back as undefined need to figure out why
        //console.log(db)
        db.Items.sync().then(() => {
          
          const newItem = {
<<<<<<< HEAD
            departmentName:req.body.departmentName,
            image:req.body.image,
            itemName:req.body.itemName,
            itemPrice:req.body.itemPrice,
            itemDesc:req.body.itemDesc,
            seller:req.body.seller,
            ItemSales:0,
            metaphone:metaphone(req.body.itemName)
=======
            departmentName,
            image,
            itemName,
            itemPrice,
            itemDesc,
            seller,
            itemSales,
            meta
>>>>>>> 33520a6d411877d369e3b15c5db11e5d42e8fe95
          }
          console.log("\n\n\n\n\n\n"+newItem.meta+ newItem.departmentName+"\n\n\n\n\n\n");
          return db.Items.create(newItem).then(() => {
            res.status(200).json({message: 'Item added'})
          })
        }).catch((err) => {
          console.log(err)
          res.status(403)
        })
      },
//       getItems: (req, res) => {

//         if(item){
//           let item = req.params.id
//           console.log(item)
//           db.Items.findOne({where: {id: item}}).then(result => {
//             res.json(result.dataValues)
//           }).catch(err => {
//             console.log(err)
//             res.status(403)
//           });
//         }else{
//           let department = req.params.name
//           department = department.replace("\'", '')
//           console.log(department)
//           db.Items.findAll({where: {departmentName: department}}).then(result => {
//             let items = []
//             for (let i = 0; i < result.length; i++) {
//               items.push(result[i].dataValues)
//             }
//             res.json(items)
//           }).catch((err) => {
//             console.log(err)
//             res.status(403)
//           });
//         };

//     },
    
    getItems: (req, res) => {
        let department = req.params.name
        department = department.replace("\'", '')
        console.log(department)
        db.Items.findAll({where: {departmentName: department}, attributes: ['image', 'itemName', 'itemPrice', 'itemDesc', 'id'] }).then(result => {
          let items = []
        for (let i = 0; i < result.length; i++) {
        items.push(result[i].dataValues)
        }
        console.log(items)
        res.json(items)
      }).catch((err) => {
        console.log(err)
        res.status(403)
      })
    },
    getItem: (req, res) => {
        let item = req.params.id
        console.log(item)
        db.Items.findOne({where: {id: item}, attributes: ['id', 'image', 'itemName', 'itemPrice', 'itemDesc', 'seller']}).then(result => {
          res.json(result.dataValues)
        }).catch(err => {
          console.log(err)
          res.status(403)
        })
    },
    
    
    getDepartments: (req, res) => {
      db.Departments.findAll({}).then((result) => {
        let departments = []
        for (let i = 0; i < result.length; i++) {
        departments.push(result[i].dataValues)
        }
        console.log(departments)
        res.json(departments)
      }).catch((err) => {
        console.log(err)
        res.status(403)
      })

    },
    findItems : (req, res) => {
      const Op = Sequelize.Op;
      let searched= req.params.searched;
      let meta = metaphone(searched);
      return db.Items.findAll({
        attribute:['itemName'],
        where: {
          metaphone: {
            [Op.like]: meta+"%"
          }
        },
        //include: [db.Departments]
      }).then(result => {
        let items = []
        for (let i = 0; i < result.length; i++) {
        items.push(result[i].dataValues)
        }
        console.log(items)
        res.json(items)
      }).catch((err) => {
        console.log(err)
        res.status(403)
      });
    },
    updateItem: (req, res) => {
      db.Items.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(items => {
        res.json(items);
      }).catch(err => {
        console.log(err);
      });

    }
  };

};
