const {Router}= require('express');
const { login, register } = require('../controllers/auth.controller');
const { validatorSignIn  } = require('../validators');

const router = Router();
router.post('/login',validatorSignIn,login)
router.post('/register',register)


module.exports =router;