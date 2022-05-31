import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import User from './schemas/user';

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.4.2', () => {
	console.log('Connect to MongoDB'), (err: string) => console.log(err);
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));

app.get('/', (req: Request, res: Response) => {
	res.send(`Currently in: ${req.url}`);
});

app.get('/users', async (req: Request, res: Response) => {
	const user = await User.where();

	res.send(user);
});

const generateNewUser = async () => {
	try {
		const user = await User.create({
			name: 'Joe'
		});
		console.log(user);
	} catch (err) {
		console.log(err);
	}
};
