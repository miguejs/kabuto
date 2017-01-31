const productsController = require('../controllers').products;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to kabuto',
  }));

  app.get('/api/products', productsController.list);
  app.get('/api/products/:productId', productsController.retrieve);
};