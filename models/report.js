const {Schema,model} = require('mongoose');

const ReportSchema = Schema({
    description:{
        type:String,
        required:[true,'The description is required']
    },
    creationDate:{
        type: Date,
        default: Date.now,
        required:[true,'The category is required']
    },
    equipmentId:{
        type:Schema.Types.ObjectId,
        ref:'Equipment',
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
});

module.exports=model('Report',ReportSchema)