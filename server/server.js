import { app } from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const { DB_HOST, PORT = 8080 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
    console.log('Database connect successfully');
  })
  .catch((error) =>
    console.log(`Server not running. Error message:${error.message}`)
  );
