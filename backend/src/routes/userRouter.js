import { Router } from 'express';
import { getUserDetails } from './controllers/userController.js'; // Adjust path as needed
import { isLoggedIn } from './middlewares/authMiddleware.js'; // Your authentication 


const userRouter = Router();


userRouter.get('/me', isLoggedIn, getUserDetails);

export default userRouter;