import { Request, Response, NextFunction } from 'express';
import exampleService from '../services/example';

class ExampleController {
  public async getInformation(request: Request, response: Response, next: NextFunction) {
    const users = exampleService.getInformation();
    return response.status(200).json(users);
  }
}

export default new ExampleController();