
import { v2 as cloudinary } from "cloudinary";

const imageUpload = async (req, res) => {
  console.log(req.file);

  try {
    const pictureUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "picture-profile",
    });
    res.status(200).json({msg: "Good Job, your image was uploaded!", userPicture: pictureUpload.url})
  } catch (error) {
    res.status(400).json({msg: "Sorry the upload went wrong"});
  }

  console.log("pictureUpload", pictureUpload);
};

export { imageUpload };
