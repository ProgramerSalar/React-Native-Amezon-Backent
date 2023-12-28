import { app } from "./app.js";
import { DataServer } from "./data/dataserver.js";
import cloudinary from "cloudinary"



cloudinary.v2.config({
    cloud_name:process.env.CLOUDANRY_NAME,
    api_key:process.env.CLOUDANRY_API_KEY,
    api_secret:process.env.CLOUDANRY_API_SECRET
})


app.listen(process.env.PORT, () => {
    console.log('server is running on port: 5000')
}) 




// database 
DataServer()