const { check } = require("express-validator");
const { validarJWT, validateFields, hasRole } = require("../middlewares");

const createEquipment =[
    validarJWT,
    hasRole('ADMIN'),
    check('name','name is required').not().isEmpty(),
    check('description','description is required').not().isEmpty(),
    check('category','category is required').not().isEmpty(),
    check('stock','stock is required').not().isEmpty(),
    validateFields
];


const deleteEquipment = [
    validarJWT,
    hasRole('ADMIN'),
    check('id','It is not valid id').isMongoId(),
    validateFields
]

module.exports = {
    createEquipment,
    deleteEquipment
}