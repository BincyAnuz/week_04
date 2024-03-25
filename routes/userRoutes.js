const express = require('express');
const router = express.Router();
const{getPages,login,logout}=require("../controller/userContoller")

router.get('/',getPages);

router.post('/login', login);

router.post('/logout',logout);

module.exports = router;
