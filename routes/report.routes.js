const {Router} = require('express');
const {  reportGet,reportByIdGet,reportPost,reportPut,reportDelete} = require('../controllers/report.controller');
const {validarJWT, hasRole } = require('../middlewares');
const router = Router();

router.get('/',validarJWT,reportGet );
router.get('/:id',validarJWT,reportByIdGet );
router.post('/',validarJWT,reportPost );
router.put('/:id',validarJWT, reportPut);
router.delete('/:id',validarJWT,reportDelete);

module.exports = router;