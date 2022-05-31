import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		min: 3,
		max: 30
	},
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now()
	},
	updatedAt: {
		type: Date,
		default: () => Date.now()
	}
});

export default mongoose.model('User', userSchema);
