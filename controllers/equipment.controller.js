const {response,request} = require('express')
const {Equipment} = require('../models');
const equipmentGet = async(req,res)=>{
    const {limit=5,offset=0} = req.query;
    const [total,equipments] = await Promise.all([
        Equipment.countDocuments(),
        Equipment.find()
        .skip(Number(offset))
        .limit(Number(limit))
    ])
    res.json({
        total,
        equipments
    })
}

const equipmentByIdGet = async(req=request,res=response)=>{
    const id = req.params.id;
    console.log(id);
    const equipment = await Equipment.findById(id)
    res.json(equipment);
}


const equipmentPost = async (req=request,res=response)=>{
    const {name,description,category,stock} = req.body;
    const equipment = new Equipment({name,description,category,stock,user:req.user.id} );
    await equipment.save();
    res.status(201).json({
        equipment
    })
}


const equipmentPut = async (req=request,res=response)=>{
    const {id} = req.params;
    const {name,description,category,stock} = req.body;
    const equipment =await Equipment.findByIdAndUpdate(id,{name,description,category,stock},{new:true});
    res.json({
        equipment
    })
}


const equipmentDelete = async (req=request,res=response)=>{
    const {id} = req.params;
    const equipment = await Equipment.deleteOne({_id:id});
    res.json({
        equipment
    })
}

module.exports = {
    equipmentGet,
    equipmentByIdGet,
    equipmentPost,
    equipmentPut,
    equipmentDelete
}