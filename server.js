// replace the start in package.json scripts.start (within react-app) with below to get both to work on heroku maybe
    // start: "node server.js"
    // heroku-postbuild: cd client && npm start

require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const moment = require('moment');
const helmet = require('helmet');
// need to have both of these running at once
const PORT = process.argv[2] || process.env.PORT || 5000;
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
)
// this should be the same as questions in the article  
const db = require('./models');

app.use(cookieParser());
app.use(morgan('dev')); // Hook up the HTTP logger
app.use(express.static('public'));

require('./config/passport')(db, app, passport); // pass passport for configuration

var my_var = 6;

app.use('/api', require('./routes/apiRoutes')(passport, db));
// db.Departments.hasMany(db.Items, {as: "Items", foreignKey: 'DepartmentId'})
// db.Items.belongsTo(db.Departments, {as: "Department", foreignKey: 'DepartmentId'})
// Secure express app
app.use(helmet.hsts({
  maxAge: moment.duration(1, 'years').asMilliseconds(),
}));

// catch 404 and forward to error handler
if (app.get('env') !== 'development') {
  app.use((req, res, next) => {
    let err = new Error('Not Found: ' + req.url);
    err.status = 404;
    next(err);
  });
}

db.sequelize.sync({ force: process.env.FORCE_SYNC === 'true' }).then(() => {
  if(process.env.FORCE_SYNC === 'true') {
    require('./db/seed')(db);
  }

  app.get('/api', (req,res) => {
    db.User.findAll({}).then(result => {
      res.json(result)
    })
  })

  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });  
});
