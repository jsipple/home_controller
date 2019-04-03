module.exports = (db) => {
  db.User.create({
    userName: 'Joe',
    email: 'j@g.co',
    password: '1234',
    isAdmin: true
  });
  db.User.create({
    firstName: 'Jane',
    lastName: 'Jobs',
    email: 'j@j.co',
    password: '123',
    isAdmin: false
  });
};
