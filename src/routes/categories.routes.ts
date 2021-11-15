import { Router } from 'express';
import { v4 as uuidv4, validate } from 'uuid';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  return response.status(201).json({ category });
});

export { categoriesRoutes };
