import { Router } from 'express';
import { v4 as uuidv4, validate } from 'uuid';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category: Category = new Category();

  // const category2 = {
  //   ...new Category(),
  //   ...{
  //     name,
  //     description,
  //   },
  // };
  Object.assign(category, {
    name,
    description,
  });

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRoutes };
