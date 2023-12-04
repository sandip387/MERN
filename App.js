import express from "express";
import ConnectDb from "./Config/ConnectDb.js";
import userRoutes from "./Routes/userRoutes.js";
import userBook from "./Routes/userBook.js";
import book from "./Routes/Book.js";
import Product from "./Model/ProductModel.js";
const app = express();
const port = 4000;

//function for connecting to database
ConnectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/* 
function for connecting to database
get -> database bata data magda
put -> data database ma save garda
patch-> data change garda
dete-> data delete garna lai
mostly browsers le get method matra show garxan
*/
app.get("/", function (req, res) {
  res.send("hi I am from backend");
});

app.use("/user", userRoutes);
app.use("/bookuser", userBook);
app.use("/book", book);
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//update a product
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    //we cannot find any product in database
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.mesage });
  }
});
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ messgae: `cannot find any product with ID ${id}` });
    }res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
