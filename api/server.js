import dotenv, { parse } from 'dotenv'
dotenv.config();
import express from 'express'
import mongoose  from 'mongoose';

import UserRouter from './routes/user.route.js';
import GigRouter from './routes/user.route.js';
import MessageRouter from './routes/user.route.js';
import OrderRouter from './routes/user.route.js';
import ReviewRouter from './routes/user.route.js';
import ConversationRouter from './routes/user.route.js';
import AuthRouter from './routes/auth.route.js';

const app = express();


app.use(express.json());

//ROUTES

app.use("/api/user",UserRouter);
app.use("/api/gigs",GigRouter);
app.use("/api/orders",OrderRouter);
app.use("/api/conversations",ConversationRouter);
app.use("/api/messages",MessageRouter);
app.use("/api/reviews",ReviewRouter);
app.use("/auth",AuthRouter);


async function main(){
    try{
        await mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("db is connected successfully...")
        })
        app.listen(3000,()=>{

            console.log('running on port 3000')
        })

    }catch(e){
        console.log(e);
    }
   
}
main();