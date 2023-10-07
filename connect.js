const mongoose=require("mongoose");



db=async()=>{
    try {
        mongoose.set("strictQuery", false);
       const res=await mongoose.connect(process.env.MONGODB_URL);
       console.log("connection is established");
    //    console.log(res);
}
        
     catch (error) {

        console.log('DB Error',error);
        
    }
}
    

module.exports=db;