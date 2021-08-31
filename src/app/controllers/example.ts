import { Request, Response, NextFunction } from 'express';
import exampleService from '../services/example';

class ExampleController {
  public async getInformation(request: Request, response: Response, next: NextFunction) {
    const users = await exampleService.getInformation();
    return response.status(200).json(users);
  }

  public async setInformation(request: Request, response: Response) {
    const { body } = request
    const result = await exampleService.setInformation(body);
    return response.status(201).json(result)
  }
}

export default new ExampleController();