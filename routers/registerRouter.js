const express = require('express');
const register = require("../modules/registerModule");

const router = express.Router();

router.post('/signUp',register.signup);
router.get('/users',register.getUsers);
router.put('/update/:id',register.updateUser);
router.delete('/delete/:id',register.deleteUser);

module.exports= router;
