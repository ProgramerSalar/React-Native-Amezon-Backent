import express from "express"
import { singleUpload } from "../middleware/multer.js"
import { getAllCategory, newCategory } from "../controllers/category.js"



const router = express.Router()

router.post('/newCategory', singleUpload, newCategory)
router.get('/getAllCategory', getAllCategory )



export default router