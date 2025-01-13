import Joi from 'joi';

const productValidation = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().required(),
  images: Joi.string().required(),
  price: Joi.number().required(),
  stock: Joi.number().required(),
});

export { productValidation };
