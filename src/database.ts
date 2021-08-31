import { connect } from "mongoose";

class Database {
 public  async run(): Promise<void> {
    try {
      await connect(`${process.env.MONGODB_URL}/example`);
      console.log('Connected to database');
    } catch (err) {
      console.log('Error to connect to database', err.message);
    }
  }
}

export default new Database()