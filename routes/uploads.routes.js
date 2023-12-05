const {Router}= require('express');
const { cargarArchivo, showImage, updatedImageCloudinary } = require('../controllers/uploads.controller');


const { validatorUpdateUpload, validatorGetFileCollectionById } = require('../validators');
const { validateFile } = require('../middlewares');

const router = Router();

router.put('/:collection/:id',validatorUpdateUpload,updatedImageCloudinary)
module.exports = router;