import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  id: { type: Number, required: [true, 'Set title for product'] },
  title: { type: String, required: [true, 'Set title for product'] },
  price: { type: Number, required: [true, 'Set price for product'] },
  image: { type: String, required: [true, 'Set image for product'] },
  stock: { type: Number, required: [true, 'Set image for product'] },
});

const Product = model('Product', productSchema);
export { Product };
