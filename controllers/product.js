import ErrorHandler from "../utils/error.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from "cloudinary"
import {Product} from "../models/product.js"


export const newProduct = async (req, res, next) => {
  const {
    name,
    description,
    price,
    originalPrice,
    percentageOff,
    stock,
    category,
  } = req.body;

  if(!req.file) return next(new ErrorHandler("Please add Image", 404))

  const file = getDataUri(req.file)
  const myCloud = await cloudinary.v2.uploader.upload(file.content)
  const image = {
    public_id:myCloud.public_id,
    url:myCloud.secure_url,
  }

  await Product.create({
    name,
    description,
    category,
    price,
    originalPrice,
    percentageOff,
    stock,
    images:[image],
  })

  res.status(200).json({
    success:true,
    message:"Product Created Successfully",
  })

  
};



export const getAllProduct = async (req, res, next) => {
    
    const { keyword, category } = req.query;  
    const products = await Product.find({
      name: {
        $regex: keyword ? keyword : "",
        $options: "i",
      },
      category: category ? category : undefined,
    });
  
    res.status(200).json({
      success: true,
      products,
    })

}