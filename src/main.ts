import app from './app';
import database from './database';
const PORT = 3000;

app.server.listen(PORT, async () => { 
  await database.run();
  console.log(`Server running on port ${PORT}.`)
});