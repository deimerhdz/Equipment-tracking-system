
const validatorUser = require('./users.validators')
const validatorUpload = require('./uploads.validators')
const validatorAuth = require('./auth.validators')
const validatorEquipment = require('./equipment.validators')
const validatorReport = require('./report.validators')

module.exports = {
    ...validatorUser,
    ...validatorUpload,
    ...validatorAuth,
    ...validatorEquipment,
    ...validatorReport
}