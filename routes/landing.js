const express = require('express');
const router = express.Router();


// @route GET /landing
// @desc Shows the landing page
// @access Public
router.get('/', (req, res) => {
  res.render('landing/landing');
});

module.exports = router;