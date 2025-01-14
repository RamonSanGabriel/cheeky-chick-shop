import { Product } from '../models/productModel.js';
import { httpError } from '../helpers/httpError.js';
import { productValidation } from '../validation/validation.js';

const getAllProducts = async (_req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
    // throw httpError(res, 404, 'Product not found');
  }
};

const getProductById = async (req, res) => {
  const { productId } = req.params;

  const results = await Product.findById(productId);
  if (!results) {
    throw httpError(res, 404, 'Product not found');
  }
  res.json(results);
  // console.log(result);
};

const addProduct = async (req, res) => {
  const { error } = productValidation.validate(req.body);

  if (error) {
    throw httpError(res, 400, error.details[0].message);
  } else {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  }
};

export { getAllProducts, getProductById, addProduct };
