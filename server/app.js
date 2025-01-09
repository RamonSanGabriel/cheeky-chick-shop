import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import { router as messageRouter } from './routes/api/messageRouter.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

const corsOptions = {
  origin: 'http://localhost:5173',
};
app.use(logger(formatsLogger));
app.use(cors(corsOptions));

app.use('/api/contacts', messageRouter);
app.use(express.json());
app.use(express.static('public'));

app.use((req, res) => {
  res.status(404).send({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

export { app };
