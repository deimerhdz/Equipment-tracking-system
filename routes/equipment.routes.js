const {Router} = require('express');
const {  equipmentGet,equipmentByIdGet,equipmentPost,equipmentPut,equipmentDelete} = require('../controllers/equipment.controller');
const {validarJWT } = require('../middlewares');
const { createEquipment, deleteEquipment } = require('../validators/equipment.validators');
const router = Router();

router.get('/',validarJWT,equipmentGet );
router.get('/:id',validarJWT,equipmentByIdGet );
router.post('/',createEquipment,equipmentPost );
router.put('/:id',validarJWT, equipmentPut);
router.delete('/:id',deleteEquipment,equipmentDelete);

module.exports = router;