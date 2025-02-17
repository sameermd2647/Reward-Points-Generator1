const Receipt = require('../models/receiptModel');
const calculatePoints = require('../middlewares/calculatePoints');

// Controller for processing receipts
const processReceipt = async (req, res) => {
  try {
    const receiptData = req.body;

    const calculatedPoints = calculatePoints(receiptData);


// create receipt
    const newReceipt = await Receipt.create({
      retailer: receiptData.retailer,
      purchaseDate: receiptData.purchaseDate,
      purchaseTime: receiptData.purchaseTime,
      items: receiptData.items,
      total: receiptData.total,
      calculatedPoints: calculatedPoints,
    });

    res.json({ id: newReceipt._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller for getting points based on receipt ID
const getPoints = async (req, res) => {
  try {
    const receiptId = req.params.id;

    const storedReceipt = await Receipt.findById(receiptId);

    if (!storedReceipt) {
      return res.status(404).json({ error: 'Receipt not found' });
    }

    res.json({ points: storedReceipt.calculatedPoints });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  processReceipt,
  getPoints,
};
