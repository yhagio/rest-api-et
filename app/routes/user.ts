import * as express from 'express';
import UserController from '../controllers/user';

class UserRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  public routes() {
    this.router.get('/', UserController.all);
    this.router.get('/:userId', UserController.findOne);
  }
}

const userRouter = new UserRouter();
userRouter.routes();

const router = userRouter.router;

export default router;
