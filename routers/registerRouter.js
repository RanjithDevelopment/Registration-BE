const express = require('express');
const register = require("../modules/registerModule");

const router = express.Router();
router.post('/signUp',register.signup);
module.exports= router;
