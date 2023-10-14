const user = require("../models/userModels");
const { ObjectId } = require('mongodb');

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

module.exports.getUsers = async(req,res)=>{
    try {
        const allUsers = await user.find({});
        res.status(200).send(allUsers) 
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"can't able to fetch the Users Data"})
    }

}

module.exports.updateUser = async(req,res,next) =>{
    try {
        const updated = await user.findByIdAndUpdate(req.params.id,{...req.body})
        if(updated){
        return res.status(200).json({ updated });
        }

    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"can't able to update the details"})
    }
} 

module.exports.deleteUser = async(req,res)=>{
    try {
const isValid = ObjectId.isValid(req.params.id);
       
     if(isValid){
        const remove = await user.deleteOne({ _id: new ObjectId(req.params.id) });
     if(remove){
        return res.status(200).json({ remove });
     }
    }
     res.status(500).send({msg:"can't able to delete the user"})
    } catch (error) {
        console.log(error)
        res.status(400).send({msg:"can't able to delete the user details"})
    }
} 