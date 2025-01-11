import express from 'express';
// import { listAllProducts } from '../../models/mockData.js';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';
import { fetchData } from '../../models/mockData';
// import { getProductById } from '../../../client/src/components/NavBar/NavBar';

const router = express.Router();

router.get('/', async (_req, res, next) => {
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
    // const result = await getProductById(productId);

    /*   const product = await listAllProducts.find(
      (product) => product.id === parseInt(productId)
    ); */

    const product = await fetchData(productId);

    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    next(error);
  }
  // ``;
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
