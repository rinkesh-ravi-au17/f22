const Salonuser = require ('../model/')

//adding salon or spa

exports.addSalonUser =async(req,res,next)=>{
    const Salonspa = await Salonuser.create(req.body)
    res.status(201).json({
        success:true,
        Salonspa
    })
}

