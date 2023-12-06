const jwt = require('jsonwebtoken');
const User = require('../models/user');
const generateJwt =(uid='')=>{
    return new Promise((resolve,reject)=>{
        const payload ={ uid};
        jwt.sign(payload,process.env.SECRET_KEY,{
            expiresIn:'4h'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }else{
                resolve(token);
            }
        });
    })
}
const comprobarJwt = async(token='')=>{
    try{
        if(token.length<10){
            return null;
        }
        const {uid} = jwt.verify(token,process.env.SECRET_KEY);
     
        const user = await User.findById(uid);
        if(user){
            return user;
        }else{
            return null;
        }
    }catch(error){
        return null;
    }
}
module.exports = {
    generateJwt,
    comprobarJwt
}