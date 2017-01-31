const Product = require('../models').Product;

module.exports = {
  list(req, res) {
    return Product.all()
    .then(products => res.status(200).send(products))
    .catch(error => res.status(400).send(error));
  },
};