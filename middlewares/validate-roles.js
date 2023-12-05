const hasRole = (...roles)=>{
    return (req,res,next)=>{
        if(!req.user){
            return res.status(500).json({
                msg:'you want to verify the role without validating the token'
            })
        }

        if(!roles.includes(req.user.role)){
            return res.status(401).json({
                msg:`the service requires one of these roles ${roles}`
            })
        }
        next();
    }
}
module.exports= {
    hasRole
}