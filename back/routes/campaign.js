const express = require('express');
const router = express.Router();

const campaignCtrl = require('../controllers/campaign');

router.get('/', campaignCtrl.getAllcampaigns);
router.get('/:id', campaignCtrl.getOnecampaign);
router.post('/order', campaignCtrl.ordercampaigns);

module.exports = router;