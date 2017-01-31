const Product = require('../models').Product;

module.exports = {
  list(req, res) {
    return Product.all()
    .then(products => res.status(200).send(products))
    .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Product
      .findById(req.params.productId, {
        // include: [{
        //   model: TodoItem,
        //   as: 'todoItems',
        // }],
      })
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'Product Not Found',
          });
        }
        res.io.emit("products", product);
        return res.status(200).send({
           message: 'Product send',
        });
      })
    .catch(error => res.status(400).send(error));
  }
};