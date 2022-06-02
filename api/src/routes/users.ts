import { Router, Request, Response } from 'express';
const Joi = require('joi');

import User from '../schemas/user';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
	const users = await User.where();

	res.send(users);
});

router.get('/:id', async (req: Request, res: Response) => {
	const user = await User.find({ _id: req.params.id });

	res.send(user);
});

router.post('/', async (req: Request, res: Response) => {
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

module.exports = router;
