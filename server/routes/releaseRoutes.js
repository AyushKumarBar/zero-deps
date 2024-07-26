const express = require('express');
const { createRelease, getReleases } = require('../controllers/releaseController');
const router = express.Router();

router.post('/', createRelease);
router.get('/', getReleases);

module.exports = router;
