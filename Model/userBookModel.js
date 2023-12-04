import mongoose from "mongoose";
const bookUserSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    rollNo:{
        type: Number,
        required:true
    }
   },
   {
    timestamps: true
   }
)
export default mongoose.model("BookUsers", bookUserSchema);
