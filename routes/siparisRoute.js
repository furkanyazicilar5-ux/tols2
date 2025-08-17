const express = require('express');
const router = express.Router();
const orderService = require('../services/orderService');

router.post('/', async (req, res) => {
  try {
    const result = await orderService.processOrder(req.body);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
