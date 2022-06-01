import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 3,
		max: 30
	},
	createdAt: {
		type: Date,
		immutable: true,
		required: true,
		default: () => Date.now()
	},
	updatedAt: {
		type: Date,
		required: true,
		default: () => Date.now()
	}
});

export default mongoose.model('User', userSchema);
