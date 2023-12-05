const { check } = require("express-validator");
const { validateFields, validateFile } = require("../middlewares");
const { allowedCollection } = require("../helpers");

const validatorUpdateUpload=[
    validateFile,
    check('id','It is not valid id').isMongoId(),
    check('collection').custom(c=>allowedCollection(c,['equipments'])),
    validateFields
];


const validatorGetFileCollectionById=[
    check('id','It is not valid id').isMongoId(),
    check('collection').custom(c=>allowedCollection(c,['equipments'])),
    validateFields
]
module.exports = {
    validatorUpdateUpload,
    validatorGetFileCollectionById
}