import { UserModel } from "../models/user.model.js"
import jwt from "jsonwebtoken"
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
    console.log("Inside deleteUser");

    try {
        const user = await UserModel.findById(req.params.id);

        if (!user) {
            return next(createError(404,"User not found!"))
        }
       
        console.log(req.userId, user._id.toString())
        if (req.userId !== user._id.toString()) {
            return  next(createError(403,"You can delete only your account!"))
        }

        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`User ${user._id} deleted successfully!`);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while deleting the user.");
    }
};

    
