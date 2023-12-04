
const validatorUser = require('./users.validators')
const validatorUpload = require('./uploads.validators')
const validatorAuth = require('./auth.validators')
module.exports = {
    ...validatorUser,
    ...validatorUpload,
    ...validatorAuth
}