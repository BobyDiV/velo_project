const router = require('express').Router();

const Home = require('../views/Home');

const bcrypt = require('bcrypt');

router.get('/', (req, res, next) => {
  res.render(Home, {});
});

module.exports = router;
