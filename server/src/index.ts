import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use('/api/auth', authRoutes);

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error('MONGO_URI is not defined in the environment variables');
}

mongoose.connect(mongoUri).then(() => {
    console.log('Connected to database');
}).catch((error) => {
    console.log('Database connection failed. Error: ', error);
})

app.listen(5000, () =>{
    console.log('Server is running on port 5000');
})