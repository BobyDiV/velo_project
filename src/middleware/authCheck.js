function authCheck(req, res, next) {
  // console.log('check req.session: ', req.session);
  const user = req.session?.user?.userName;
  if (user) {
    next();
  } else {
    console.log(
      'Чек авторизации, нужно, чтобы сработал редирект на хоум на стартовую страницу, потому что нет юзера<<<<<<<<<<<'
    );
    // res.json({ msg: 'RESPONSE' });
    res.redirect('/');
  }
}

module.exports = authCheck;
