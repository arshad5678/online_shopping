import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

export async function connectDB() {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/online_shopping";

    // Try connecting to the provided or default URI first
    try {
      await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 2000 }); // Short timeout to check for local DB
      console.log(`Connected to MongoDB at ${mongoUri}`);
      return;
    } catch (err) {
      console.log("Local MongoDB not found, starting in-memory database...");
    }

    // Fallback to in-memory database
    const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    await mongoose.connect(uri);
    console.log(`Connected to In-Memory MongoDB at ${uri}`);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}
