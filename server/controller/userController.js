const User = require ('../model/userModel')

//adding user
exports.addUser =async(req,res,next)=>{
    const user = await User.create(req.body)
    res.status(201).json({
        success:true,
        user
    })
}
exports.getAllUsers =(req,res)=>{
    res.status (200).json({message:"route is working fine"})
} 
