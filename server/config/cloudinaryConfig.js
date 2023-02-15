import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfig = () => {
  cloudinary.config({
    cloud_name: process.env.REACT_APP_cloud_name,
    api_key: process.env.REACT_APP_api_key,
    api_secret: process.env.REACT_APP_api_secret,
  });
};

export default cloudinaryConfig;
