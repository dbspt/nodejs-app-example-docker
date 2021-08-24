import express, { Express } from 'express';
import routes from './app/routes';

class App {
  server: Express;

  constructor() {
    this.server = express();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App();