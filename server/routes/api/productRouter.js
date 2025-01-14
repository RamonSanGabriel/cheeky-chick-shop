import express from 'express';
import bodyParser from 'body-parser';
import { nanoid } from 'nanoid';
// prettier-ignore
import { getAllProducts, getProductById,addProduct } from '../../controllers/productController.js';

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const products = await getAllProducts();
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

    const product = await getProductById(productId);

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
    const { title, price, images, stock } = req.body;

    const newProduct = { id: nanoid(), title, price, images, stock };
    addProduct.push(newProduct);

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});
export { router };
