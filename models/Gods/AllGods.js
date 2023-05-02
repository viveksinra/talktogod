import mongoose from "mongoose";

const AllGodsSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  godName:{
    type:String,
    default:""
},
godUserName:{
    type:String,
    default:""
},
profileImage:{
    type:String,
    default:""
},
position:{
    type:Number,
    default:100
},
  
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports =
  mongoose.models.AllGods || mongoose.model("AllGods", AllGodsSchema);
