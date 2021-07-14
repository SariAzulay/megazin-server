
const router = require('express').Router();
const admin = require('../../controllers/admin')

router.get('/sendEmail', admin.sendEmail)

module.exports = router;
