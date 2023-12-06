const { request, response } = require("express");
const {User} = require('../models');
const bcrypt = require('bcryptjs');
const { generateJwt } = require("../helpers/generate-jwt");
const login =async(req=request,res=response)=>{
    try {
        const {email,password}= req.body;
        //verificar si el email existe
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                mgs:'Invalid user or password '
            })
        }
        //verificar si el usuario esta activo
        if(!user.status){
            return res.status(400).json({
                mgs:'Invalid user or password '
            })
        }
        //verificar la contraseña
        const validPassword = bcrypt.compareSync(password,user.password);
        if(!validPassword){
            return res.status(400).json({
                mgs:'Invalid user or password '
            })
        }
        //generar jwt
        const jwt = await generateJwt(user.id);
        res.json({
            user,
            jwt
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mgs:'Hable con el administrador'
        })
    }

}
const register = async(req,res)=>{
    const {name,lastname,email,password,role} = req.body;
    const user = new User({name,lastname,email,password,role} );
    //encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password,salt);
    //guardar en db
    await user.save();
    res.status(201).json({
        user
    })
}

const renewToken= async(req,res)=>{
    const user = req.user;
   //generar jwt
   const jwt = await generateJwt(user.id);
    
    res.json({
        user,
        jwt
    })
}
module.exports = {
    login,
    register,
    renewToken
}