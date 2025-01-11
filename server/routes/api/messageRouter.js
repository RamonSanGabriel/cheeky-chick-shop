import express from 'express';
import { listAllProducts } from '../../models/mockData.js';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await listAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
});
router.get('/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    console.log(productId);

    const product = mockData.find(
      (product) => product.id === parseInt(productId)
    );

    if (!product) {
      res.status(404).json({ message: 'Contact not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    next(error);
  }
  ``;
});
router.post('/', bodyParser.json(), async (req, res, next) => {
  try {
    const { title, price, images } = req.body;

    const newProduct = { id: nanoid(), title, price, images };
    listAllProducts.push(newProduct);

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});
export { router };
