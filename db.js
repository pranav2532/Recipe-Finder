import mongoose from "mongoose";

const url = `mongodb://127.0.0.1:27017/TableUserData`;

mongoose.connect(url);

const db = mongoose.connection;

db.on('connected' , ()=>{
    console.log("Database Has Been Connected");
})

db.on('disconnected' , ()=>{
    console.log("Database Is Not Connected");
})

db.on('error' , (err)=>{
    console.log(err);
})

export default db;