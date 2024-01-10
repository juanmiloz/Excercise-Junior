import dotenv from "dotenv";
import * as mongoose from "mongoose";


dotenv.config();

const connectionString: string = process.env.MONGO_URI || "mongodb://juanmiloz:Password@ac-tgmht0o-shard-00-00.7lvco4z.mongodb.net:27017,ac-tgmht0o-shard-00-01.7lvco4z.mongodb.net:27017,ac-tgmht0o-shard-00-02.7lvco4z.mongodb.net:27017/?replicaSet=atlas-11reuz-shard-0&ssl=true&authSource=admin"

export const db = mongoose.connect(connectionString).then((res)=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log('Connection error')
    console.log(err)
})