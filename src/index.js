
import dotenv from "dotenv"
//require ('dotenv').config({path:'./env'})
import connectDB from "./db/index.js";

dotenv.config({ path: './env'})

connectDB()


// import mongoose from "mongoose"

// import express from "express"
// const app =express()


// ;( async () =>{
//     try{
//         await connect.mongoose(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error",(error)=>{
//             console.error("eror",error)
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listing on port ${process.env.PORT}`)
//         })
//     }catch (error){
//         console.error("Error Occured", error)
        
//     }
// } )()



