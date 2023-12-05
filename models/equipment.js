const {Schema,model} = require('mongoose');

const EquipmentSchema = Schema({
    name:{
        type:String,
        required:[true,'The name is required']
    },
    description:{
        type:String,
        required:[true,'The description is required']
    },
    category:{
        type:String,
        required:[true,'The category is required']
    },
    stock:{
        type:Number,
        required:[true,'The stock is required']
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    photo:{
        type:String
    }
});

module.exports=model('Equipment',EquipmentSchema)