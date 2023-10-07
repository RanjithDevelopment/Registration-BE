const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{type: String,required: true,trim: true},
    lastName:{type: String,required: true,trim: true},
    email:{type: String,unique: true ,required: true,trim: true},
    phoneNo:{type: String, unique: true,required: true,trim: true},
})

const userModel = mongoose.model("Users",userSchema);
module.exports=userModel;