import express from 'express'
import { deleteUser } from '../controllers/user.controller.js';
const UserRouter = express.Router();


UserRouter.get("/test",deleteUser)

export default UserRouter;