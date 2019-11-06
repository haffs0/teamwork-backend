const cloudinary = require('cloudinary');
const envConfig = require('./env-config');

const cloudinaryConfig = (req, res, next) => {
  cloudinary.config({
    cloud_name: envConfig.CLOUDINARY_CLOUD_NAME,
    api_key: envConfig.CLOUDINARY_API_KEY,
    api_secret: envConfig.CLOUDINARY_API_SECRET,
  });
  next();
};

module.exports = cloudinaryConfig;

