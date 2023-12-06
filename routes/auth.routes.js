const {Router}= require('express');
const { login, register, renewToken } = require('../controllers/auth.controller');
const { validatorSignIn  } = require('../validators');
const { validarJWT } = require('../middlewares');

const router = Router();
router.post('/login',validatorSignIn,login)
router.post('/register',register);
router.get('/renew',  validarJWT,renewToken)


module.exports =router;