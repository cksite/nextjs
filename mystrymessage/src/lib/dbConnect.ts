import mongoose from "mongoose";
import { log } from "node:console";

 type ConnectionObject = {
    isConnected?: number
 }

 const connection: ConnectionObject = {}

 async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("already connected to database");
        return
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '',{})

        connection.isConnected = db.connections[0].readyState

        console.log("Db Connected successfully");
        
    }catch(error){
        console.log("Db Connection failed",error);
        process.exit(1);
    }
 }

 export default dbConnect;