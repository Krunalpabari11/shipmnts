import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
export function DBConnect(){
const db=mongoose.connect(process.env.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('Error connecting to MongoDB Atlas', err);
});

}