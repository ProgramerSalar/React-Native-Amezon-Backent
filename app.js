import express from "express"
import {config} from "dotenv"
import cors from "cors"

export const app = express()
config({
    path:"./data/.env"
})
app.use(express.json())

app.use(cors({
    credentials:true,
    methods:["GET","POST","PUT","DELETE"],
    origin:[process.env.FRONTENT_URL_1, process.env.FRONTENT_URL_2],
  }))




// Routes 
import user from "./routes/user.js"
import product from "./routes/product.js"


app.use('/ProgramerSalar/api/user', user)
app.use("/programerSalar/api/product",  product)