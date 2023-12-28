import express from "express"
import { getAllProduct, newProduct } from "../controllers/product.js"
import { singleUpload } from "../middleware/multer.js"




const router = express.Router()
router.post('/newProduct',singleUpload ,newProduct )
router.get("/getAllProduct", getAllProduct)






export default router