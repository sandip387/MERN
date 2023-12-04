import mongoose from "mongoose";
const ConnectDb = async () => {
  try {
    await mongoose.connect(
      // "mongodb://127.0.0.1:27017/training"
      "mongodb+srv://sandipshrestha387:sandip6669@cluster0.tbo8vx1.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to Mongodb database");
  } catch (err) {
    console.log(`Error in Mongodb ${err.message}`);
  }
};
export default ConnectDb;
