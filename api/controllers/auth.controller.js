import dotenv from 'dotenv'
dotenv.config();
import { UserModel } from "../models/user.model.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import createError from '../utils/createError.js';

export const register = async(req,res,next)=>{

   
    const hashpass = await bcrypt.hash(req.body.password,10);
    try{
        const newUser = await UserModel.create({
           ...req.body,
           password :hashpass
        })

        res.status(201).send("User succesfully created " +newUser)
    }catch(err){
        res.status(500).send("Something went wrong! "+err )
        next(err)
    }
   
}
export const login = async(req,res,next)=>{

    // const{username,password} = req.body;
   console.log("username and pass fetched")
   try{
    const User = await UserModel.findOne({
        username: req.body.username,
    })
 if(!User){
    return next(createError(404,"User not found!"))
 }
console.log("user found!")
 const decodedpass = await bcrypt.compare(req.body.password,User.password)
 


 if(!decodedpass){
   return res.status(500).send("Incorrect password")
 }

 const{password,...info} = User;
 console.log("password decoded")
//  console.log(User._id,User._id.toString());
 const token = jwt.sign({
    id: User._id.toString(),
    isSeller: User.isSeller
 },process.env.JWT_SECRET)
console.log(token)

 res.cookie("accessToken",token, {
    httpOnly:true
 }).status(200).send(info._doc);

   }catch(err){

    res.status(500).send("Something went wrong! "+err )
    console.log(err)
   }
   
}
export const logout = async(req,res)=>{
  res.clearCookie("accessToken",{
    sameSite:none,
    secure:true
  }).status(200).send("user have been logged out successfully!")
   
   
}