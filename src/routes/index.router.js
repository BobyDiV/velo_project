const router = require('express').Router();

const Home = require('../views/Home');

const bcrypt = require('bcrypt');

router.get('/', (req, res, next) => {
  const API_KEY = process.env.API_KEY;

  res.render(Home, { API_KEY });
});

module.exports = router;
