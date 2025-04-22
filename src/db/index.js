import mongoose, { connect } from "mongoose"
import {DB_NAME} from "../constants.js"

 const connectDB = async ()=>{
     try {
      const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n Connected !! ${connectionInstance.connection.host}`);
    
     } catch (error) { 
     console.log("not connected failed",error);
     process.exit(1)
     }
 }
 export default connectDB