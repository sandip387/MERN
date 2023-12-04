import express from "express";
import Users from "../Model/userModel.js";
const router = express.Router();

//create new user
router.post("/new",function(req,res){
  try{
    const user = new Users(req.body).save();
    res.status(201).json({message:"User created sucessfully"});

  }catch(err){
    res.status(500).json(err.message)
  }
}
)

//get all user
router.get("/", async function(req,res){
  try{
    const users = await Users.find({});
    res.status(200).json(users)
  }catch(err){
    res.status(500).json(err.message);
  }
})

//get user by id
router.get("/:id", async function(req,res){
  try{
    const users = await Users.findOne({_id:req.params.id})
    res.status(200).json(users)
  }catch(err){
    res.status(500).json(err.message);
  }
})




export default router;
