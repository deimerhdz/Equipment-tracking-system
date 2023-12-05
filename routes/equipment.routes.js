const {Router} = require('express');
const {  equipmentGet,equipmentByIdGet,equipmentPost,equipmentPut,equipmentDelete} = require('../controllers/equipment.controller');
const { check } = require('express-validator');
const {validarJWT, hasRole } = require('../middlewares');
const router = Router();

router.get('/',validarJWT,equipmentGet );
router.get('/:id',validarJWT,equipmentByIdGet );
router.post('/',validarJWT,equipmentPost );
router.put('/:id',validarJWT, equipmentPut);
router.delete('/:id',validarJWT,equipmentDelete);

module.exports = router;