const { check } = require("express-validator");
const { validarJWT, validateFields, hasRole } = require("../middlewares");

const createReport =[
    validarJWT,
    hasRole('ADMIN','TECHNICIAN'),
    check('description','description is required').not().isEmpty(),
    check('equipmentId','equipmentId is required').not().isEmpty(),
    check('userId','userId is required').not().isEmpty(),
    validateFields
];


const deleteReport = [
    validarJWT,
    hasRole('ADMIN','TECHNICIAN'),
    check('id','It is not valid id').isMongoId(),
    validateFields
]

module.exports = {
    createReport,
    deleteReport
}