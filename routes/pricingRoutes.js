const express = require('express');
const router = express.Router();

const { getPrice } = require('../controllers/pricingControllers');

router.post('/calculate-price', getPrice);

module.exports = router;