import express from "express"
import { addNewBanner, getAllBanner, newBanner } from "../controllers/Banner.js"
import {  mutiUpload, singleUpload} from "../middleware/multer.js"
import upload from "../middleware/multer_two.js"


const router = express.Router()

router.post('/newBanner',singleUpload, newBanner).put('/newBanner/:id',singleUpload, addNewBanner)

router.get('/getAllBanner', getAllBanner )



export default router