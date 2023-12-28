import mongoose from "mongoose";



const schema = new mongoose.Schema({

    images:[
        {
            type:Array
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})


export const Banner = mongoose.model("Banner", schema)