import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  const payload = { sub: userId };

  const options = {
    expiresIn: "2d",
    issuer: "Sweetpedia",
  };

  const secretOrPrivateKey = process.env.REACT_APP_secretOrPrivateKey;

  const token = jwt.sign(payload, secretOrPrivateKey, options);
  return token;
};

export default generateToken;
