import mongoose from "mongoose";

const GodAnswerSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  question:{
    type:String,
    default:""
},
godAnswer:{
    type:String,
    default:""
},
godUserName:{
    type:String,
    default:""
},
  
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports =
  mongoose.models.GodAnswer || mongoose.model("GodAnswer", GodAnswerSchema);
