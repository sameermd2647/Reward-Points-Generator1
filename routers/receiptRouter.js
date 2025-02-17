const express = require('express');
const router = express.Router();
const receiptController = require('../controllers/receiptController');

router.post('/process', receiptController.processReceipt);
router.get('/:id/points', receiptController.getPoints);

module.exports = router;
