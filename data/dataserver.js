import mongoose from "mongoose";



export const DataServer = async() => {
    try{
        const {data} = await mongoose.connect(process.env.MOONGO_URL)
        console.log("Database is Conntected......")
        


    }catch(error){
        console.log(error)
    }
}