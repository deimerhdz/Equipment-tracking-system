const {Schema,model} = require('mongoose');

const UserSchema = Schema({
    name:{
        type:String,
        required:[true,'The name is required']
    },
    lastname:{
        type:String,
        required:[true,'The name is required']
    },
    email:{
        type:String,
        required:[true,'The email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'The password is required']
    },
    img:{
        type:String
    },
    role:{
        type:String,
        required:true,
        enum:['CLIENT', 'TECHNICIAN', 'ADMIN']
    },
    status:{
        type:Boolean,
        default:true
    }
});

UserSchema.methods.toJSON= function(){
    const { __v, password ,_id,...user } = this.toObject();
    user.uid=_id;
    return user;
}


module.exports=model('User',UserSchema)