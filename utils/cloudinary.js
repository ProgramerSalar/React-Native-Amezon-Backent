


cloudinary.config({
    cloud_name:process.env.CLOUDANRY_NAME, 
    api_key: process.env.CLOUDANRY_API_KEY, 
    api_secret: process.env.CLOUDANRY_API_SECRET
}); 


exports.uploads = (file, folder) =>{
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) =>{
            resolve({
                url: result.url, 
                id: result.public_id

            }, {
                resource_type: "auto", 
                folder: folder
            })
        })
    })
}