const express = require('express');
const router = express.Router();
const admincontroller=require('../controller/admin');

router.post('/saveInDatabase', admincontroller.insertUser);
router.get("/showing" ,admincontroller.getUser);
router.use('/deleting/:productId', admincontroller.deleteUser);

module.exports = router;