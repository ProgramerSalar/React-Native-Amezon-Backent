import { Category } from "../models/category.js";
import ErrorHandler from "../utils/error.js";
import { getDataUri } from "../utils/features.js";
import cloudinary from "cloudinary"




export const newCategory = async (req, res, next) => {

  const { category } = req.body

  if (!req.file) return next(new ErrorHandler("Please add Image", 404));

  const file = getDataUri(req.file);
  const myCloud = await cloudinary.v2.uploader.upload(file.content);
  const image = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };

   await Category.create({
    category,
    image
  });




  res.status(200).json({
    success:true,
    message:"Category Created Succesfully",

  })
  
  
};

export const getAllCategory = async (req, res, next) => {

  const Categories = await Category.find({})

  res.status(200).json({
    success:true,
    Categories,
  })


}



