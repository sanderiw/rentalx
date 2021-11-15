import { Category } from '../model/Category';

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create(name: string, description: string) {
    const category: Category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}

export { CategoriesRepository };
