import { UserModel } from "../models/user.model.js"

export const register = async(req,res)=>{

    const {username,email,password,country} = req.body;
    try{
        const newUser = await UserModel.create({
            username: username,
            password: password,
            email: email,
            country: country,
        })

        res.status(201).send("User succesfully created " +newUser)
    }catch(err){
        res.status(500).send("Something went wrong! "+err )
        console.log(err)
    }
   
}
export const login = async(req,res)=>{

   
}
export const logout = async(req,res)=>{

   
}