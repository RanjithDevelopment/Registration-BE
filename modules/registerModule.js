const user = require("../models/userModels");

module.exports.signup = async(req,res,next) =>{
    try{
    //check the user already exists in DB
    const existUser = await user.findOne({email:req.body.email});
    if(existUser)return res.status(400).send({msg:"You are already a existing User"});
    //save to DataBadse
let newUser= await new user({...req.body});
await newUser.save();

res.status(200).send({message:"user creadted successfully"});
    }
    catch(err){
        console.log(err);
    }
}