import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
const Joi = require('joi');
const cors = require('cors');
require('dotenv').config();

import User from './schemas/user';

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.4.2', () => {
	console.log('Connect to MongoDB'), (err: string) => console.log(err);
});

const app = express();
const PORT = process.env.API_PORT || 3001;

app.use(cors({ origin: 'http://localhost:3000' }), express.json());
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));

app.get('/', (req: Request, res: Response) => {
	res.send(`Currently in: ${req.url}`);
});

app.get('/users', async (req: Request, res: Response) => {
	const users = await User.where();

	res.send(users);
});

app.get('/users/:id', async (req: Request, res: Response) => {
	const user = await User.find({ _id: req.params.id });

	res.send(user);
});

app.post('/users', async (req: Request, res: Response) => {
	const { error } = validateUsername(req.body);
	console.log(req.body);

	if (error) return res.status(400).send(error.details[0].message); // 400 Bad request

	await generateNewUser(req.body.username);
});

const generateNewUser = async (username: string) => {
	try {
		const user = await User.create({
			username: username
		});
		console.log(user);
	} catch (err) {
		console.log(err);
	}
};

const deleteAllUsers = async () => {
	await User.deleteMany({});
	console.log('deleted all users');
};

function validateUsername(username: string) {
	const schema = Joi.object({
		username: Joi.string().min(3).required()
	});

	return schema.validate(username);
}
