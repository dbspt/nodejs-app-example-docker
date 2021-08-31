  
import { Router } from 'express';
import exampleController from '../controllers/example';

class Routes {
  routes: Router;

  constructor() {
    this.routes = Router();
    this.buildExampleRoute();
  }

  private buildExampleRoute() {
    this.routes.get('/', exampleController.getInformation);
    this.routes.post('/', exampleController.setInformation);
  }
}

export default new Routes().routes;