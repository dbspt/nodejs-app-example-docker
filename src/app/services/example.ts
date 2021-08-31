import ExampleModel from "../models/example";
import IExample from '../interfaces/example';

class ExampleService {
  public async getInformation(): Promise<IExample[]> {
    return await ExampleModel.find({});
  }

  public async setInformation(data: IExample): Promise<IExample>{
    const example = new ExampleModel(data)

    return await example.save()
  }
}

export default new ExampleService();