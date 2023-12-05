const {Router} = require('express');
const {  reportGet,reportByIdGet,reportPost,reportPut,reportDelete} = require('../controllers/report.controller');
const {validarJWT } = require('../middlewares');
const { createReport, deleteReport } = require('../validators/report.validators');
const router = Router();

router.get('/',validarJWT,reportGet );
router.get('/:id',validarJWT,reportByIdGet );
router.post('/',createReport,reportPost );
router.put('/:id',validarJWT, reportPut);
router.delete('/:id',deleteReport,reportDelete);

module.exports = router;