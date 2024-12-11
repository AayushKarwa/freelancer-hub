import { UserModel } from "../models/user.model.js"
import jwt from "jsonwebtoken"

export const deleteUser = async (req, res) => {
    console.log("Inside deleteUser");

    try {
        const user = await UserModel.findById(req.params.id);

        if (!user) {
            return res.status(404).send("User not found!");
        }
       
        console.log(req.userId, user._id.toString())
        if (req.userId !== user._id.toString()) {
            return res.status(403).send("You can delete only your account!");
        }

        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).send(`User ${user._id} deleted successfully!`);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while deleting the user.");
    }
};

    
