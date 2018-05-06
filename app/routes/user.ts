import * as express from 'express';
import * as UserController from '../controllers/user';

class UserRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  public routes() {
    this.router.get('/:id', UserController.findOne);
  }
}

const userRouter = new UserRouter();
userRouter.routes();

const router = userRouter.router;

export default router;
