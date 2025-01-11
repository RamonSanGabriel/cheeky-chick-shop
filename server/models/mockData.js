import fs from 'fs/promises';
import path from 'path';
// import { nanoid } from 'nanoid';

export const productsPath = path.join('models', 'mockData.json');

const listAllProducts = async () => {
  try {
    const products = await fs.readFile(productsPath);
    return JSON.parse(products);
  } catch (error) {
    console.error('Error reading message', error.message);
  }
};

export { listAllProducts };
