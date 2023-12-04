import express from "express";
import Books from "../Model/bookModel.js";
const routerBook = express.Router();
//create new book
routerBook.post("/newBook", function (req, res) {
  try {
    const book = new Books(req.body).save();
    res.status(201).json({ message: "Book created sucessfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});
// routerBook.get("/book", function (req, res) {
//   res.send("Book route is working!!");
// });

//get all book
routerBook.get("/", async function (req, res) {
  try {
    const books = await Books.find({});
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

//get book by id
routerBook.get("/:id", async function (req, res) {
  try {
    const books = await Books.findOne({ _id: req.params.id });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default routerBook;
