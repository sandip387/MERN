import mongoose from "mongoose";
const bookSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    author:{
        type: String,
        required:true
    }
   },
   {
    timestamps: true
   }
)
export default mongoose.model("Books", bookSchema);
