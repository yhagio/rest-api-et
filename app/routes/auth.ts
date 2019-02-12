import * as express from 'express';
import AuthController from '../controllers/auth';

class AuthRouter {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }

  public routes() {
    this.router.post('/signup', AuthController.signUp);
  }
}

const authRouter = new AuthRouter();
authRouter.routes();

const router = authRouter.router;

export default router;
