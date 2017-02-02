'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bid = sequelize.define('Bid', {
    product_id: DataTypes.INTEGER,
    amount_cents: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Bid.belongsTo(models.Product, {
          foreignKey: 'product_id'
        });
      }
    },
    timestamps: false,
    tableName: 'bids',
    underscored: true
  });
  return Bid;
};