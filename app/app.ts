import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';

import routes from './routes';

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    routes(this.app);
  }

  private config(): void {
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

export default new Server().app;
