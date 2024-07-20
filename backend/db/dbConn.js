import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB;
