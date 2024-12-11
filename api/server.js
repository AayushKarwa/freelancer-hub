import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import mongoose  from 'mongoose';
const app = express();


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