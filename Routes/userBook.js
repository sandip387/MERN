import express from "express";
import BookUsers from "../Model/userBookModel.js";
const bookRouter = express.Router();
//create new user
bookRouter.post("/newBookUser", function (req, res) {
  try {
    const bookUser = new BookUsers(req.body).save();
    res.status(201).json({ message: "BookUser created successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//get all user
bookRouter.get("/", async function (req, res) {
  try {
    const users = await BookUsers.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//get user by id
bookRouter.get("/:id", async function (req, res) {
  try {
    const users = await Users.findOne({ _id: req.params.id });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default bookRouter;
