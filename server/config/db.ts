import "dotenv/config";
import mongoose from 'mongoose';

export const connectDB = async (uri?: string): Promise<void> => {
    try {
        const mongoUri = uri || process.env.MONGO_URI || process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error('MONGO_URI or MONGODB_URI environment variable is not defined');
        }

        if (mongoUri.includes("YOUR_USERNAME") || mongoUri.includes("YOUR_PASSWORD") || mongoUri.includes("xxxxx")) {
            throw new Error("Invalid MongoDB URI. Please update the MONGO_URI in your .env file with your actual MongoDB connection string.");
        }

        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${error.message}`);

        // Suggestion for connection errors
        if (error.message.includes("ENOTFOUND")) {
            console.error("Suggestion: Check if your MONGO_URI in .env is correct and if your IP is whitelisted in MongoDB Atlas.");
        }

        // Fallback to in-memory database (only in development)
        if (process.env.NODE_ENV !== 'production') {
            console.log("Attempting to connect to in-memory database...");
            try {
                const { MongoMemoryServer } = await import('mongodb-memory-server');
                const mongod = await MongoMemoryServer.create();
                const uri = mongod.getUri();

                const conn = await mongoose.connect(uri);
                console.log(`Fallback: MongoDB Connected to In-Memory Database: ${conn.connection.host}`);
                console.log("WARNING: Using in-memory database. Data will not be persisted afterrestart.");
            } catch (fallbackError: any) {
                console.error(`Fallback Error: ${fallbackError.message}`);
                process.exit(1);
            }
        } else {
            console.error("Production environment: Cannot fall back to in-memory database.");
            console.error("Please ensure MONGO_URI or MONGODB_URI environment variable is set correctly.");
            process.exit(1);
        }
    }
};
