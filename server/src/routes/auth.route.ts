import { Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const router = Router();

router.post('/login', async (req, res) : Promise<any> => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: 'User not found' });
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: 'Internal server error' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        const response = res.status(200).json({ message: 'Logged in' });
        return response;
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/register', async (req, res) : Promise<any> => {
    const { username, email, password, secretKey } = req.body;
    if (secretKey !== process.env.SECRET_KEY) {
        return res.status(400).json({ message: 'Invalid secret key' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();

        return res.status(201).json({ message: 'User created' });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/logout', (req, res) : any => {
    res.clearCookie('token');
    return res.status(200).json({ message: 'Logged out' });
});

export default router;
