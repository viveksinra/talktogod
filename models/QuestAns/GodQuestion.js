import mongoose from "mongoose";

const GodQuestionSchema = new mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },

question:{
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
  mongoose.models.GodQuestion || mongoose.model("GodQuestion", GodQuestionSchema);
