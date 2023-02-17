import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import userModel from "../models/userModel.js";
import * as dotenv from "dotenv";
dotenv.config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.REACT_APP_api_secret,
  }; 

const jwtStrategy = new JwtStrategy(options, function(jwt_payload, done){
    userModel.findOne({_id:jwt_payload.sub}, function (err, user) {
        if (err) {
            return done(err,false);
        } if(user){
            return done(null, user);
        } else {
            return done(null, false);
        }
        })
    });
   
    export {jwtStrategy}