const express = require('express');
const router = express.Router();
const plcService = require('../services/plcService');

router.get('/', async (req, res) => {
  try {
    const status = await plcService.readStatus();
    res.json(status);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
