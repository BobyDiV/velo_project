const renderComponent = require('../lib/renderReactModule');

function ssrEngine(req, res, next) {
  res.render = (reactComponent, props) => {
    renderComponent(reactComponent, { ...props, user: req.session?.user }, res);
  };
  next();
}

module.exports = ssrEngine;
