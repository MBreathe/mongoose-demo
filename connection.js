import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { MONGODB_URI } = process.env;
if (!MONGODB_URI) {
    console.error('No MONGODB_URI provided in .env file');
    process.exit(1);
}

const dbConnect = async () => mongoose.connect(MONGODB_URI);

export default dbConnect;