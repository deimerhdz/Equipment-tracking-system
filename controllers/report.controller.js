const {Report} = require('../models')
const reportGet = async(req,res)=>{
    const {limit=5,offset=0} = req.query;
    const [total,reports] = await Promise.all([
        Report.countDocuments(),
        Report.find()
        .skip(Number(offset))
        .limit(Number(limit))
    ])
    res.json({
        total,
        reports
    })
}

const reportByIdGet = async (req,res)=>{
    const id = req.params.id;
    const report = await Report.findById(id);
    res.json(report);
}

const reportPost = async (req,res)=>{
    const {equipmentId,userId,description}= req.body;
    const report = new Report({equipmentId,userId,description});
    await report.save();
    res.status(201).json({
        report
    })
}

const reportPut = async(req,res)=>{
    const id = req.params.id;
    const {description}= req.body;
    const report = await Report.findByIdAndUpdate(id,{description});
    res.json({
        report
    })
}

const reportDelete = async(req,res)=>{
    const {id} = req.params;
    const report = await Report.deleteOne({_id:id});
    res.json({
        report
    })
}

module.exports ={
    reportGet,
    reportByIdGet,
    reportPost,
    reportPut,
    reportDelete
}