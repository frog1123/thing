import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
const cors = require('cors');
require('dotenv').config();
const gradient = require('gradient-string');

const userRoute = require('./routes/users');

const color = gradient(['#66d096', '#fff']);

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.4.2', () => {
	console.log(`Connected to ${color('MongoDB')}`), (err: string) => console.log(err);
});

const api = express();
const PORT = process.env.API_PORT || 3001;

api.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }), express.json());
api.listen(PORT, () => console.log(`API listening on port ${color(PORT)}`));

api.get('/', (req: Request, res: Response) => {
	res.send(`Currently in: ${req.url}`);
});

api.use('/users', userRoute);
