import { model, Schema } from "mongoose";
import IExample from '../interfaces/example';

const schema = new Schema<IExample>({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  job: {
    type: String,
    required: true
  }
})

export default model<IExample>('Example', schema)