import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import { router as productRouter } from './routes/api/productRouter.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

/* const corsOptions = {
  origin: 'http://localhost:5173',
}; */
const corsOptions = {
  origin: [
    // 'http://localhost:5173',
    'https://dummyjson.com/',
  ],
  methods: ['GET', 'POST', 'UPDATE', 'DELETE', 'PATCH'],
  credentials: true,
};
app.use(logger(formatsLogger));
app.use(cors(corsOptions));
// app.use(cors());

// http://localhost:8080/api/contacts
// app.use('/api/contacts', messageRouter);
app.use('/products', productRouter);
app.use(express.json());
app.use(express.static('public'));

app.use((_req, res) => {
  res.status(404).send({ message: 'Not found' });
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message });
});

export { app };
