const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // App
  // router.get('/data', ensureAuthenticated, AppController.getData);
  
  router.post('/departments', ensureAuthenticated, AppController.addDepartments)
  router.get('/findDepartments', ensureAuthenticated, AppController.getDepartments)
  router.post('/items', ensureAuthenticated, AppController.addItem)
  router.get('/department/:name/:id?', ensureAuthenticated, AppController.getItems)
  router.get('/findItems/:searched', AppController.findItems)
  router.put('item/:id', AppController.updateItem)
  router.get('/department/:name', ensureAuthenticated, AppController.getItems)
  router.get('/department/:name/:id', ensureAuthenticated, AppController.getItem)
  router.get('/cart/:email', ensureAuthenticated, AppController.getCart)
  router.delete('/cart/:email', ensureAuthenticated, AppController.deleteCart)
  router.post('/cart', ensureAuthenticated, AppController.addCart)
  router.get('/orderHistory/:email', ensureAuthenticated, AppController.getOrderHistory)
  router.post('/orderHistory', ensureAuthenticated, AppController.addOrderHistory)
 

  return router;
};
