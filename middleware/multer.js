import multer from "multer";

let storage = multer.memoryStorage();
export const singleUpload = multer({
  storage,
}).single("file");




let multistorage = multer.memoryStorage();
export const mutiUpload = multer({
  multistorage,
}).array("file", )




