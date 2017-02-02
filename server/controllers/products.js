const Product = require('../models').Product;
var strftime = require('strftime')

module.exports = {
  list(req, res) {
    return Product.all()
    .then(products => res.status(200).send(products))
    .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Product
      .findById(req.params.productId, {
      })
      .then(product => {
        if (!product) {
          return res.status(404).send({
            message: 'Product Not Found',
          });
        }
        product.lastBid().then(function(bid) {
          bid = bid[0]
          data = {
            finish_time: strftime('%m/%e/%Y %H:%M:%S',product.finish_time ),
            product_id: product.id,
            amount: bid.amount_cents
          }
          res.io.emit("products", data);

          return res.status(200).send({
            data: data
          });
        })
      })
      .catch(error => res.status(400).send(error));
  }
};