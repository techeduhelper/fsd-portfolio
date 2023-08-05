const express = require('express');
const { sendEmail } = require('../controllers/portfolioController');


// Router object
const router = express.Router()

// routes
router.post('/send-mail', sendEmail);

// export
module.exports = router; 