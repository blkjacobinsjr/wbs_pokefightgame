import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connectionString = process.env.MONGODB_URI;

mongoose
  .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

export default db;
