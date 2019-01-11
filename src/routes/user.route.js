import { Router } from 'express';

import UserController from '../controllers/user.controller.js';

export default ({ db, req, res }) => {
    const userRouter = Router();
    
    const userController = new UserController(db, req, res);

    userRouter.get('/', userController.list);
    
    userRouter.post('/', userController.create);

	return userRouter;
}
