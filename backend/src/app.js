import express from "express";
import {createServer} from "node:http";

import {Server} from "socket.io";
import mongoose from "mongoose";
import {connectToSocket} from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/user.routes.js"


const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.set("port",(process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

app.use("/api/v1/users",userRoutes);

const start=async()=>{
    app.set("mongo_user")
 try{
     const connectionDB= await mongoose.connect("mongodb+srv://pjgunjan111:wfVdZeydx5pTEVRZ@cluster0.osawf.mongodb.net/Zoomies?retryWrites=true&w=majority&appName=Cluster0");
     console.log(`mongo connected DB host:${connectionDB.connection.host}`);
  }
  catch(e){
    console.log("error:",e);

  } server.listen(8000,()=>{
    console.log("Listening on port");
});
};

start();