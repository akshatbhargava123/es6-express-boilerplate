import { Router } from 'express';
import userRouter from './user.route';

export default ({ db, req, res }) => {
	let api = Router();

	// mount `users` api
	api.use('/users', userRouter({ db, req, res }));

	api.get('/', (req, res) => {
		console.log('WELCOME USER!')
		res.json({ message: 'Welcome user' });
	});

	return api;
}
