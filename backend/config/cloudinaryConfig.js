var cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

// linking to the .env file
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// async uploader function
function uploadToCloudinary(image, filename) {
    try {
        return new Promise((resolve, reject) => {
            cloudinary.uploader.upload(
                image,
                {
                    folder: "Student-Portal/Profile-images/",
                    public_id: filename,
                    unique_filename: true,
                },
                (err, result) => {
                    if (err) return reject(err);
                    return resolve(result.url);
                }
            );
        });
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    uploadToCloudinary,
};
