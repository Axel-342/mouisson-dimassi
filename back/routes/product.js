const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/campaign');

router.get('/', productCtrl.getAllcampaigns);
router.get('/:id', productCtrl.getOnecampaign);
router.post('/order', productCtrl.ordercampaigns);

module.exports = router;