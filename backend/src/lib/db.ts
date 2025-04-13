import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongdb_uri = process.env.MONGODB_URI;

    if (!mongdb_uri) {
      console.log("Could not find database connection string");
      return;
    }

    const conn = await mongoose.connect(mongdb_uri);
    console.log(`Connected to database successfuly`);
  } catch (error) {
    console.log(
      "Something went wrong while connecting to the database: ",
      error
    );
  }
};
