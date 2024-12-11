import express from 'express'
import { deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/jwt.js';
const UserRouter = express.Router();


UserRouter.delete("/:id",verifyToken,deleteUser)

export default UserRouter;