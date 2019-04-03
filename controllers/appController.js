module.exports = function (db) {
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
        const {departmentName, image, itemName, itemPrice, itemDesc, seller} = req.body.data
        // db is coming back as undefined need to figure out why
        console.log(db)
        db.Items.sync().then(() => {
          const newItem = {
            departmentName,
            image,
            itemName,
            itemPrice,
            itemDesc,
            seller
          }
          return db.Items.create(newItem).then(() => {
            res.status(200).json({message: 'Item added'})
          })
        }).catch((err) => {
          console.log(err)
          res.status(403)
        })
      },
      getItems: (req, res) => {
        let department = req.params.name
        department = department.replace("\'", '')
        console.log(department)
        db.Items.findAll({where: {departmentName: department}}).then(result => {
          let items = []
        for (let i = 0; i < result.length; i++) {
        items.push(result[i].dataValues)
        }
        res.json(items)
      }).catch((err) => {
        console.log(err)
        res.status(403)
      })
    },
    getItem: (req, res) => {
        let item = req.params.id
        console.log(item)
        db.Items.findOne({where: {id: item}}).then(result => {
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
    }
  };

};
