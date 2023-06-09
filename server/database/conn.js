/* const mongoose=require("mongoose");


mongoose.connect("mongodb://0.0.0.0:27017/LoginFormPractice")
.then(()=>{
    console.log("mongodb connected");
})              
.catch(()=>{
    console.log("failed to connect")
}) */

import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";

async function connect(){
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strictQuery', true)
    const db = await mongoose.connect(getUri);
    console.log("database connected")
}

export default connect;