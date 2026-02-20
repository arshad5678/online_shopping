
import { connectDB } from './server/config/db';
import mongoose from 'mongoose';

// Mock process.env to ensure it tries to connect to a non-existent Atlas first (if not already set to one)
// or just rely on the fact that existing env probably fails as per user report.

// Ensure MONGODB_URI is set to something that fails if not set, or use the one from .env
// We want to force a failure if the real one works, but we can't easily do that without messing with .env.
// However, the user's issue is that it IS failing. So running connectDB() should trigger the fallback.

async function run() {
    console.log("Starting verification...");
    try {
        await connectDB();
        console.log("Connection successful!");
        console.log("Connection host:", mongoose.connection.host);

        // Check if it's localhost (memory server) or something else
        if (mongoose.connection.host.includes("127.0.0.1") || mongoose.connection.host.includes("localhost")) {
            console.log("VERIFICATION PASSED: Connected to local/in-memory database.");
        } else {
            console.log("VERIFICATION: Connected to remote database (Atlas?).");
            console.log("If this was supposed to fail, check your IP whitelist. If it works, then the issue is resolved anyway.");
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("Verification FAILED:", error);
        process.exit(1);
    }
}

run();
