import mongoose from "mongoose";

const connection = {};

export const connectDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing db connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGODB_URL);
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log("Error while connecting to db", error);
        throw new Error("Error while connecting to db");
    }
}