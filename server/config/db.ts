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
        // Log a helpful suggestion if it looks like a connection error
        if (error.message.includes("ENOTFOUND")) {
            console.error("Suggestion: Check if your MONGO_URI in .env is correct and if your IP is whitelisted in MongoDB Atlas.");
        }
        process.exit(1);
    }
};
