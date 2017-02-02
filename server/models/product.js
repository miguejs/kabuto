'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    product_type: DataTypes.STRING,
    finish_time: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Product.hasMany(models.Bid, {
          foreignKey: 'product_id',
          as: 'bids',
        });
      }
    },
    instanceMethods: {
      lastBid: function (models) {
        var Bid = require('../models').Bid;
        return Bid.findAll({
          where: {
            product_id: this.id
          },
          order: 'id DESC',
          limit: 1
      });
        }
    },
    timestamps: false,
    tableName: 'products',
    underscored: true
  });
  return Product;
};