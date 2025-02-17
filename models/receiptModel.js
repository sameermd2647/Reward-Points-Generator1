const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
  retailer: {
    type: String,
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  purchaseTime: {
    type: String,
    required: true,
  },
  items: [
    {
      shortDescription: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  calculatedPoints: {
    type: Number,
    default: 0,
  },
});

receiptSchema.set('timestamps', true);

module.exports = mongoose.model('Receipt', receiptSchema);
